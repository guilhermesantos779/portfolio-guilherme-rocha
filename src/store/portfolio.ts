import { create } from 'zustand'

export type TabId = 'home' | 'about' | 'stack' | 'projects' | 'process' | 'contact'

interface PortfolioStore {
  introComplete: boolean
  activeTab: TabId
  setIntroComplete: () => void
  setActiveTab: (tab: TabId) => void
}

export const usePortfolio = create<PortfolioStore>((set) => ({
  introComplete: false,
  activeTab: 'home',
  setIntroComplete: () => set({ introComplete: true }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
