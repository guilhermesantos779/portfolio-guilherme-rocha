import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          bright: '#f5dfa0',
          dim: 'rgba(201,168,76,0.10)',
        },
        space: {
          DEFAULT: '#06060a',
          2: '#0c0c12',
          3: '#101018',
          4: '#16161f',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backdropBlur: {
        panel: '24px',
      },
      animation: {
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s ease infinite',
      },
      keyframes: {
        pulseGold: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
