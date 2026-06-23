'use client'

import { motion, Variants } from 'framer-motion'
import { usePortfolio } from '@/store/portfolio'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function HomeTab() {
  const { setActiveTab } = usePortfolio()

  return (
    <div className="flex flex-col justify-center min-h-full p-8 md:p-12">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/8 text-gold text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" aria-hidden="true" />
            Disponível para projetos
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-bold leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
        >
          Guilherme
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s ease infinite',
            }}
          >
            Rocha
          </span>
        </motion.h1>

        <motion.p variants={item} className="font-mono text-sm text-[#9e9b8e] tracking-widest uppercase mb-4">
          AI-Native Developer · Co-fundador @ MultiClipHub
        </motion.p>

        <motion.p variants={item} className="text-[#9e9b8e] text-sm leading-relaxed max-w-lg mb-8">
          Não sigo o caminho tradicional. Uso Claude, Grok e Gemini como alavanca de produção real — do
          conceito ao deploy, com produto no centro de tudo.
        </motion.p>

        <motion.div variants={item} className="flex gap-8 mb-10 flex-wrap">
          {[
            { num: '1+', label: 'SaaS lançado' },
            { num: '3', label: 'plataformas integradas' },
            { num: '∞', label: 'construído com IA' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-bold text-[#f0ede6]">
                <span className="text-gold">{s.num}</span>
              </div>
              <div className="font-mono text-[11px] text-[#4a4840] tracking-wide mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveTab('projects')}
            className="px-6 py-2.5 rounded-lg bg-gold text-[#06060a] font-display font-semibold text-sm hover:bg-gold-light transition-colors"
          >
            Ver projetos →
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-2.5 rounded-lg border border-gold/30 text-[#f0ede6] font-display text-sm hover:border-gold/60 hover:bg-gold/5 transition-all"
          >
            Falar comigo
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
