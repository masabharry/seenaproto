import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { SoftShadows } from '@react-three/drei';
import * as THREE from 'three';

const Cloth = () => {
  const meshRef = useRef();
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const positions = meshRef.current.geometry.attributes.position;
      
      // Diagonal wave animation
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const diagonalFactor = (x + y) * 0.7;
        positions.setZ(
          i,
          Math.sin(diagonalFactor + time * 1.5) * 0.4 + 
          Math.cos(diagonalFactor * 0.8 + time * 1.2) * 0.3
        );
      }
      
      positions.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  const geometry = new THREE.PlaneGeometry(viewport.width * 2, viewport.height * 2, 60, 60);

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry} 
      rotation={[-Math.PI / 2.3, 0, Math.PI / 4]}
      position={[0, 0, -15]}
    >
      <meshStandardMaterial 
        color="#8a3ffc" // Singularity purple
        side={THREE.DoubleSide} 
        transparent 
        opacity={0.35}
        roughness={0.6}
        metalness={0.15}
      />
    </mesh>
  );
};

export const ClothBackground = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0 // Ensure this is behind content
    }}>
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[15, 15, 15]} intensity={0.8} color="#8a3ffc" />
        <Cloth />
      </Canvas>
    </div>
  );
};