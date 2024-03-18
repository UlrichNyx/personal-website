import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ThreeDModelDisplayProps {
  modelPath: string;
  width?: number; // Optional width for the viewer
  height?: number; // Optional height for the viewer
}

const ThreeDModel: React.FC<ThreeDModelDisplayProps> = ({ modelPath,
    width = window.innerWidth / 2, // Default width if not specified
    height = window.innerHeight * 0.7, }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mountRef === null || mountRef.current === null) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width < 700 ? window.innerWidth * 0.9 : width, height);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error(error);
    });

    const light = new THREE.HemisphereLight(0xffffbb, 0xffffbb, 4);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0x404040, 5); // Soft white light with intensity 1
    scene.add(ambientLight);
    scene.background = new THREE.Color(0x333333);

    camera.position.y = 200;
    camera.position.x = 300;
    camera.position.z = 400;
    camera.fov = 60;
    camera.updateProjectionMatrix();
    scene.position.set(0, -100, 0); 

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    const animate = (): void => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current !== null) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  return <div ref={mountRef} style={{borderRadius:'20px', alignSelf:'center'}} />;
};

export default ThreeDModel;