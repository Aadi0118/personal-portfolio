import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Earth = ({ active, hovered, isMobile }) => {
  const meshRef = useRef();
  const cloudsRef = useRef();
  
  // Load textures
  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = state.clock.getElapsedTime() * 0.18;
    }
  });

  // Significantly reduced scale to keep it in frame
  const scale = active ? (isMobile ? 1.0 : 1.4) : 
                hovered ? (isMobile ? 0.95 : 1.3) : 
                (isMobile ? 0.9 : 1.2);

  // Center axis rotation only (no tilt)
  return (
    <group scale={scale}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshPhongMaterial 
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular={new THREE.Color('grey')}
          shininess={50}
        />
      </Sphere>
      <Sphere ref={cloudsRef} args={[1.015, 64, 64]}>
        <meshPhongMaterial 
          map={cloudsMap}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </Sphere>
    </group>
  );
};

const HeroScene = () => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#6366f1" />
      <directionalLight position={[0, 10, -10]} intensity={1} color="#a855f7" />
      
      {/* Lock polar angles so mouse drag only moves along the horizontal axis */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 2} 
        maxPolarAngle={Math.PI / 2} 
      />

      <Float speed={1.5} rotationIntensity={0} floatIntensity={1}>
        <group 
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={() => setActive(!active)}
        >
          <React.Suspense fallback={<Sphere args={[1, 16, 16]} scale={isMobile ? 1.1 : 1.8}><meshBasicMaterial color="#6366f1" wireframe /></Sphere>}>
            <Earth active={active} hovered={hovered} isMobile={isMobile} />
          </React.Suspense>
        </group>
      </Float>
    </>
  );
};

export default HeroScene;
