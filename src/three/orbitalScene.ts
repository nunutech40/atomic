import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────────────────────
// Orbital Scene — visualises atomic orbitals as probability clouds
// Renders s, p, d orbitals based on electron configuration
// ─────────────────────────────────────────────────────────────────────────────

interface OrbitalDef {
    type: 's' | 'p' | 'd' | 'f';
    n: number;         // principal quantum number
    color: THREE.Color;
    opacity: number;
}

export class OrbitalScene {
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private group: THREE.Group;
    private animId = 0;
    private isDragging = false;
    private lastMouse = { x: 0, y: 0 };
    private canvas: HTMLCanvasElement;
    private color: THREE.Color;
    private particles: THREE.Points[] = [];

    constructor(canvas: HTMLCanvasElement, colorHex: string) {
        this.canvas = canvas;
        this.color = new THREE.Color(colorHex);

        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const w = canvas.width || canvas.clientWidth || 300;
        this.renderer.setSize(w, w);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
        this.camera.position.z = 8;

        this.group = new THREE.Group();
        this.scene.add(this.group);

        // Ambient + soft rim light
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const rim = new THREE.DirectionalLight(colorHex, 1.2);
        rim.position.set(5, 5, 5);
        this.scene.add(rim);

        this.setupDrag();
    }

    // ── Build orbital clouds from config string ──────────────────────────────
    build(atomicNumber: number, configStr: string) {
        // Clear old
        this.particles.forEach(p => this.group.remove(p));
        this.particles = [];
        while (this.group.children.length) this.group.remove(this.group.children[0]);

        // Nucleus dot
        const nucGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const nucMat = new THREE.MeshStandardMaterial({
            color: this.color,
            emissive: this.color,
            emissiveIntensity: 0.8,
        });
        this.group.add(new THREE.Mesh(nucGeo, nucMat));

        // Parse config into orbitals
        const orbitals = parseConfig(configStr, this.color, atomicNumber);

        orbitals.forEach(orb => {
            const pts = this.buildOrbitalCloud(orb);
            this.group.add(pts);
            this.particles.push(pts);
        });

        // Scale camera to content
        const maxN = Math.max(...orbitals.map(o => o.n), 1);
        this.camera.position.z = maxN * 3 + 4;
    }

    // ── Build instanced particle cloud for one orbital ───────────────────────
    private buildOrbitalCloud(orb: OrbitalDef): THREE.Points {
        const COUNT = orb.type === 'f' ? 3000 : orb.type === 'd' ? 4000 : 5000;
        const scale = orb.n * 0.9 + 0.8;

        const positions = new Float32Array(COUNT * 3);

        if (orb.type === 's') {
            // Spherical s-orbital — radial gaussian
            for (let i = 0; i < COUNT; i++) {
                const r = gaussianRandom(0, scale * 0.9);
                const theta = Math.acos(2 * Math.random() - 1);
                const phi = Math.random() * Math.PI * 2;
                positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
                positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
                positions[i * 3 + 2] = r * Math.cos(theta);
            }
        } else if (orb.type === 'p') {
            // p-orbital — dumbbell/figure-8 in 3 orientations
            const axis = (orb.n - 1) % 3; // x, y, z
            for (let i = 0; i < COUNT; i++) {
                const r = gaussianRandom(0, scale * 0.8);
                const theta = Math.acos(2 * Math.random() - 1);
                const phi = Math.random() * Math.PI * 2;

                let x = r * Math.sin(theta) * Math.cos(phi);
                let y = r * Math.sin(theta) * Math.sin(phi);
                let z = r * Math.cos(theta);

                // cos²θ weight → dumbbell along one axis
                const cosTheta = z / (Math.sqrt(x * x + y * y + z * z) + 1e-8);
                const prob = cosTheta * cosTheta;
                if (Math.random() > prob * 2.5) {
                    // resample near the lobes
                    const sign = Math.random() > 0.5 ? 1 : -1;
                    const lobe = gaussianRandom(0, scale * 0.6);
                    const spread = gaussianRandom(0, scale * 0.25);
                    x = axis === 0 ? sign * (Math.abs(lobe) + 0.3) : spread;
                    y = axis === 1 ? sign * (Math.abs(lobe) + 0.3) : spread;
                    z = axis === 2 ? sign * (Math.abs(lobe) + 0.3) : spread;
                }

                positions[i * 3] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = z;
            }
        } else if (orb.type === 'd') {
            // d-orbital — cloverleaf / toroidal variation
            const variant = (orb.n - 1) % 5;
            for (let i = 0; i < COUNT; i++) {
                let x = 0, y = 0, z = 0;
                const r = gaussianRandom(0, scale * 0.75);
                const theta = Math.random() * Math.PI;
                const phi = Math.random() * Math.PI * 2;

                const sin2 = Math.sin(theta) * Math.sin(theta);
                const cos2 = Math.cos(theta) * Math.cos(theta);

                if (variant < 4) {
                    // dxy, dxz, dyz, dx2-y2 — four-lobe cloverleaf
                    const prob = sin2 * cos2 * 4;
                    if (Math.random() > prob) {
                        const angle = (Math.floor(Math.random() * 4) * Math.PI / 2) + Math.PI / 4;
                        const rL = Math.abs(gaussianRandom(0, scale * 0.55)) + 0.3;
                        x = rL * Math.cos(angle);
                        y = rL * Math.sin(angle);
                        z = gaussianRandom(0, scale * 0.2);
                    } else {
                        x = r * Math.sin(theta) * Math.cos(phi);
                        y = r * Math.sin(theta) * Math.sin(phi);
                        z = r * Math.cos(theta);
                    }
                    if (variant === 1) { [x, z] = [z, x]; }
                    if (variant === 2) { [y, z] = [z, y]; }
                } else {
                    // dz² — donut + two poles
                    const useDonut = Math.random() > 0.5;
                    if (useDonut) {
                        const rD = scale * 0.55 + gaussianRandom(0, scale * 0.2);
                        const angle = Math.random() * Math.PI * 2;
                        x = rD * Math.cos(angle);
                        y = rD * Math.sin(angle);
                        z = gaussianRandom(0, scale * 0.25);
                    } else {
                        const pole = Math.random() > 0.5 ? 1 : -1;
                        x = gaussianRandom(0, scale * 0.25);
                        y = gaussianRandom(0, scale * 0.25);
                        z = pole * (Math.abs(gaussianRandom(0, scale * 0.7)) + 0.4);
                    }
                }

                positions[i * 3] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = z;
            }
        } else {
            // f-orbital — complex, approximated as multi-lobe
            for (let i = 0; i < COUNT; i++) {
                const lobe = Math.floor(Math.random() * 8);
                const angle1 = (lobe / 8) * Math.PI * 2;
                const angle2 = (lobe % 4) * (Math.PI / 2);
                const r = Math.abs(gaussianRandom(0, scale * 0.6)) + 0.2;
                positions[i * 3] = r * Math.cos(angle1) * 0.8;
                positions[i * 3 + 1] = r * Math.sin(angle2) * 0.8;
                positions[i * 3 + 2] = r * Math.sin(angle1) * Math.cos(angle2);
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const mat = new THREE.PointsMaterial({
            color: orb.color,
            size: 0.045,
            transparent: true,
            opacity: orb.opacity,
            sizeAttenuation: true,
            depthWrite: false,
        });

        return new THREE.Points(geo, mat);
    }

    // ── Drag to rotate ───────────────────────────────────────────────────────
    private setupDrag() {
        const c = this.canvas;
        c.addEventListener('mousedown', e => {
            this.isDragging = true;
            this.lastMouse = { x: e.clientX, y: e.clientY };
        });
        window.addEventListener('mouseup', () => { this.isDragging = false; });
        window.addEventListener('mousemove', e => {
            if (!this.isDragging) return;
            const dx = e.clientX - this.lastMouse.x;
            const dy = e.clientY - this.lastMouse.y;
            this.group.rotation.y += dx * 0.006;
            this.group.rotation.x += dy * 0.006;
            this.lastMouse = { x: e.clientX, y: e.clientY };
        });
        c.addEventListener('wheel', e => {
            this.camera.position.z = Math.max(2, Math.min(30, this.camera.position.z + e.deltaY * 0.012));
        }, { passive: true });

        let lastTouch = { x: 0, y: 0 };
        c.addEventListener('touchstart', e => { lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY }; });
        c.addEventListener('touchmove', e => {
            const dx = e.touches[0].clientX - lastTouch.x;
            const dy = e.touches[0].clientY - lastTouch.y;
            this.group.rotation.y += dx * 0.006;
            this.group.rotation.x += dy * 0.006;
            lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            e.preventDefault();
        }, { passive: false });
    }

    start() {
        const animate = () => {
            this.animId = requestAnimationFrame(animate);
            this.group.rotation.y += 0.003;
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }

    resize(w: number, h: number) {
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
    }

    destroy() {
        cancelAnimationFrame(this.animId);
        this.renderer.dispose();
    }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function gaussianRandom(mean: number, std: number): number {
    // Box-Muller transform
    const u = 1 - Math.random();
    const v = Math.random();
    return mean + std * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

// Parse electron config string like "1s2 2s2 2p6 3d5" into orbital defs
function parseConfig(configStr: string, baseColor: THREE.Color, atomicNumber: number): OrbitalDef[] {
    const orbitals: OrbitalDef[] = [];
    const types: ('s' | 'p' | 'd' | 'f')[] = ['s', 'p', 'd', 'f'];

    // Strip [noble] prefix
    const clean = configStr.replace(/\[[^\]]+\]\s*/, '').trim();
    const tokens = clean.split(/\s+/);

    // Palette: shift hue per orbital type for visual differentiation
    const hslBase = { h: 0, s: 0, l: 0 };
    baseColor.getHSL(hslBase);

    const typeColors: Record<string, THREE.Color> = {
        s: new THREE.Color().setHSL(hslBase.h, 0.8, 0.65),
        p: new THREE.Color().setHSL((hslBase.h + 0.12) % 1, 0.85, 0.6),
        d: new THREE.Color().setHSL((hslBase.h + 0.25) % 1, 0.9, 0.55),
        f: new THREE.Color().setHSL((hslBase.h + 0.4) % 1, 0.85, 0.5),
    };

    // Cap total orbitals for performance — show last 4 meaningful ones
    const seen: Record<string, number> = {};

    tokens.forEach(token => {
        const m = token.match(/^(\d)([spdf])(\d+)/);
        if (!m) return;
        const n = parseInt(m[1]);
        const type = m[2] as 's' | 'p' | 'd' | 'f';
        const count = parseInt(m[3]);
        if (!types.includes(type) || count === 0) return;

        const key = `${n}${type}`;
        seen[key] = (seen[key] || 0) + 1;

        orbitals.push({
            type,
            n,
            color: typeColors[type],
            opacity: type === 's' ? 0.55 : type === 'p' ? 0.5 : type === 'd' ? 0.45 : 0.4,
        });
    });

    // For heavy atoms (Z > 36) show just the outermost relevant orbitals
    if (atomicNumber > 36 && orbitals.length > 5) {
        return orbitals.slice(-5);
    }
    if (orbitals.length > 8) {
        return orbitals.slice(-8);
    }

    return orbitals.length > 0 ? orbitals : [{
        type: 's', n: 1,
        color: typeColors['s'],
        opacity: 0.55,
    }];
}
