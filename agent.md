# Agent Instructions - Portfolio Project

## Project Overview
Website portfolio pribadi **Rafif** (Frontend Developer) dibangun dengan **Next.js 16.2.10** (App Router), **React 19.2.4**, **Tailwind CSS 4**, **Framer Motion 12.42.2**, dan **TypeScript 5**. Bahasa UI campur EN/ID. Theme dark-only (`zinc-950` + `--background #0a0a0a`).

## Tech Stack
- **Framework**: Next.js 16.2.10 (App Router, RSC default, `allowedDevOrigins: ["10.21.1.161"]` di `next.config.ts:3`)
- **UI**: React 19.2.4, Tailwind CSS 4 (`@tailwindcss/postcss` di `postcss.config.mjs:3`), Framer Motion 12.42.2
- **Icons**: `react-icons` 5.7.0 (`Si*` di `sections/TechStack.tsx:1`), `lucide-react` 1.23.0 (installed, belum dipakai aktif), emoji fallback di `sections/Skills.tsx` & `sections/Contact.tsx:7`
- **Font**: Geist Sans + Geist Mono via `next/font/google` (`src/app/layout.tsx:5`)
- **Language**: TypeScript strict (`tsconfig.json:7`), alias `@/*` → `src/*`

## Project Structure (Aktual)
```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, Geist vars, <html lang="en">
│   ├── page.tsx                # Home: compose Navbar + Hero,About,TechStack,Projects,Experience,Contact + Footer
│   ├── globals.css             # @import "tailwindcss", CSS vars, scrollbar-thin, marquee/pulse/bounce
│   ├── favicon.ico
│   ├── not-found.tsx           # Client 404 dengan motion glitch + link Home
│   └── projects/
│       ├── page.tsx            # /projects — grid semua 6 project
│       └── [slug]/page.tsx     # /projects/[slug] — generateStaticParams + notFound() + gallery + detail
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed header, backdrop-blur, hamburger md:hidden, AnimatePresence
│   │   └── Footer.tsx          # Minimal border-t, copyright + "Built with Next.js & Tailwind"
│   ├── ProjectCard.tsx         # Client, motion fade-up, Link /projects/[slug], cover + tech slice(0,4)
│   ├── ProjectGallery.tsx      # Client, useState current, AnimatePresence fade, prev/next + dots
│   ├── TechBadge.tsx           # Span rounded-md border zinc-700/50, group-hover blue
│   └── ui/
│       └── SectionHeader.tsx   # h2 + subtitle + h-px w-12 blue line
├── data/
│   └── portfolio.ts            # Single source of truth (lihat Data Management)
├── sections/
│   ├── Hero.tsx                # #hero, grid overlay + blue blur, motion stagger, CTA /projects
│   ├── About.tsx               # #about, description + availableText + stats 10+/6+/1 Year
│   ├── TechStack.tsx           # #skills (duplikat ID!), marquee infinite 12 tech via react-icons
│   ├── Projects.tsx            # #projects, slice(0,6) + link "Lihat Semua Project"
│   ├── Experience.tsx          # #experience, timeline dot + line, motion x -20
│   ├── Contact.tsx             # #contact, socialLinks buttons + mailto personal.email
│   ├── Skills.tsx              # #skills (duplikat!), progress bar per kategori — TIDAK DIPAKAI di page.tsx
│   └── TerminalSection.tsx     # #terminal, interactive terminal (help/banner/about/skills/projects/...) — TIDAK DIPAKAI di page.tsx
└── types/
    └── portfolio.ts            # Project, Skill, Experience, SocialLink
public/
└── projects/                   # 8 jpeg real: flappy_bird_1-3, chatbot_1-5 | sisanya placehold.co via ph()
```

## Commands
```bash
npm run dev          # next dev — localhost:3000
npm run dev:network  # next dev -H 0.0.0.0 — akses LAN
npm run build        # next build
npm run start        # next start
npm run serve        # next start -H 0.0.0.0
npm run lint         # eslint (flat config, next/core-web-vitals + next/typescript)
```

## Data Management — `src/data/portfolio.ts:1`
```typescript
export const personal = { name:"Rafif", role:"Frontend Developer", tagline, description, email:"rabbanirafif434@gmail.com", location:"Indonesia", avatar:"👨‍💻", available:true, availableText:"Available for Internship", resumeUrl:"/cv.pdf" }
helper ph(text) → https://placehold.co/800x500/1a1a2e/3b82f6?text=...
export const projects: Project[] = [6 item] // flappybird(3 img real), chatbot(5 img real), clubbasket/siakad/sipesat/sigetar (placeholder)
export const skills: Skill[]     = [13]     // backend(5) frontend(3) database(2) tools(3), level 55-90
export const experiences: Experience[] = [3] // exp-1 Tech Solutions Intern Jan26-Present, exp-2 Freelance Jun25-Dec25, exp-3 StartupHub Mar25-May25
export const socialLinks = [{GitHub: github.com/Rafif110808}, {Email: mailto:...}]
export const navLinks    = [{About:#about}, {Projects:/projects}, {Experience:#experience}, {Contact:#contact}]
```

## Type Definitions — `src/types/portfolio.ts:1`
- `Project { slug, title, description, tech[], images[], overview, features[], challenges, futureImprovements, liveUrl?, sourceUrl? }`
- `Skill { name, category: "backend"|"frontend"|"database"|"tools", level:0-100, icon }`
- `Experience { id, role, company, period, description, tech[] }`
- `SocialLink { name, url, icon }`

## Routing
- `/` → `src/app/page.tsx:12` (RSC, compose 6 section)
- `/projects` → `src/app/projects/page.tsx:5` (RSC, grid 3-col)
- `/projects/[slug]` → `src/app/projects/[slug]/page.tsx:11` `generateStaticParams()` + `notFound()` fallback
- `/*` → `src/app/not-found.tsx:9` (client, motion glitch `404`)

## Styling Guidelines
- Tailwind CSS 4 tanpa `tailwind.config.ts`; config di `postcss.config.mjs` + `@theme inline` di `globals.css:8`
- CSS vars: `--background:#0a0a0a`, `--foreground:#d4d4d4`; body `bg: var(--background)`
- Utilities custom: `.scrollbar-thin`, `.animate-marquee` (25s linear infinite), `.animate-pulse` (1.2s step-end), `.animate-bounce` (2s ease-in-out)
- Dark-only; tidak ada toggle. Border dominan `zinc-800`, aksen `blue-500/600`, text `zinc-100/400/500/600`
- Responsive: mobile-first, `md:` breakpoint untuk grid/nav. Navbar hamburger di `< md`
- Framer Motion untuk `initial/whileInView/AnimatePresence`; `viewport={{once:true}}`

## Key Features (State Aktual)
1. **Hero** — `sections/Hero.tsx:9` grid overlay + radial blue blur, stagger 0.1s, role split warna, CTA View Projects
2. **About** — `sections/About.tsx:15` SectionHeader + 2-col grid, stats statis
3. **TechStack Marquee** — `sections/TechStack.tsx:51` duplikasi array 12 tech → `animate-marquee` + gradient fade edges
4. **Projects** — Home slice 6 + `/projects` all + `/projects/[slug]` detail. Card hover `-translate-y-1.5` + `shadow-blue-500/5`
5. **ProjectGallery** — `components/ProjectGallery.tsx:20` fade via AnimatePresence, prev/next circular, dots indicator (tanpa thumbnail strip/swipe/keyboard ESC)
6. **Experience Timeline** — `sections/Experience.tsx:14` garis vertikal + dot `border-blue-500`
7. **Contact** — `sections/Contact.tsx:31` link buttons (💻/📧) + mailto
8. **404** — `src/app/not-found.tsx:25` motion scale + glitch y/jitter, glow blue
9. **Unused (exists tapi tidak di-mount)**: `Skills.tsx` (progress bar kategori), `TerminalSection.tsx` (347 baris, history ↑↓, Tab autocomplete, Ctrl+L, 15+ commands) — import di `page.tsx` tidak ada

## Configuration Files
| File | Status |
|------|--------|
| `package.json:13` | next 16.2.10, react 19.2.4, framer-motion 12.42.2, lucide-react 1.23.0, react-icons 5.7.0 |
| `tsconfig.json:21` | strict, bundler, `@/*` → `src/*`, include `.next/types` |
| `next.config.ts:3` | `allowedDevOrigins: ["10.21.1.161"]`, lainnya default |
| `eslint.config.mjs:5` | `next/core-web-vitals` + `next/typescript`, ignores `.next/out/build/next-env.d.ts` |
| `postcss.config.mjs:3` | `@tailwindcss/postcss` |
| `src/app/globals.css:1` | `@import "tailwindcss"`, `@theme inline`, keyframes |
| `.gitignore:41` | ignore `.next/out/build/.vercel/node_modules/*.log/.env` |

## Development Workflow
- **Tambah project**: edit `src/data/portfolio.ts:21` → tambah entry `Project` + taruh jpeg di `public/projects/` (nama konsisten `slug_*.jpeg`). Jika tanpa gambar, `ph()` akan pakai placehold.co (contoh clubbasket).
- **Tambah skill**: push ke `skills` array; pastikan `category` dan `level 0-100`; `TechStack.tsx` hardcoded terpisah — update manual jika ingin marquee sinkron.
- **Edit section**: file di `src/sections/`; data via import `@/data/portfolio`. Jika aktifkan Skills/Terminal, import di `src/app/page.tsx:1` dan letakkan di `<main>`.
- **Perhatian ID duplikat**: `TechStack.tsx:55` dan `Skills.tsx:15` sama-sama `id="skills"` — jika Skills diaktifkan akan bentrok anchor nav.
- **Images**: pakai `<img>` biasa (bukan `next/image`); optimasi manual. Placeholder fallback `/placeholder.svg` di `ProjectCard.tsx:26`.
- **Lint & Build**: `npm run lint` → `npm run build` harus pass sebelum push (Vercel).

## Known Notes / TODO
- [x] `/projects/[slug]` sudah implement (generateStaticParams + detail Overview/Features/Tech/Challenges/Future) — beda dari doc lama yang tulis "belum diimplementasikan"
- [ ] `Skills.tsx` & `TerminalSection.tsx` ada tapi tidak dirender di home — putuskan: mount atau hapus agar tidak dead code
- [ ] Contact form belum ada backend — `Contact.tsx` hanya link/mailto
- [ ] `navLinks` Projects pakai `/projects` (page route), bukan hash — Navbar anchor `href="#hero"` untuk logo, `href="#about"` dll untuk hash sections
- [ ] `TechBadge` lokasi `src/components/TechBadge.tsx:1`, bukan `components/ui/`; `SectionHeader` di `components/ui/`
- [ ] No tests, no analytics, no sitemap/robots, no `public/cv.pdf` dan `public/favicon.ico` (favicon ada di `src/app/favicon.ico`)
- [ ] 4 project terakhir masih pakai placeholder — ganti dengan screenshot real
- [ ] Tailwind config file tidak ada (v4 CSS-first) — jangan buat `tailwind.config.ts` kecuali perlu custom theme
