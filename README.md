# Portfólio — Guilherme Rocha

Portfólio cinematográfico de Guilherme Rocha — AI-Native Developer e Co-fundador do MultiClipHub.

Universo 3D interativo (Three.js / React Three Fiber) com intro estilo Marvel (Framer Motion)
e navegação por abas dentro de um painel flutuante.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — intro, transições entre abas
- **React Three Fiber** + **Three.js** — campo de estrelas, partículas e nebulosas
- **Zustand** — estado (aba ativa, intro)

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # serve o build
```

## Deploy no Vercel

O projeto já está conectado ao Vercel. Cada `git push` na branch `main`
dispara um deploy automático (a Vercel detecta o Next.js sozinha).

Deploy manual:
```bash
vercel deploy --prod
```

## Screenshots reais

As imagens ficam em `public/screenshots/`. No `ProjectsTab.tsx`, troque o bloco
placeholder de cada slide por:
```tsx
import Image from 'next/image'
// ...
<Image src={slide.img} alt={slide.imgAlt} fill className="object-cover" />
```
e nomeie os arquivos conforme `slide.img` (`landing.png`, `dashboard.png`,
`canais.png`, `ranking.png`, `perfil.png`).

## Estrutura

```
src/
├── app/            layout, page (entry), globals.css
├── components/
│   ├── intro/      Intro.tsx (abertura Marvel)
│   ├── universe/   Universe, StarField, Particles, Nebula (R3F)
│   ├── panel/      Panel, TabBar, TabContent
│   └── tabs/       Home, About, Stack, Projects, Process, Contact
├── lib/            tabs.ts, stack-data.ts
└── store/          portfolio.ts (Zustand)
```
