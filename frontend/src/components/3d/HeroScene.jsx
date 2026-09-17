import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, TorusKnot, Stars, OrbitControls } from '@react-three/drei';

const HeroScene = () => {
  const meshRef = useRef();
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

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#6366f1" />
      <directionalLight position={[0, 10, -10]} intensity={1} color="#a855f7" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 4} />

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <TorusKnot 
          ref={meshRef} 
          args={[0.65, 0.2, 128, 32]} 
          position={[0, 0, 0]}
          scale={
            active ? (isMobile ? 0.9 : 1.3) : 
            hovered ? (isMobile ? 0.8 : 1.15) : 
            (isMobile ? 0.6 : 1)
          }
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={() => setActive(!active)}
        >
          <MeshDistortMaterial 
            color={hovered ? "#a855f7" : "#6366f1"} 
            attach="material" 
            distort={active ? 0.4 : hovered ? 0.3 : 0.2} 
            speed={active ? 4 : hovered ? 3 : 2} 
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </TorusKnot>
      </Float>
    </>
  );
};

export default HeroScene;
