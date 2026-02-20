import * as THREE from 'three';
import type { Molecule } from '../data/molecules';
import { CPK_COLORS, ATOM_RADII } from '../data/molecules';


export class MoleculeScene {
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private group: THREE.Group;
    private animId = 0;
    private isDragging = false;
    private lastMouse = { x: 0, y: 0 };
    private objects: THREE.Object3D[] = [];

    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const w = canvas.clientWidth || 400;
        const h = canvas.clientHeight || 400;

        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(w, h);
        this.renderer.shadowMap.enabled = false;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        this.camera.position.set(0, 0, 8);

        this.group = new THREE.Group();
        this.scene.add(this.group);

        // Lighting
        const ambient = new THREE.AmbientLight(0xffffff, 0.55);
        this.scene.add(ambient);
        const key = new THREE.PointLight(0xffffff, 1.8, 50);
        key.position.set(5, 5, 5);
        this.scene.add(key);
        const fill = new THREE.PointLight(0x8899ff, 0.7, 50);
        fill.position.set(-5, -3, 3);
        this.scene.add(fill);

        this.setupInteraction();
    }

    // ─── Build molecule ─────────────────────────────────────────────────
    build(mol: Molecule) {
        this.clear();

        // For material category: use extended crystal lattice
        if (mol.category === 'material') {
            this.buildCrystalLattice(mol);
            return;
        }

        // Standard molecule render
        const positions = mol.atoms.map(a => new THREE.Vector3(...a.pos));

        const center = new THREE.Vector3();
        positions.forEach(p => center.add(p));
        center.divideScalar(positions.length);

        mol.atoms.forEach((a, i) => {
            const pos = positions[i].clone().sub(center);
            const color = CPK_COLORS[a.sym] ?? CPK_COLORS.DEFAULT;
            const radius = ATOM_RADII[a.sym] ?? ATOM_RADII.DEFAULT;
            const geo = new THREE.SphereGeometry(radius, 28, 28);
            const mat = new THREE.MeshStandardMaterial({
                color, roughness: 0.35, metalness: 0.15,
                emissive: color, emissiveIntensity: 0.05,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(pos);
            this.group.add(mesh);
            this.objects.push(mesh);
        });

        mol.bonds.forEach(bond => {
            const p1 = positions[bond.a].clone().sub(center);
            const p2 = positions[bond.b].clone().sub(center);
            this.addBond(p1, p2, bond.type);
        });

        let maxDist = 1.5;
        positions.forEach(p => {
            const d = p.clone().sub(center).length();
            if (d > maxDist) maxDist = d;
        });
        this.camera.position.z = maxDist * 2.8 + 2.5;
    }

    // ─── Crystal lattice dispatcher ──────────────────────────────────────
    private buildCrystalLattice(mol: Molecule) {
        const f = mol.formula;
        if (f.includes('Berlian')) {
            this.buildDiamondLattice();
        } else if (f.includes('Grafit')) {
            this.buildGraphiteLattice();
        } else if (f.includes('Fe')) {
            this.buildBCCLattice();
        } else {
            // Glucose/other materials: standard render
            this.buildStandardFallback(mol);
        }
    }

    private buildStandardFallback(mol: Molecule) {
        const positions = mol.atoms.map(a => new THREE.Vector3(...a.pos));
        const center = new THREE.Vector3();
        positions.forEach(p => center.add(p));
        center.divideScalar(positions.length);
        mol.atoms.forEach((a, i) => {
            const pos = positions[i].clone().sub(center);
            const color = CPK_COLORS[a.sym] ?? CPK_COLORS.DEFAULT;
            const radius = ATOM_RADII[a.sym] ?? ATOM_RADII.DEFAULT;
            const geo = new THREE.SphereGeometry(radius, 20, 20);
            const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.15 });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(pos);
            this.group.add(mesh);
            this.objects.push(mesh);
        });
        mol.bonds.forEach(bond => {
            const p1 = positions[bond.a].clone().sub(center);
            const p2 = positions[bond.b].clone().sub(center);
            this.addBond(p1, p2, bond.type);
        });
        let maxDist = 1.5;
        positions.forEach(p => { const d = p.clone().sub(center).length(); if (d > maxDist) maxDist = d; });
        this.camera.position.z = maxDist * 2.8 + 2.5;
    }

    // ── Diamond Cubic Lattice ────────────────────────────────────────────
    private buildDiamondLattice() {
        // Diamond cubic: 2 interpenetrating FCC lattices
        // Lattice constant a=2 (scaled units)
        const a = 2.0;
        // FCC basis points in [0,a]^3
        const fccBasis = [
            [0, 0, 0], [a * 0.5, a * 0.5, 0], [a * 0.5, 0, a * 0.5], [0, a * 0.5, a * 0.5],
        ];
        // 2nd FCC offset by (a/4, a/4, a/4)
        const d = a / 4;
        const fccBasis2 = fccBasis.map(([x, y, z]) => [x + d, y + d, z + d]);
        const allBasis = [...fccBasis, ...fccBasis2];

        const N = 2; // supercell repeat
        const allPos: THREE.Vector3[] = [];
        const halfExtent = (N * a) / 2;

        for (let ix = 0; ix < N; ix++) {
            for (let iy = 0; iy < N; iy++) {
                for (let iz = 0; iz < N; iz++) {
                    allBasis.forEach(([bx, by, bz]) => {
                        const x = bx + ix * a - halfExtent;
                        const y = by + iy * a - halfExtent;
                        const z = bz + iz * a - halfExtent;
                        // Deduplicate
                        const isDup = allPos.some(p => Math.abs(p.x - x) < 0.01 && Math.abs(p.y - y) < 0.01 && Math.abs(p.z - z) < 0.01);
                        if (!isDup) allPos.push(new THREE.Vector3(x, y, z));
                    });
                }
            }
        }

        const bondThreshold = a * 0.5; // nearest-neighbour C-C in diamond
        this.renderLatticeAtoms(allPos, 0x6ec6ff, 0.30, true);
        this.addLatticeEdges(allPos, bondThreshold * 1.05, 0.045, 0x99ccff, allPos);
        this.camera.position.z = 10;
    }

    // ── Graphite Layered Lattice ─────────────────────────────────────────
    private buildGraphiteLattice() {
        const bondLen = 0.82;
        const layerGap = 1.15;
        const numLayers = 4;
        const allPos: THREE.Vector3[] = [];
        const intraLayerBonds: [THREE.Vector3, THREE.Vector3][] = [];

        // Hexagonal tiling: 2-atom unit cell repeated
        // a1 = bondLen*(sqrt(3),0), a2 = bondLen*(sqrt(3)/2, 3/2)
        const sq3 = Math.sqrt(3);
        const a1x = sq3 * bondLen; const a1y = 0;
        const a2x = sq3 * bondLen * 0.5; const a2y = 1.5 * bondLen;

        for (let layer = 0; layer < numLayers; layer++) {
            const z = (layer - (numLayers - 1) / 2) * layerGap;
            const shiftX = layer % 2 === 1 ? bondLen * sq3 / 3 : 0; // AB stacking
            const layerAtoms: THREE.Vector3[] = [];

            const R = 5; // tiles
            for (let n = -R; n <= R; n++) {
                for (let m = -R; m <= R; m++) {
                    const ox = n * a1x + m * a2x;
                    const oy = n * a1y + m * a2y;
                    // 2-atom basis within unit cell
                    const atomsInCell: [number, number][] = [[0, 0], [sq3 / 3 * bondLen, 0]];
                    atomsInCell.forEach(([dx, dy]) => {
                        const x = ox + dx + shiftX; const y = oy + dy;
                        const isDup = layerAtoms.some(p => Math.abs(p.x - x) < 0.05 && Math.abs(p.y - y) < 0.05);
                        if (!isDup) layerAtoms.push(new THREE.Vector3(x, y, z));
                    });
                }
            }

            // Clip circular
            const maxR = 4.2;
            const cx = layerAtoms.reduce((s, p) => s + p.x, 0) / layerAtoms.length;
            const cy = layerAtoms.reduce((s, p) => s + p.y, 0) / layerAtoms.length;
            const clipped = layerAtoms.filter(p => Math.hypot(p.x - cx, p.y - cy) < maxR);
            clipped.forEach(p => { p.x -= cx; p.y -= cy; });

            allPos.push(...clipped);

            // Intra-layer bonds
            for (let i = 0; i < clipped.length; i++) {
                for (let j = i + 1; j < clipped.length; j++) {
                    if (clipped[i].distanceTo(clipped[j]) < bondLen * 1.15) {
                        intraLayerBonds.push([clipped[i].clone(), clipped[j].clone()]);
                    }
                }
            }
        }

        // Render atoms
        const maxRad = 4.2;
        allPos.forEach(p => {
            const r = Math.hypot(p.x, p.y) / maxRad;
            const opacity = Math.max(0.08, 1 - r * 0.85);
            const geo = new THREE.SphereGeometry(0.20, 14, 14);
            const mat = new THREE.MeshStandardMaterial({
                color: 0x8888ff,
                roughness: 0.25, metalness: 0.4,
                transparent: opacity < 0.99, opacity,
                emissive: 0x4444cc, emissiveIntensity: 0.08,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(p);
            this.group.add(mesh);
            this.objects.push(mesh);
        });

        // Intra-layer bonds
        intraLayerBonds.forEach(([p1, p2]) => {
            const midR = Math.hypot((p1.x + p2.x) / 2, (p1.y + p2.y) / 2) / maxRad;
            const op = Math.max(0.06, 1 - midR * 0.85);
            this.addBondColored(p1, p2, 0x6688ff, 0.035, op);
        });

        this.camera.position.z = 11;
    }

    // ── BCC Iron Lattice ─────────────────────────────────────────────────
    private buildBCCLattice() {
        const a = 1.5; // lattice constant
        const N = 3;   // 3x3x3 unit cells
        const allPos: THREE.Vector3[] = [];
        const half = (N * a) / 2;

        for (let ix = 0; ix <= N; ix++) {
            for (let iy = 0; iy <= N; iy++) {
                for (let iz = 0; iz <= N; iz++) {
                    allPos.push(new THREE.Vector3(ix * a - half, iy * a - half, iz * a - half));
                    // Body-centre
                    if (ix < N && iy < N && iz < N) {
                        allPos.push(new THREE.Vector3(
                            (ix + 0.5) * a - half,
                            (iy + 0.5) * a - half,
                            (iz + 0.5) * a - half,
                        ));
                    }
                }
            }
        }

        this.renderLatticeAtoms(allPos, CPK_COLORS['Fe'] ?? 0xE06633, 0.32, true);
        this.addLatticeEdges(allPos, a * 0.54, 0.042, 0xff9944, allPos); // nearest-neighbour = a*sqrt(3)/2 ≈ 0.866*a
        this.camera.position.z = 11;
    }

    // ── Shared helpers ───────────────────────────────────────────────────
    private renderLatticeAtoms(
        positions: THREE.Vector3[], color: number, radius: number, fadeEdge: boolean
    ) {
        const maxR = positions.reduce((m, p) => Math.max(m, p.length()), 0) || 1;
        const isIron = color === (CPK_COLORS['Fe'] ?? 0xE06633);
        positions.forEach(p => {
            const t = p.length() / maxR;
            const opacity = fadeEdge ? Math.max(0.1, 1 - t * 0.78) : 1;
            const r = fadeEdge ? radius * (0.75 + 0.25 * (1 - t)) : radius;
            const geo = new THREE.SphereGeometry(r, 18, 18);
            const mat = new THREE.MeshStandardMaterial({
                color,
                roughness: isIron ? 0.35 : 0.2,
                metalness: isIron ? 0.7 : 0.05,
                transparent: opacity < 0.99, opacity,
                emissive: color, emissiveIntensity: isIron ? 0.06 : 0.03,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(p);
            this.group.add(mesh);
            this.objects.push(mesh);
        });
    }

    private addLatticeEdges(
        positions: THREE.Vector3[], threshold: number, radius: number,
        color: number, allPos: THREE.Vector3[]
    ) {
        const maxR = allPos.reduce((m, p) => Math.max(m, p.length()), 0) || 1;
        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const d = positions[i].distanceTo(positions[j]);
                if (d <= threshold) {
                    const midLen = positions[i].clone().lerp(positions[j], 0.5).length();
                    const opacity = Math.max(0.06, 1 - (midLen / maxR) * 0.78);
                    this.addBondColored(positions[i], positions[j], color, radius, opacity);
                }
            }
        }
    }

    private addBondColored(
        p1: THREE.Vector3, p2: THREE.Vector3,
        color: number, radius: number, opacity: number
    ) {
        const dir = new THREE.Vector3().subVectors(p2, p1);
        const len = dir.length();
        if (len < 0.01) return;
        const mid = new THREE.Vector3().lerpVectors(p1, p2, 0.5);
        const geo = new THREE.CylinderGeometry(radius, radius, len, 8, 1);
        const mat = new THREE.MeshStandardMaterial({
            color, roughness: 0.5, metalness: 0.1,
            transparent: opacity < 0.99, opacity,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(mid);
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
        this.group.add(mesh);
        this.objects.push(mesh);
    }

    // ─── Bond cylinder(s) — standard molecules ───────────────────────────
    private addBond(
        p1: THREE.Vector3, p2: THREE.Vector3,
        type: 'single' | 'double' | 'triple',
    ) {
        const dir = new THREE.Vector3().subVectors(p2, p1);
        const len = dir.length();
        if (len < 0.001) return;
        const mid = new THREE.Vector3().lerpVectors(p1, p2, 0.5);
        const dirN = dir.clone().normalize();
        let perp = new THREE.Vector3(0, 1, 0);
        if (Math.abs(dirN.dot(perp)) > 0.99) perp = new THREE.Vector3(1, 0, 0);
        perp.crossVectors(dirN, perp).normalize();

        const configs: { offset: number; radius: number }[] =
            type === 'single' ? [{ offset: 0, radius: 0.075 }] :
                type === 'double' ? [{ offset: -0.10, radius: 0.055 }, { offset: 0.10, radius: 0.055 }] :
                    [{ offset: -0.13, radius: 0.045 }, { offset: 0, radius: 0.045 }, { offset: 0.13, radius: 0.045 }];

        configs.forEach(cfg => {
            const geo = new THREE.CylinderGeometry(cfg.radius, cfg.radius, len, 10, 1);
            const mat = new THREE.MeshStandardMaterial({ color: 0xaaaacc, roughness: 0.6, metalness: 0.0 });
            const mesh = new THREE.Mesh(geo, mat);
            const pos = mid.clone().addScaledVector(perp, cfg.offset);
            mesh.position.copy(pos);
            mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dirN);
            this.group.add(mesh);
            this.objects.push(mesh);
        });
    }

    // ─── Clear scene ─────────────────────────────────────────────────────
    clear() {
        this.objects.forEach(o => {
            this.group.remove(o);
            if ((o as THREE.Mesh).geometry) (o as THREE.Mesh).geometry.dispose();
        });
        this.objects = [];
        this.group.rotation.set(0, 0, 0);
    }

    // ─── Interaction ─────────────────────────────────────────────────────
    private setupInteraction() {
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
            this.group.rotation.y += dx * 0.008;
            this.group.rotation.x += dy * 0.008;
            this.lastMouse = { x: e.clientX, y: e.clientY };
        });
        c.addEventListener('wheel', e => {
            this.camera.position.z = Math.max(2, Math.min(30, this.camera.position.z + e.deltaY * 0.01));
        }, { passive: true });

        let lastT = { x: 0, y: 0 };
        c.addEventListener('touchstart', e => { lastT = { x: e.touches[0].clientX, y: e.touches[0].clientY }; });
        c.addEventListener('touchmove', e => {
            const dx = e.touches[0].clientX - lastT.x;
            const dy = e.touches[0].clientY - lastT.y;
            this.group.rotation.y += dx * 0.008;
            this.group.rotation.x += dy * 0.008;
            lastT = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            e.preventDefault();
        }, { passive: false });
    }

    // ─── Animation loop ──────────────────────────────────────────────────
    start() {
        const tick = () => {
            this.animId = requestAnimationFrame(tick);
            if (!this.isDragging) this.group.rotation.y += 0.004;
            this.renderer.render(this.scene, this.camera);
        };
        tick();
    }

    resize(w: number, h: number) {
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
    }

    destroy() {
        cancelAnimationFrame(this.animId);
        this.clear();
        this.renderer.dispose();
    }
}
