'use client'

import { useMemo } from 'react'
import * as THREE from 'three'

function createNebulaTexture(color: string, size = 256): THREE.Texture | null {
  if (typeof document === 'undefined') return null
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, color)
  gradient.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

type NebulaDef = {
  pos: [number, number, number]
  color: string
  scale: number
}

export default function Nebula() {
  const nebulae = useMemo<NebulaDef[]>(
    () => [
      { pos: [-4, 2, -5], color: 'rgba(201,168,76,0.12)', scale: 8 },
      { pos: [5, -1, -6], color: 'rgba(80,30,120,0.10)', scale: 10 },
      { pos: [0, -3, -4], color: 'rgba(201,168,76,0.06)', scale: 6 },
      { pos: [-6, -2, -7], color: 'rgba(40,60,150,0.08)', scale: 12 },
    ],
    []
  )

  return (
    <group>
      {nebulae.map((n, i) => (
        <NebulaSprite key={i} {...n} />
      ))}
    </group>
  )
}

function NebulaSprite({ pos, color, scale }: NebulaDef) {
  const texture = useMemo(() => createNebulaTexture(color), [color])
  if (!texture) return null
  return (
    <mesh position={pos}>
      <planeGeometry args={[scale, scale]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
