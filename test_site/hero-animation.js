// Three.js is now loaded globally via script tag in index.html
// import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const container = document.getElementById('hero-canvas');

if (container) {
    // Scene Setup
    const scene = new THREE.Scene();
    // Transparent background to let CSS gradient show through or blend
    scene.background = null;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Generate polygonal anatomical heart shape programmatically
    // Using key points to create a low-poly heart structure
    const heartPoints = [];
    const velocities = [];

    // Define anatomical heart structure with chambers and vessels
    // Scale factor for positioning
    const scale = 2.5;

    // Right atrium outline (upper right)
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 0.5 + Math.PI * 0.25;
        heartPoints.push(
            Math.cos(angle) * 2.5 * scale + 3 * scale,
            Math.sin(angle) * 2 * scale + 2 * scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Right ventricle (lower right)
    for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI * 0.6 + Math.PI * 0.9;
        const r = 2.5 + Math.sin(i * 0.5) * 0.3;
        heartPoints.push(
            Math.cos(angle) * r * scale + 2 * scale,
            Math.sin(angle) * r * scale - 1 * scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Left atrium (upper left)
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 0.5 + Math.PI * 0.75;
        heartPoints.push(
            Math.cos(angle) * 2.5 * scale - 3 * scale,
            Math.sin(angle) * 2 * scale + 2 * scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Left ventricle (lower left) - larger chamber
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 0.7 + Math.PI * 1.1;
        const r = 3 + Math.sin(i * 0.4) * 0.4;
        heartPoints.push(
            Math.cos(angle) * r * scale - 2.5 * scale,
            Math.sin(angle) * r * scale - 1.5 * scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Aortic arch (top)
    for (let i = 0; i < 6; i++) {
        const t = i / 6;
        heartPoints.push(
            (t - 0.5) * 4 * scale,
            3.5 * scale + Math.sin(t * Math.PI) * 0.5 * scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Pulmonary vessels (top left)
    for (let i = 0; i < 5; i++) {
        const t = i / 5;
        heartPoints.push(
            -3 * scale + t * 1.5 * scale,
            3 * scale + Math.cos(t * Math.PI) * 0.5 * scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Septum (middle dividing line)
    for (let i = 0; i < 8; i++) {
        const t = i / 8;
        heartPoints.push(
            0.5 * scale,
            3 * scale - t * 6 * scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Connecting vessels and structural lines
    // Adding more polygonal detail with connecting segments
    for (let i = 0; i < 15; i++) {
        const angle = (i / 15) * Math.PI * 2;
        const r = 4 + Math.random() * 1.5;
        heartPoints.push(
            Math.cos(angle) * r * scale * 0.6,
            Math.sin(angle) * r * scale * 0.5 - scale,
            (Math.random() - 0.5) * 2
        );
    }

    // Create velocities for all points
    const particleCount = heartPoints.length / 3;
    for (let i = 0; i < particleCount; i++) {
        velocities.push({
            x: (Math.random() - 0.5) * 0.015,
            y: (Math.random() - 0.5) * 0.015,
            z: (Math.random() - 0.5) * 0.015
        });
    }

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(heartPoints);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material for dots
    const material = new THREE.PointsMaterial({
        color: 0x00a8ff,
        size: 0.8,
        transparent: true,
        opacity: 0.8
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lines (Plexus effect)
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00a8ff,
        transparent: true,
        opacity: 0.15
    });

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = container.clientWidth / 2;
    const windowHalfY = container.clientHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        // Rotate entire group slightly based on mouse
        particles.rotation.y += 0.05 * (targetX - particles.rotation.y);
        particles.rotation.x += 0.05 * (targetY - particles.rotation.x);

        // Update positions
        const positions = particles.geometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
            // Move particles
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;

            // Boundary check (bounce back)
            if (Math.abs(positions[i * 3]) > 15) velocities[i].x *= -1;
            if (Math.abs(positions[i * 3 + 1]) > 12) velocities[i].y *= -1;
            if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i].z *= -1;
        }

        particles.geometry.attributes.position.needsUpdate = true;

        // Dynamic Lines - create connections between nearby particles
        const linePositions = [];
        const p = particles.geometry.attributes.position.array;

        // Find connections
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = p[i * 3] - p[j * 3];
                const dy = p[i * 3 + 1] - p[j * 3 + 1];
                const dz = p[i * 3 + 2] - p[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < 6) {
                    linePositions.push(
                        p[i * 3], p[i * 3 + 1], p[i * 3 + 2],
                        p[j * 3], p[j * 3 + 1], p[j * 3 + 2]
                    );
                }
            }
        }

        // Remove old lines
        const oldLines = scene.getObjectByName('lines');
        if (oldLines) scene.remove(oldLines);

        // Add new lines
        if (linePositions.length > 0) {
            const lineGeometry = new THREE.BufferGeometry();
            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
            lines.name = 'lines';
            // Match rotation of particles
            lines.rotation.x = particles.rotation.x;
            lines.rotation.y = particles.rotation.y;
            scene.add(lines);
        }

        renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}
