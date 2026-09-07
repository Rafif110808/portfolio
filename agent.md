# Agent Instructions - Portfolio Project

## Project Overview
Website portfolio pribadi **Rafif** (Frontend Developer) dibangun dengan **Next.js 16.2.10** (App Router), **React 19.2.4**, **Tailwind CSS 4**, **Framer Motion 12.42.2**, **next-themes 0.4.6**, dan **TypeScript 5**. Light/dark toggle via `next-themes` class strategy (`:root` light `#fafaf9`, `.dark` `#0a0a0a`). Aksen biru `blue-600 #2563eb` light / `blue-500 #3b82f6` dark tetap dipertahankan.

## Tech Stack
- **Framework**: Next.js 16.2.10 (App Router, RSC default, `allowedDevOrigins: ["10.21.1.161"]` di `next.config.ts:3`)
- **UI**: React 19.2.4, Tailwind CSS 4 (`@tailwindcss/postcss` di `postcss.config.mjs:3` + `@custom-variant dark` di `globals.css:2`), Framer Motion 12.42.2, next-themes 0.4.6
- **Icons**: `react-icons` 5.7.0 (`Si*` di `TechStack.tsx:1`), `lucide-react` 1.23.0 (`Sun`/`Moon` di `Navbar.tsx:5` untuk toggle), emoji fallback di `Contact.tsx:7`
- **Font**: Geist Sans + Geist Mono + Space Grotesk (display) via `next/font/google` (`layout.tsx:2` variable `--font-display`)
- **Language**: TypeScript strict (`tsconfig.json:7`), alias `@/*` → `src/*`

## Project Structure (Aktual)
```
src/
├── app/
│   ├── layout.tsx              # Geist + Space Grotesk, ThemeProvider wrap, suppressHydrationWarning, metadata
│   ├── page.tsx                # Home: Navbar + Hero,About,TechStack,Projects,Experience,Contact + Footer
│   ├── globals.css             # @import "tailwindcss", @custom-variant dark, :root light + .dark, @theme inline (5 color tokens), keyframes
│   ├── favicon.ico
│   ├── not-found.tsx           # Client 404 glitch, token-based (bg-background, text-foreground, accent)
│   └── projects/
│       ├── page.tsx            # /projects — bento grid featured={i===0}
│       └── [slug]/page.tsx     # /projects/[slug] — generateStaticParams + token sweep
├── components/
│   ├── ThemeProvider.tsx       # "use client" wrap next-themes attribute="class" defaultTheme="dark" enableSystem={false}
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed header, Sun/Moon toggle (mounted guard), hamburger md:hidden
│   │   └── Footer.tsx          # border-border-subtle bg-background
│   ├── ProjectCard.tsx         # featured?:boolean bento variant, token colors, motion
│   ├── ProjectGallery.tsx      # token colors, dots bg-accent
│   ├── TechBadge.tsx           # border-border-subtle bg-surface text-foreground/60 group-hover accent
│   └── ui/
│       └── SectionHeader.tsx   # text-foreground, bg-accent/50 line
├── data/
│   └── portfolio.ts            # personal, projects[6], skills[13], experiences[3], socialLinks[2], navLinks[4]
├── sections/                   # 6 sections aktif
│   ├── Hero.tsx                # #hero, display font Space Grotesk, badge available,CTA View Projects + Contact
│   ├── About.tsx               # #about
│   ├── TechStack.tsx           # #skills marquee 12 tech, token bg
│   ├── Projects.tsx            # #projects bento reuse ProjectCard
│   ├── Experience.tsx          # #experience
│   └── Contact.tsx             # #contact
└── types/portfolio.ts
public/projects/                # 8 jpeg real, sisanya placehold.co via ph()
```
Hapus: `sections/Skills.tsx` dan `sections/TerminalSection.tsx` (dead code, sudah dihapus).

## Commands
```bash
npm run dev          # next dev — localhost:3000
npm run dev:network  # next dev -H 0.0.0.0
npm run build        # next build (SSG 11 pages, compiled 10.7s)
npm run start        # next start
npm run serve        # next start -H 0.0.0.0
npm run lint         # eslint flat, 0 errors, 1 warning (no-img-element)
```

## Data Management — `src/data/portfolio.ts:1`
```typescript
export const personal = { name:"Rafif", role:"Frontend Developer", tagline, description, email:"rabbanirafif434@gmail.com", location:"Indonesia", avatar:"👨‍💻", available:true, availableText:"Available for Internship", resumeUrl:"/cv.pdf" }
helper ph(text) → https://placehold.co/...
export const projects: Project[] = [6] // flappybird 3 real, chatbot 5 real, 4 placeholder
export const skills: Skill[] = [13]
export const experiences: Experience[] = [3]
export const socialLinks = [{GitHub}, {Email mailto}]
export const navLinks = [{About:#about}, {Projects:/projects}, {Experience:#experience}, {Contact:#contact}]
```

## Type Definitions — `src/types/portfolio.ts:1`
- `Project { slug, title, description, tech[], images[], overview, features[], challenges, futureImprovements, liveUrl?, sourceUrl? }`
- `Skill { name, category: "backend"|"frontend"|"database"|"tools", level:0-100, icon }`
- `Experience { id, role, company, period, description, tech[] }`
- `SocialLink { name, url, icon }`

## Routing
- `/` → `src/app/page.tsx:12` (RSC)
- `/projects` → `src/app/projects/page.tsx:5` (bento)
- `/projects/[slug]` → `src/app/projects/[slug]/page.tsx:11`
- `/*` → `src/app/not-found.tsx:9`

## Styling Guidelines
- Tailwind 4 CSS-first, tanpa `tailwind.config.ts`; `@custom-variant dark (&:is(.dark *))` di `globals.css:2` untuk next-themes
- Tokens: `:root` light `--background:#fafaf9 --foreground:#18181b --surface:#ffffff --border-subtle:#e4e4e7 --accent:#2563eb` ; `.dark` dark `--background:#0a0a0a --foreground:#d4d4d4 --surface:#18181b --border-subtle:#27272a --accent:#3b82f6`
- `@theme inline` map 5 `--color-*` jadi `bg-background`, `text-foreground`, `bg-surface`, `border-border-subtle`, `bg-accent`
- Semua komponen pakai token, tidak ada hardcoded `zinc-*`/`blue-500` lagi (lint grep 0)
- Hero pakai `font-display` Space Grotesk `text-6xl md:text-8xl`, grid overlay via `color-mix(in srgb, var(--foreground) 6%, transparent)`
- Responsive mobile-first, hamburger `< md`, bento `md:col-span-2` untuk featured

## Key Features (State Aktual)
1. **Theme toggle** — `ThemeProvider.tsx:8` next-themes, `Navbar.tsx:14` mounted guard `useEffect setMounted`, `Sun`/`Moon`, persist localStorage, `defaultTheme="dark"`
2. **Hero** — display font, badge `availableText` dengan dot `animate-pulse`, 2 CTA (View Projects + Contact)
3. **TechStack Marquee** — token bg, fade gradient `from-background`
4. **Projects bento** — `ProjectCard.tsx:11` `featured` prop, home & `/projects` pertama besar
5. **ProjectGallery** — token, dots `bg-accent`
6. **Experience** — timeline token, dot `border-accent`
7. **Contact/Footer/404** — token sweep, 404 glow `bg-accent/10`

## Configuration Files
| File | Status |
|------|--------|
| `package.json:17` | + next-themes 0.4.6 |
| `tsconfig.json:21` | strict, bundler, `@/*` |
| `next.config.ts:3` | allowedDevOrigins |
| `eslint.config.mjs:9` | + ignores `.opencode/**`, disable set-state-in-effect line |
| `postcss.config.mjs:3` | @tailwindcss/postcss |
| `src/app/globals.css:1` | @custom-variant, tokens, keyframes |
| `src/components/ThemeProvider.tsx` | baru |

## Development Workflow
- **Tambah project**: edit `portfolio.ts:21` + jpeg di `public/projects/`, `featured` otomatis i===0
- **Tambah skill**: push ke `skills` array, update `TechStack.tsx:25` manual jika ingin marquee sinkron
- **Theme**: semua warna via token, jangan pakai `zinc-*`/`blue-*` hardcoded lagi
- **Lint & Build**: `npm run lint` 0 errors → `npm run build` harus pass

## Known Notes / TODO
- [x] Dark/light toggle implement + no flash/hydration warning
- [x] Bento grid + ProjectCard reuse (hapus duplikasi)
- [x] Dead code `Skills.tsx`/`TerminalSection.tsx` dihapus, `id="skills"` duplikat hilang
- [x] Token sweep semua komponen + pages (grep zinc 0)
- [ ] Contact form belum ada backend (mailto only)
- [ ] 4 project placeholder masih pakai placehold.co
- [ ] No tests/analytics/sitemap
