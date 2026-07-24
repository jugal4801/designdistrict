'use client'

import { Canvas } from '@react-three/fiber'
import { Float, Octahedron } from '@react-three/drei'

const POSITIONS: [number, number, number][] = [
  [-3, 0.5, -1],
  [-1.2, -0.8, -2],
  [0.5, 1, -1.5],
  [2, -0.5, -1],
  [3.2, 0.8, -2],
]

export function StatsParticlesScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 6], fov: 50 }}
    >
      <ambientLight intensity={0.7} />
      {POSITIONS.map((position, i) => (
        <Float key={i} speed={1 + i * 0.15} rotationIntensity={0.5} floatIntensity={1.5}>
          <Octahedron args={[0.25 + (i % 2) * 0.1, 0]} position={position}>
            <meshStandardMaterial
              color={i % 2 === 0 ? '#3b6eb5' : '#5b8ed5'}
              roughness={0.4}
              metalness={0.3}
              transparent
              opacity={0.5}
            />
          </Octahedron>
        </Float>
      ))}
    </Canvas>
  )
}
