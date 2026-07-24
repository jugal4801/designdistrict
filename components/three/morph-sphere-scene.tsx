'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

// drei doesn't export DistortMaterialImpl's type, so the ref is untyped here
function DistortSphere() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const { x, y } = state.pointer
    const proximity = 1 - Math.min(Math.hypot(x, y), 1)

    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, 0.3 + proximity * 0.35, 0.05)
      materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, 1.5 + proximity * 3, 0.05)
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.6, 0.05)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.4, 0.05)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.4, 48, 48]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#3b6eb5"
          roughness={0.15}
          metalness={0.6}
          distort={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

export function MorphSphereScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#5b8ed5" />
      <pointLight position={[-3, -2, -2]} intensity={0.5} color="#3b6eb5" />
      <DistortSphere />
    </Canvas>
  )
}
