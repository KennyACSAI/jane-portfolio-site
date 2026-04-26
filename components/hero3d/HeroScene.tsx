'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uPointer;

  void main() {
    vec3 p = position;
    float w1 = sin(p.x * 0.45 + uTime * 0.55) * 0.55;
    float w2 = cos(p.y * 0.55 + uTime * 0.45) * 0.40;
    float w3 = sin((p.x + p.y) * 0.30 + uTime * 0.30) * 0.30;
    vec2 dxy = p.xy - vec2(uPointer.x * 8.0, uPointer.y * 5.0);
    float d = length(dxy);
    float ripple = sin(d * 0.85 - uTime * 1.6) * exp(-d * 0.18) * 1.1;
    p.z = (w1 + w2 + w3) * (1.0 - uScroll * 0.45) + ripple;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform float uOpacity;
  void main() {
    gl_FragColor = vec4(0.04, 0.04, 0.04, uOpacity);
  }
`;

function Topography() {
  const meshRef = useRef<THREE.Mesh>(null!);
  // 40 × 24 = 1,000 verts (further reduced from 2,160). Wireframe still reads
  // as a smooth contour grid at this resolution.
  const geom = useMemo(() => new THREE.PlaneGeometry(28, 16, 40, 24), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uOpacity: { value: 0.22 },
    }),
    []
  );
  const target = useRef(new THREE.Vector2());
  const scrollV = useRef(0);

  useFrame(({ clock, pointer }) => {
    uniforms.uTime.value = clock.getElapsedTime();
    target.current.x += (pointer.x - target.current.x) * 0.06;
    target.current.y += (pointer.y - target.current.y) * 0.06;
    uniforms.uPointer.value.copy(target.current);

    if (typeof window !== 'undefined') {
      const max = Math.max(window.innerHeight, 1);
      const sTarget = Math.min(1, Math.max(0, window.scrollY / max));
      scrollV.current += (sTarget - scrollV.current) * 0.1;
      uniforms.uScroll.value = scrollV.current;
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = -1.05 + target.current.y * 0.05 - scrollV.current * 0.18;
      meshRef.current.rotation.z = target.current.x * 0.04;
      meshRef.current.position.y = -1.4 + scrollV.current * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geom} position={[0, -1.4, 0]} rotation={[-1.05, 0, 0]}>
      <shaderMaterial
        args={[
          {
            vertexShader: vertex,
            fragmentShader: fragment,
            uniforms,
            transparent: true,
            wireframe: true,
            depthWrite: false,
          },
        ]}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas
      // dpr 1 — no supersampling. Wireframe lines stay crisp without it.
      dpr={1}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'low-power',
        stencil: false,
        depth: false,
      }}
      camera={{ position: [0, 1.2, 8], fov: 42 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Topography />
      </Suspense>
    </Canvas>
  );
}
