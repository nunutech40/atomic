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

        // Collect atom positions
        const positions = mol.atoms.map(a => new THREE.Vector3(...a.pos));

        // Compute center of mass to center the molecule
        const center = new THREE.Vector3();
        positions.forEach(p => center.add(p));
        center.divideScalar(positions.length);

        // Draw atoms
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

        // Draw bonds
        mol.bonds.forEach(bond => {
            const p1 = positions[bond.a].clone().sub(center);
            const p2 = positions[bond.b].clone().sub(center);
            this.addBond(p1, p2, bond.type);
        });

        // Fit camera
        let maxDist = 1.5;
        positions.forEach(p => {
            const d = p.clone().sub(center).length();
            if (d > maxDist) maxDist = d;
        });
        this.camera.position.z = maxDist * 2.8 + 2.5;
    }

    // ─── Bond cylinder(s) ───────────────────────────────────────────────
    private addBond(
        p1: THREE.Vector3,
        p2: THREE.Vector3,
        type: 'single' | 'double' | 'triple',
    ) {
        const dir = new THREE.Vector3().subVectors(p2, p1);
        const len = dir.length();
        if (len < 0.001) return;
        const mid = new THREE.Vector3().lerpVectors(p1, p2, 0.5);

        // Perpendicular vector for offset in double/triple bonds
        const dirN = dir.clone().normalize();
        let perp = new THREE.Vector3(0, 1, 0);
        if (Math.abs(dirN.dot(perp)) > 0.99) perp = new THREE.Vector3(1, 0, 0);
        perp.crossVectors(dirN, perp).normalize();

        const configs: { offset: number; radius: number }[] =
            type === 'single' ? [{ offset: 0, radius: 0.075 }] :
                type === 'double' ? [{ offset: -0.10, radius: 0.055 },
                { offset: 0.10, radius: 0.055 }] :
            /* triple */[{ offset: -0.13, radius: 0.045 },
                    { offset: 0, radius: 0.045 },
                    { offset: 0.13, radius: 0.045 }];

        configs.forEach(cfg => {
            const geo = new THREE.CylinderGeometry(cfg.radius, cfg.radius, len, 10, 1);
            const mat = new THREE.MeshStandardMaterial({
                color: 0xaaaacc, roughness: 0.6, metalness: 0.0,
            });
            const mesh = new THREE.Mesh(geo, mat);

            const pos = mid.clone().addScaledVector(perp, cfg.offset);
            mesh.position.copy(pos);
            // Align cylinder Y-axis with bond direction
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

        // Touch
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
            // Slow auto-rotate when not dragging
            if (!this.isDragging) {
                this.group.rotation.y += 0.004;
            }
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
