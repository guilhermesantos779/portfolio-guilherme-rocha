'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'

interface Slide {
  num: string
  title: string
  desc: string
  img: string
  imgAlt: string
  placeholder: string
  stats?: { n: string; l: string }[]
  metrics?: string[]
  platforms?: string[]
  badges?: string[]
  aiTools?: string[]
  stack?: string[]
}

const slides: Slide[] = [
  {
    num: '01',
    title: 'Distribuição simultânea',
    desc: 'Um upload publica no TikTok, Instagram Reels e YouTube Shorts ao mesmo tempo. Zero trabalho braçal. Máximo alcance.',
    img: '/screenshots/landing.webp',
    imgAlt: 'Landing page do MultiClipHub',
    placeholder: 'Landing Page',
    stats: [
      { n: '3', l: 'plataformas' },
      { n: '1x', l: 'upload' },
      { n: '∞', l: 'alcance' },
    ],
  },
  {
    num: '02',
    title: 'Dashboard analítico',
    desc: 'Posts, views totais, plataformas conectadas e streak de publicações em um painel único e limpo.',
    img: '/screenshots/dashboard.webp',
    imgAlt: 'Dashboard do MultiClipHub',
    placeholder: 'Dashboard',
    metrics: ['📊 Posts este mês', '👁 Views totais', '🔗 Plataformas', '🔥 Sequência'],
  },
  {
    num: '03',
    title: 'OAuth integrado',
    desc: 'Conexão segura com TikTok, Instagram e YouTube. Gerencie todos os canais em um único lugar.',
    img: '/screenshots/canais.webp',
    imgAlt: 'Gestão de canais',
    placeholder: 'Gestão de Canais',
    platforms: ['🎵 TikTok', '📸 Instagram', '▶️ YouTube'],
  },
  {
    num: '04',
    title: 'Ranking gamificado',
    desc: 'Kings of Reach e Machine Gun — competição mensal que engaja toda a comunidade de criadores.',
    img: '/screenshots/ranking.webp',
    imgAlt: 'Ranking gamificado',
    placeholder: 'Ranking',
    badges: ['🏆 Kings of Reach — mais views', '⚡ Machine Gun — mais consistência'],
  },
  {
    num: '05',
    title: 'Construído com IA',
    desc: 'Do conceito ao deploy usando IA como ferramenta de produção real. As decisões foram minhas.',
    img: '/screenshots/perfil.webp',
    imgAlt: 'Perfil do criador',
    placeholder: 'Perfil',
    aiTools: ['Claude Code', 'Claude Chat', 'Grok', 'Gemini', 'Cowork'],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
  },
]

const variants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, filter: 'blur(4px)' }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, filter: 'blur(4px)', transition: { duration: 0.25 } }),
}

export default function ProjectsTab() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0])

  const paginate = (dir: number) => {
    const next = page + dir
    if (next < 0 || next >= slides.length) return
    setPage([next, dir])
  }

  const slide = slides[page]

  return (
    <div className="p-8 md:p-10 flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" aria-hidden="true" />
          <span className="font-mono text-[11px] text-gold tracking-widest uppercase">projects.tsx</span>
        </div>
        <h2 className="font-display text-3xl font-bold mb-1">MultiClipHub</h2>
        <p className="text-[#9e9b8e] text-sm">SaaS em produção · código real · usuários reais</p>
      </div>

      <div
        className="relative rounded-xl border border-gold/15 bg-white/[0.02] overflow-hidden"
        style={{ minHeight: 320 }}
        aria-label={`Slide ${page + 1} de ${slides.length}: ${slide.title}`}
        aria-roledescription="carrossel"
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
          >
            <div className="flex flex-col justify-center">
              <span className="font-mono text-[11px] text-gold/60 tracking-widest mb-3">{slide.num} / 05</span>
              <h3 className="font-display text-xl font-bold mb-3">{slide.title}</h3>
              <p className="text-[#9e9b8e] text-sm leading-relaxed mb-4">{slide.desc}</p>

              {slide.stats && (
                <div className="flex gap-4">
                  {slide.stats.map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="font-display text-xl font-bold text-gold">{s.n}</div>
                      <div className="font-mono text-[10px] text-[#4a4840]">{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
              {slide.metrics && (
                <div className="grid grid-cols-2 gap-2">
                  {slide.metrics.map((m) => (
                    <span
                      key={m}
                      className="font-mono text-[11px] text-[#9e9b8e] p-2 rounded border border-white/5 bg-white/2"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
              {slide.platforms && (
                <div className="flex gap-3 flex-wrap">
                  {slide.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 rounded-full border border-gold/25 text-gold text-xs font-mono"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
              {slide.badges && (
                <div className="flex flex-col gap-2">
                  {slide.badges.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs text-[#9e9b8e] font-mono">
                      {b}
                    </div>
                  ))}
                </div>
              )}
              {slide.aiTools && slide.stack && (
                <div className="space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    {slide.aiTools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded border border-gold/30 text-gold text-[11px] font-mono bg-gold/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {slide.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded border border-white/10 text-[#9e9b8e] text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-gold text-xs font-mono italic">
                    &quot;A IA foi minha ferramenta, não o autor.&quot;
                  </p>
                </div>
              )}
            </div>

            <div className="relative rounded-lg overflow-hidden border border-white/6 bg-white/[0.015] min-h-[180px] md:min-h-[260px]">
              <Image
                src={slide.img}
                alt={slide.imgAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority={page === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          disabled={page === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gold/20 bg-black/60 text-gold flex items-center justify-center text-lg disabled:opacity-20 hover:border-gold/50 hover:bg-gold/10 transition-all z-10"
          aria-label="Slide anterior"
        >
          ‹
        </button>
        <button
          onClick={() => paginate(1)}
          disabled={page === slides.length - 1}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gold/20 bg-black/60 text-gold flex items-center justify-center text-lg disabled:opacity-20 hover:border-gold/50 hover:bg-gold/10 transition-all z-10"
          aria-label="Próximo slide"
        >
          ›
        </button>

        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2"
          role="tablist"
          aria-label="Slides"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === page ? 'w-5 bg-gold' : 'w-1.5 bg-white/20'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
              aria-selected={i === page}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://multicliphub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-lg bg-gold text-[#06060a] font-display font-semibold text-sm hover:bg-gold-light transition-colors"
        >
          Ver MultiClipHub ↗
        </a>
      </div>
    </div>
  )
}
