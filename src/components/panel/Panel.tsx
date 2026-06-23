'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePortfolio } from '@/store/portfolio'
import TabBar from './TabBar'
import TabContent from './TabContent'

export default function Panel() {
  const { introComplete } = usePortfolio()

  return (
    <AnimatePresence>
      {introComplete && (
        <motion.div
          key="panel"
          className="fixed inset-0 z-10 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="relative w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: 'rgba(8,8,14,0.82)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(201,168,76,0.20)',
              boxShadow:
                '0 0 80px rgba(201,168,76,0.08), 0 0 200px rgba(40,30,80,0.3), inset 0 1px 0 rgba(201,168,76,0.12)',
            }}
            initial={{ scale: 0.92, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
              aria-hidden="true"
            />
            <TabBar />
            <TabContent />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
