import * as THREE from 'three';
import { getElectronShells } from '../utils/electronConfig';

interface Orbit {
    mesh: THREE.Mesh;
    pivot: THREE.Object3D;
    speed: number;
    angle: number;
    radius: number;
}

export class AtomScene {
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private orbits: Orbit[] = [];
    private nucleus!: THREE.Mesh;
    private animId = 0;
    private isDragging = false;
    private lastMouse = { x: 0, y: 0 };
    private sphereGroup!: THREE.Group;
    private color: THREE.Color;

    private canvas: HTMLCanvasElement;
    constructor(canvas: HTMLCanvasElement, colorHex: string) {
        this.canvas = canvas;
        this.color = new THREE.Color(colorHex);
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const w = canvas.width || canvas.clientWidth || 300;
        this.renderer.setSize(w, w);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        this.camera.position.z = 6;

        this.sphereGroup = new THREE.Group();
        this.scene.add(this.sphereGroup);

        // Lighting
        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambient);
        const point = new THREE.PointLight(colorHex, 2, 20);
        point.position.set(3, 3, 3);
        this.scene.add(point);
        const point2 = new THREE.PointLight(0xffffff, 0.5, 20);
        point2.position.set(-3, -3, -3);
        this.scene.add(point2);

        this.setupDrag();
    }

    build(atomicNumber: number) {
        // Clear previous
        while (this.sphereGroup.children.length) this.sphereGroup.remove(this.sphereGroup.children[0]);
        this.orbits = [];

        const shells = getElectronShells(atomicNumber);

        // Nucleus
        const nucSize = Math.log(atomicNumber + 1) * 0.18 + 0.22;
        const nucGeo = new THREE.SphereGeometry(nucSize, 32, 32);
        const nucMat = new THREE.MeshStandardMaterial({
            color: this.color, emissive: this.color, emissiveIntensity: 0.4,
            roughness: 0.3, metalness: 0.6,
        });
        this.nucleus = new THREE.Mesh(nucGeo, nucMat);
        this.sphereGroup.add(this.nucleus);

        // Glow sprite
        const glowGeo = new THREE.SphereGeometry(nucSize * 1.8, 16, 16);
        const glowMat = new THREE.MeshBasicMaterial({ color: this.color, transparent: true, opacity: 0.08 });
        this.sphereGroup.add(new THREE.Mesh(glowGeo, glowMat));

        // Shells — cap displayed electrons per shell for performance
        const MAX_E_PER_SHELL = 16;
        shells.forEach((count, i) => {
            const radius = (i + 1) * 0.95 + 0.5;
            const tilt = (i * 37) % 180;
            const tiltRad = (tilt * Math.PI) / 180;

            // Orbit ring
            const ringGeo = new THREE.TorusGeometry(radius, 0.012, 8, 80);
            const ringMat = new THREE.MeshBasicMaterial({ color: this.color, transparent: true, opacity: 0.25 });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.PI / 2 + tiltRad;
            ring.rotation.z = (i * 60 * Math.PI) / 180;
            this.sphereGroup.add(ring);

            // Cap electrons for visual clarity
            const displayCount = Math.min(count, MAX_E_PER_SHELL);

            // Electrons
            for (let j = 0; j < displayCount; j++) {
                const angle = (j / displayCount) * Math.PI * 2;
                const pivot = new THREE.Object3D();
                pivot.rotation.x = Math.PI / 2 + tiltRad;
                pivot.rotation.z = (i * 60 * Math.PI) / 180;
                this.sphereGroup.add(pivot);

                const eGeo = new THREE.SphereGeometry(0.07, 8, 8);
                const eMat = new THREE.MeshStandardMaterial({
                    color: this.color, emissive: this.color, emissiveIntensity: 0.8,
                    roughness: 0.2, metalness: 0.2,
                });
                const eMesh = new THREE.Mesh(eGeo, eMat);
                eMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
                pivot.add(eMesh);

                this.orbits.push({
                    mesh: eMesh, pivot,
                    speed: (0.4 + Math.random() * 0.3) * (i % 2 === 0 ? 1 : -1),
                    angle,
                    radius,
                });
            }
        });

        // Adjust camera
        const maxRadius = shells.length * 0.95 + 1.5;
        this.camera.position.z = maxRadius * 1.8 + 1;
    }

    private setupDrag() {
        const c = this.canvas;
        c.addEventListener('mousedown', e => { this.isDragging = true; this.lastMouse = { x: e.clientX, y: e.clientY }; });
        window.addEventListener('mouseup', () => { this.isDragging = false; });
        window.addEventListener('mousemove', e => {
            if (!this.isDragging) return;
            const dx = e.clientX - this.lastMouse.x;
            const dy = e.clientY - this.lastMouse.y;
            this.sphereGroup.rotation.y += dx * 0.008;
            this.sphereGroup.rotation.x += dy * 0.008;
            this.lastMouse = { x: e.clientX, y: e.clientY };
        });
        c.addEventListener('wheel', e => {
            this.camera.position.z = Math.max(2, Math.min(20, this.camera.position.z + e.deltaY * 0.01));
        }, { passive: true });

        // Touch
        let lastTouch = { x: 0, y: 0 };
        c.addEventListener('touchstart', e => { lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY }; });
        c.addEventListener('touchmove', e => {
            const dx = e.touches[0].clientX - lastTouch.x;
            const dy = e.touches[0].clientY - lastTouch.y;
            this.sphereGroup.rotation.y += dx * 0.008;
            this.sphereGroup.rotation.x += dy * 0.008;
            lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            e.preventDefault();
        }, { passive: false });
    }

    start() {
        const animate = () => {
            this.animId = requestAnimationFrame(animate);
            const dt = 0.016;

            // Rotate nucleus slowly
            if (this.nucleus) {
                this.nucleus.rotation.y += 0.01;
                this.nucleus.rotation.x += 0.005;
            }

            // Orbit electrons
            this.orbits.forEach(o => {
                o.angle += o.speed * dt;
                o.mesh.position.x = Math.cos(o.angle) * o.radius;
                o.mesh.position.y = Math.sin(o.angle) * o.radius;
            });

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
