'use client'

import { motion } from 'framer-motion'
import { usePortfolio, TabId } from '@/store/portfolio'
import { tabs } from '@/lib/tabs'

export default function TabBar() {
  const { activeTab, setActiveTab } = usePortfolio()

  return (
    <div
      className="flex items-center border-b shrink-0"
      style={{ borderColor: 'rgba(201,168,76,0.10)', background: 'rgba(6,6,10,0.6)' }}
      role="tablist"
      aria-label="Navegação do portfólio"
    >
      <div className="flex items-center gap-1.5 px-4 shrink-0" aria-hidden="true">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>

      <div className="w-px h-6 bg-gold/10 mx-2 shrink-0" aria-hidden="true" />

      <div className="flex overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as TabId)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              className={`relative flex items-center gap-2 px-5 py-3 text-sm whitespace-nowrap transition-colors duration-200 border-r border-gold/[0.07] ${
                isActive ? 'text-[#f0ede6]' : 'text-[#4a4840] hover:text-[#9e9b8e]'
              }`}
              style={isActive ? { background: 'rgba(201,168,76,0.05)' } : {}}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute top-0 left-0 right-0 h-[1.5px] bg-gold"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  aria-hidden="true"
                />
              )}
              <span className="text-base" aria-hidden="true">
                {tab.icon}
              </span>
              <span className="font-mono text-xs tracking-wide">{tab.filename}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
