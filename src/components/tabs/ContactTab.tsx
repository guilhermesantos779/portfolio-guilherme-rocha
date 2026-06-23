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

const links = [
  { icon: '💬', label: 'WhatsApp', hint: 'Resposta rápida', href: 'https://wa.me/5511963159184', gold: false },
  {
    icon: '💼',
    label: 'LinkedIn',
    hint: 'Perfil profissional',
    href: 'https://www.linkedin.com/in/guilherme-rocha-99138b2b2/',
    gold: false,
  },
  { icon: '✉️', label: 'Email', hint: 'Para projetos formais', href: 'mailto:guisantosmiguelrocha@gmail.com', gold: false },
  { icon: '🌐', label: 'MultiClipHub', hint: 'Ver o produto', href: 'https://www.multicliphub.com.br', gold: true },
]

export default function ContactTab() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-8 md:p-12 text-center overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: '#c9a84c', filter: 'blur(120px)', opacity: 0.06 }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl"
      >
        <motion.div variants={item} className="flex items-center justify-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" aria-hidden="true" />
          <span className="font-mono text-[11px] text-gold tracking-widest uppercase">contact.ts</span>
        </motion.div>

        <motion.h2 variants={item} className="font-display text-3xl md:text-4xl font-bold mb-3">
          Vamos construir algo juntos?
        </motion.h2>
        <motion.p variants={item} className="text-[#9e9b8e] text-sm mb-10">
          Aberto a projetos, parcerias e oportunidades em tech.
        </motion.p>

        <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-1.5 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                l.gold
                  ? 'border-gold/40 bg-gold/[0.12] hover:border-gold/60'
                  : 'border-white/8 bg-white/[0.02] hover:border-gold/30'
              }`}
            >
              <span className="text-2xl" aria-hidden="true">
                {l.icon}
              </span>
              <span className="font-display font-semibold text-sm">{l.label}</span>
              <span className="font-mono text-[10px] text-[#9e9b8e]">{l.hint}</span>
            </a>
          ))}
        </motion.div>

        <motion.p variants={item} className="font-mono text-xs text-[#9e9b8e]">
          📍 Suzano, SP · Disponível remotamente
        </motion.p>
      </motion.div>
    </div>
  )
}
