'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { technologies, categories, Technology } from '@/lib/stack-data'

const levelColors: Record<Technology['level'], string> = {
  expert: 'text-gold border-gold/40 bg-gold/8',
  advanced: 'text-[#9e9b8e] border-[#9e9b8e]/30 bg-white/3',
  intermediate: 'text-[#4a4840] border-[#4a4840]/30 bg-white/2',
}

const levelLabels: Record<Technology['level'], string> = {
  expert: 'Expert',
  advanced: 'Avançado',
  intermediate: 'Intermediário',
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function StackTab() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filtered =
    activeCategory === 'Todos' ? technologies : technologies.filter((t) => t.category === activeCategory)

  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" aria-hidden="true" />
          <span className="font-mono text-[11px] text-gold tracking-widest uppercase">stack.config.ts</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Stack &amp; Ferramentas</h2>
        <p className="text-[#9e9b8e] text-sm max-w-md">
          Tecnologias e plataformas que uso para construir produtos reais.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap mb-8" role="group" aria-label="Filtrar por categoria">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wide border transition-all duration-200 ${
              activeCategory === cat
                ? 'border-gold text-gold bg-gold/10'
                : 'border-white/10 text-[#4a4840] hover:border-gold/30 hover:text-[#9e9b8e]'
            }`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filtered.map((tech) => (
          <motion.div
            key={tech.name}
            variants={item}
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            className="relative group cursor-default"
          >
            <div
              className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${
                hoveredTech === tech.name
                  ? 'border-gold/40 bg-gold/5 -translate-y-1'
                  : 'border-white/6 bg-white/[0.02] hover:border-gold/20'
              }`}
              style={
                hoveredTech === tech.name
                  ? { boxShadow: '0 8px 32px rgba(201,168,76,0.12), 0 0 0 1px rgba(201,168,76,0.15)' }
                  : {}
              }
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src={tech.logo}
                  alt={`Logo ${tech.name}`}
                  width={40}
                  height={40}
                  className={`object-contain transition-all duration-300 ${
                    hoveredTech === tech.name ? 'scale-110' : 'opacity-70 group-hover:opacity-90'
                  }`}
                  unoptimized
                />
              </div>

              <span className="font-mono text-xs text-center leading-tight text-[#9e9b8e] group-hover:text-[#f0ede6] transition-colors">
                {tech.name}
              </span>

              <span
                className={`absolute -top-2 -right-2 px-1.5 py-0.5 rounded text-[9px] font-mono border tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${levelColors[tech.level]}`}
              >
                {levelLabels[tech.level]}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 p-5 rounded-xl border border-gold/20 bg-gold/[0.03]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex items-start gap-4">
          <span className="text-2xl mt-0.5" aria-hidden="true">
            🤖
          </span>
          <div>
            <h3 className="font-display font-semibold text-sm mb-1 text-gold">
              IA como diferencial — não como atalho
            </h3>
            <p className="text-[#9e9b8e] text-xs leading-relaxed">
              Claude Code, Grok e Gemini são minhas ferramentas principais de desenvolvimento. Sei orquestrar
              agentes, escrever prompts de produção e extrair o máximo de cada modelo. O MultiClipHub foi
              construído inteiramente com esse workflow.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
