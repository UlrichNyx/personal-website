import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ThreeDModelDisplayProps {
  modelPath: string;
  height?: number;
}

const ThreeDModel: React.FC<ThreeDModelDisplayProps> = ({ modelPath, height = window.innerHeight * 0.7 }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mountRef.current === null) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333);
    scene.position.set(0, -100, 0);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 10000);
    camera.position.set(300, 200, 400);
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(1, height);
    container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => { scene.add(gltf.scene); }, undefined, console.error);

    scene.add(new THREE.HemisphereLight(0xffffbb, 0xffffbb, 4));
    scene.add(new THREE.AmbientLight(0x404040, 5));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    let rafId = 0;
    const animate = (): void => {
      rafId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const observer = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w !== 0) {
        camera.aspect = w / height;
        camera.updateProjectionMatrix();
        renderer.setSize(w, height);
      }
    });
    observer.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelPath, height]);

  return <div ref={mountRef} style={{ borderRadius: 12, width: '100%', overflow: 'hidden' }} />;
};

export default ThreeDModel;
