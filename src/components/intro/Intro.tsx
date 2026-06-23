'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { usePortfolio } from '@/store/portfolio'
import { useEffect } from 'react'

const letters1 = 'GUILHERME'.split('')
const letters2 = 'ROCHA'.split('')

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: 'easeIn' } },
}

const letterVariants: Variants = {
  hidden: { opacity: 0, scale: 2.5, filter: 'blur(16px)', y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const line2Variants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.9 } },
}

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.6, ease: 'easeOut' } },
}

const barVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { delay: 2.0, duration: 1.2, ease: 'easeInOut' } },
}

const nameStyle = (gradient: string, delay = 0): React.CSSProperties => ({
  background: gradient,
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: `shimmer 3s ease ${delay}s infinite`,
})

export default function Intro() {
  const { introComplete, setIntroComplete } = usePortfolio()

  useEffect(() => {
    const timer = setTimeout(setIntroComplete, 4000)
    return () => clearTimeout(timer)
  }, [setIntroComplete])

  return (
    <AnimatePresence>
      {!introComplete && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Partículas decorativas */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background:
                    Math.random() > 0.5
                      ? `rgba(201,168,76,${Math.random() * 0.5 + 0.1})`
                      : `rgba(240,237,230,${Math.random() * 0.2})`,
                }}
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          <motion.div className="flex justify-center gap-[0.04em]" variants={containerVariants} aria-hidden="true">
            {letters1.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="font-display font-bold text-[clamp(48px,9vw,100px)] leading-none tracking-[0.12em]"
                style={nameStyle('linear-gradient(135deg, #ffffff 0%, #c9a84c 40%, #e8c97a 60%, #ffffff 100%)')}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center gap-[0.04em]"
            variants={line2Variants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            {letters2.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="font-display font-bold text-[clamp(48px,9vw,100px)] leading-none tracking-[0.12em]"
                style={nameStyle('linear-gradient(135deg, #c9a84c 0%, #f5dfa0 50%, #c9a84c 100%)', 0.5)}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            variants={subtitleVariants}
            className="font-mono text-[clamp(10px,1.5vw,14px)] tracking-[0.5em] text-gold uppercase mt-6"
            aria-hidden="true"
          >
            AI-Native Developer
          </motion.p>

          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-px bg-gold/20 overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
              variants={barVariants}
            />
          </motion.div>

          <motion.button
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] text-gold/30 hover:text-gold/70 tracking-widest uppercase transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2 } }}
            onClick={setIntroComplete}
            aria-label="Pular introdução"
          >
            Pular
          </motion.button>

          <span className="sr-only">Portfólio de Guilherme Rocha — AI-Native Developer</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
