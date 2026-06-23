'use client'

import dynamic from 'next/dynamic'

// Carregados apenas no cliente: usam Three.js / Framer Motion / window.
const Universe = dynamic(() => import('@/components/universe/Universe'), { ssr: false })
const Intro = dynamic(() => import('@/components/intro/Intro'), { ssr: false })
const Panel = dynamic(() => import('@/components/panel/Panel'), { ssr: false })

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Universe />
      <Intro />
      <Panel />
    </main>
  )
}
