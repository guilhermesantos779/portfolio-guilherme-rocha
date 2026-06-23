'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function StarField() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse } = useThree()

  const positions = useMemo(() => {
    const count = 3000
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += (mouse.y * 0.05 - ref.current.rotation.x) * 0.02
    ref.current.rotation.y += (mouse.x * 0.05 - ref.current.rotation.y) * 0.02
    ref.current.rotation.z += delta * 0.01
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        sizeAttenuation
        color="#f0ede6"
        transparent
        opacity={0.8}
        fog={false}
      />
    </points>
  )
}
