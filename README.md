# Founding Crew — foundingcrew.io

Marketing site for Founding Crew, a two-person senior operator firm.

**Stack:** Vite + React + Tailwind CSS

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

## Project structure

```
src/
  App.jsx       # entire site — all sections in one file
  index.css     # Tailwind base + custom animations
index.html      # meta tags, OG tags, Google Fonts
public/
  favicon.svg
```

## Sections

| Section | Anchor |
|---|---|
| Nav | — |
| Hero | — |
| Social proof strip | — |
| Problem | — |
| Pillars | `#pillars` |
| How we work | — |
| Founders | `#founders` |
| Proof / case studies | — |
| FAQ | — |
| Final CTA + Footer | `#contact` |

## Before launch checklist

- [ ] Replace `KH` / `NS` monograms with real founder photos
- [ ] Wire Calendly (or keep `mailto:hello@foundingcrew.io`) on CTA buttons
- [ ] Swap text logos for real SVGs once you have permission to use them
- [ ] Add a 1200×630px OpenGraph image at `public/og-image.png`
- [ ] Set up `hello@foundingcrew.io` email forwarding
- [ ] Install Google Analytics or Plausible
- [ ] Test on real iOS + Android devices
- [ ] Point DNS at hosting provider and run `npm run build`

## Deployment

The `dist/` folder after `npm run build` is a static site — deploy to Vercel, Netlify, or any static host.

**Vercel (recommended):**
```bash
npx vercel
```
