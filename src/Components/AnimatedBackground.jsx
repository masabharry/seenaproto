import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
  { uTime: 0 },
  // Vertex Shader
  glsl`
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.z += sin(pos.x * 4.0 + uTime) * 0.1;
      pos.z += sin(pos.y * 5.0 + uTime) * 0.1;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  glsl`
    varying vec2 vUv;

    void main() {
      float strength = 0.3 + 0.7 * vUv.y;
      vec3 color = mix(vec3(0.3, 0.1, 0.4), vec3(0.6, 0.2, 0.6), strength);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

const Material = React.memo(() => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
  });

  return <waveShaderMaterial ref={ref} attach="material" />;
});

export default function AnimatedBackground() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
      camera={{ position: [0, 0, 2] }}
    >
      <mesh>
        <planeGeometry args={[3, 3, 64, 64]} />
        <Material />
      </mesh>
    </Canvas>
  );
}
