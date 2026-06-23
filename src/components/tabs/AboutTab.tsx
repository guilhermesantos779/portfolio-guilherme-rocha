'use client'

import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const timeline = [
  { title: 'Co-fundador & Dev — MultiClipHub', period: '2025 – Presente', gold: true },
  { title: 'AI-Native Builder — Claude, Grok, Gemini', period: '2024 – Presente', gold: true },
  { title: 'Assistente de PCP — Gimi Manutenções', period: 'Nov 2023 – Presente', gold: false },
  { title: 'Suzano, SP · Disponível remotamente', period: '', gold: false },
]

export default function AboutTab() {
  return (
    <div className="p-8 md:p-10">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" aria-hidden="true" />
          <span className="font-mono text-[11px] text-gold tracking-widest uppercase">about.tsx</span>
        </motion.div>
        <motion.h2 variants={item} className="font-display text-3xl md:text-4xl font-bold mb-8">
          Sobre mim
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <motion.p variants={item} className="font-display text-xl font-medium text-[#f0ede6] leading-snug">
              Não sou um dev tradicional. Sou um builder.
            </motion.p>
            <motion.p variants={item} className="text-[#9e9b8e] text-sm leading-relaxed">
              Fundei o <span className="text-gold-light">MultiClipHub</span> — plataforma SaaS completa para
              criadores de conteúdo, distribuindo clips para TikTok, Reels e Shorts simultaneamente. Fui
              responsável por produto, arquitetura, copy, precificação e operação. A IA foi minha ferramenta,
              não o autor.
            </motion.p>
            <motion.p variants={item} className="text-[#9e9b8e] text-sm leading-relaxed">
              Também tenho experiência em ambiente corporativo — promovido de Auxiliar a Assistente de PCP na{' '}
              <span className="text-gold-light">Gimi Manutenções</span> em menos de 2 anos. Isso me deu visão de
              processo e disciplina.
            </motion.p>
          </div>

          <motion.div
            variants={item}
            className="rounded-2xl border border-gold/20 bg-white/[0.02] p-7"
          >
            <h3 className="font-mono text-xs text-[#9e9b8e] tracking-widest uppercase mb-6">Trajetória</h3>
            <div className="relative">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-4 pb-6 last:pb-0 relative">
                  {i < timeline.length - 1 && (
                    <span className="absolute left-[5px] top-4 w-px h-[calc(100%-8px)] bg-gold/15" aria-hidden="true" />
                  )}
                  <span
                    className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 relative z-10 ${
                      t.gold ? 'bg-gold shadow-[0_0_10px_rgba(201,168,76,0.5)]' : 'bg-[#4a4840]'
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <div className="font-display text-sm text-[#f0ede6]">{t.title}</div>
                    {t.period && <div className="font-mono text-[11px] text-gold mt-1">{t.period}</div>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
