'use client'

import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const steps = [
  {
    num: '01',
    icon: '🎯',
    title: 'Ideia & Produto',
    desc: 'Defino o problema, quebro em partes, documento contexto e decido produto antes de escrever código. Produto primeiro, tecnologia depois.',
  },
  {
    num: '02',
    icon: '⚡',
    title: 'Build com IA',
    desc: 'Claude Code + Cowork como pair programmer. Grok e Gemini para perspectivas diferentes. Eu orquestro, a IA executa.',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Entrega & Deploy',
    desc: 'Produto funcionando, seguro, publicado. Vercel + Supabase + Stripe. Do MVP ao produto com usuários reais.',
  },
]

export default function ProcessTab() {
  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" aria-hidden="true" />
          <span className="font-mono text-[11px] text-gold tracking-widest uppercase">process.md</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Como trabalho</h2>
        <p className="text-[#9e9b8e] text-sm max-w-md">Do zero ao produto em 3 etapas.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {steps.map((s) => (
          <motion.div
            key={s.num}
            variants={item}
            className="relative rounded-2xl border border-gold/20 bg-white/[0.02] p-7 overflow-hidden"
          >
            <span
              className="absolute top-1 right-4 font-display font-bold text-[88px] leading-none text-gold opacity-[0.08] select-none"
              aria-hidden="true"
            >
              {s.num}
            </span>
            <div className="text-3xl mb-4" aria-hidden="true">
              {s.icon}
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
            <p className="text-[#9e9b8e] text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
