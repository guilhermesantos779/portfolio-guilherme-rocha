'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { usePortfolio } from '@/store/portfolio'
import HomeTab from '@/components/tabs/HomeTab'
import AboutTab from '@/components/tabs/AboutTab'
import StackTab from '@/components/tabs/StackTab'
import ProjectsTab from '@/components/tabs/ProjectsTab'
import ProcessTab from '@/components/tabs/ProcessTab'
import ContactTab from '@/components/tabs/ContactTab'

const tabComponents = {
  home: HomeTab,
  about: AboutTab,
  stack: StackTab,
  projects: ProjectsTab,
  process: ProcessTab,
  contact: ContactTab,
}

const variants: Variants = {
  enter: { opacity: 0, x: 16, filter: 'blur(4px)' },
  center: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { opacity: 0, x: -16, filter: 'blur(4px)', transition: { duration: 0.2, ease: 'easeIn' } },
}

export default function TabContent() {
  const { activeTab } = usePortfolio()
  const ActiveComponent = tabComponents[activeTab]

  return (
    <div className="flex-1 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="absolute inset-0 overflow-y-auto"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
