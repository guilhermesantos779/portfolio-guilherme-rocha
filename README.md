# Portfólio — Guilherme Rocha

Portfólio profissional de Guilherme Rocha — AI-Native Developer e Co-fundador do MultiClipHub.
Arquivo único `index.html` (HTML + CSS + JS inline), GSAP via CDN. Abre direto no navegador, sem servidor.

## Como fazer deploy no Vercel (grátis, 2 minutos)

### Opção 1 — Arrasta e solta (mais fácil)
1. Acesse vercel.com e crie uma conta gratuita
2. No dashboard, clique em "Add New → Project"
3. Arraste a pasta `portfolio-guilherme-rocha` para a área de upload
4. Clique em Deploy
5. Pronto. Seu site fica em: seuusuario.vercel.app

### Opção 2 — Via GitHub (recomendado para atualizações fáceis)
1. Crie um repositório no GitHub e suba os arquivos
2. No Vercel, importe o repositório
3. Cada push no GitHub faz deploy automático

## Como adicionar as screenshots reais
1. Coloque os prints na pasta `screenshots/`
2. No `index.html`, substitua os `<div class="img-placeholder">...</div>` por:
   ```html
   <img src="screenshots/landing.png" alt="Landing page MultiClipHub" loading="lazy" />
   ```
3. Faça novo deploy

Telas esperadas (uma por slide do carrossel):
- `landing.png` — Slide 1 (Overview / Landing Page)
- `dashboard.png` — Slide 2 (Dashboard)
- `canais.png` — Slide 3 (Gestão de Canais)
- `ranking.png` — Slide 4 (Ranking)
- `perfil.png` — Slide 5 (Stack & Build)

## Antes de publicar — substitua os placeholders de contato
No `index.html`, na seção `#contact`:
- WhatsApp: troque `55SEUNUMERO` pelo seu número (ex: `5511999999999`)
- LinkedIn: confirme a URL do seu perfil
- Email: já está em `guisantosmiguelrocha@gmail.com` — ajuste se necessário

## Domínio personalizado (opcional, gratuito no Vercel)
- Em Project Settings → Domains, adicione seu domínio
- Ex: guilhermerocha.dev (domínio pago) ou manter .vercel.app (grátis)
