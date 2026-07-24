'use client'

import { Canvas } from '@react-three/fiber'
import { Float, Icosahedron } from '@react-three/drei'
import { useMemo } from 'react'

const LAYOUT: { position: [number, number, number]; scale: number; speed: number }[] = [
  { position: [0, 0, 0], scale: 1, speed: 1.2 },
  { position: [1.8, 1, -1], scale: 0.5, speed: 1.6 },
  { position: [-1.6, -0.8, -0.5], scale: 0.4, speed: 1.4 },
]

export function FloatingShapeScene({ count = 1 }: { count?: number }) {
  const shapes = useMemo(() => LAYOUT.slice(0, count), [count])

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#5b8ed5" />
      {shapes.map((shape, i) => (
        <Float key={i} speed={shape.speed} rotationIntensity={0.6} floatIntensity={1.2}>
          <Icosahedron args={[shape.scale, 0]} position={shape.position}>
            <meshStandardMaterial
              color="#3b6eb5"
              roughness={0.3}
              metalness={0.4}
              wireframe={i % 2 === 1}
            />
          </Icosahedron>
        </Float>
      ))}
    </Canvas>
  )
}
