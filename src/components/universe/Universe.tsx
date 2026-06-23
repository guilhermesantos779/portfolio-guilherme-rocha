'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, AdaptiveDpr } from '@react-three/drei'
import { Suspense } from 'react'
import StarField from './StarField'
import Particles from './Particles'
import Nebula from './Nebula'

export default function Universe() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 1.5]}
        style={{ background: '#06060a' }}
      >
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <StarField />
          <Particles />
          <Nebula />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
