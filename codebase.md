# Codebase Documentation - Portfolio

## Deskripsi Project
Website portfolio **Rafif** — Frontend Developer dari Indonesia. Dark-only (zinc-950), animasi Framer Motion, marquee tech stack, gallery project, timeline experience. Stack: `Next.js 16.2.10` + `React 19.2.4` + `Tailwind CSS 4` + `Framer Motion 12.42.2` + `TypeScript 5 strict`. Data terpusat di `src/data/portfolio.ts:1`.

## Arsitektur

### App Router (Next.js 16)
- App Router + RSC default. Alias `@/*` → `src/*` (`tsconfig.json:21`).
- `src/app/layout.tsx:5` — Root layout: `Geist`/`Geist_Mono` via `next/font/google`, `metadata` title "Rafif | Frontend Developer", `<html lang="en" class="h-full antialiased">` + body `min-h-full flex flex-col`.
- `src/app/page.tsx:12` — Home RSC compose: `Navbar` → `<main>` (Hero, About, TechStack, Projects, Experience, Contact) → `Footer`. **Tidak me-mount** `Skills` & `TerminalSection` (dead code).
- `src/app/projects/page.tsx:5` — RSC listing semua `projects`, grid `sm:2 lg:3`, breadcrumb Home/Projects.
- `src/app/projects/[slug]/page.tsx:11` — RSC detail: `generateStaticParams()` dari `projects`, `notFound()` jika slug miss, sections: Gallery, title, TechBadge, Live/Source buttons, Overview/Features/Tech/Challenges/FutureImprovement.
- `src/app/not-found.tsx:1` — `"use client"` 404: motion scale 0.5→1 + glitch y/jitter per huruf, grid bg + blue glow blur[180px], link Back to Home.
- `src/app/globals.css:1` — `@import "tailwindcss"`, `:root --background:#0a0a0a --foreground:#d4d4d4`, `@theme inline`, keyframes `pulse/bounce/marquee` + `.scrollbar-thin`.
- `next.config.ts:3` — `allowedDevOrigins: ["10.21.1.161"]`, lainnya default.
- `src/app/favicon.ico` ada di app dir (bukan `public/favicon.ico`).

### Component Architecture
```
components/
├── layout/
│   ├── Navbar.tsx:7  # "use client", fixed top-0, border-zinc-800, backdrop-blur-lg h-14, logo href="#hero", nav md:flex, hamburger md:hidden (3 span rotate/opacity), AnimatePresence height auto mobile menu
│   └── Footer.tsx:3  # RSC, border-t, flex col md:row, copyright + "Built with Next.js & Tailwind CSS"
├── ProjectCard.tsx:13   # "use client", motion y30 fade, Link /projects/[slug], aspect-video cover scale-105 on hover, tech slice(0,4) via TechBadge, "View Project →"
├── ProjectGallery.tsx:11 # "use client", useState current, AnimatePresence mode="wait" fade 0.3s, prev/next circular, dots w-6 blue active
├── TechBadge.tsx:5      # span rounded-md border zinc-700/50 bg zinc-800/50 text-xs zinc-400 group-hover blue
└── ui/
    └── SectionHeader.tsx:6 # mb-12, h2 3xl bold zinc-100 + subtitle zinc-500 + h-px w-12 bg-blue-500/50
```

### Section Components
| Section | File | Mount di Home? | Detail |
|---------|------|:---:|--------|
| Hero | `sections/Hero.tsx:9` | ✓ | `id="hero"` min-h-screen, grid bg 60px opacity 0.03 + blue blur 96/180px, motion stagger 0-0.4s, tagline + CTA `/projects` + bounce Scroll indicator |
| About | `sections/About.tsx:14` | ✓ | `id="about"` border-t py-24, SectionHeader "About Me", 2-col: description + availableText, stats 3col (Tech 10+, Projects 6+, Exp 1 Year) |
| TechStack | `sections/TechStack.tsx:51` | ✓ | `id="skills"` (bentrok!) marquee: 12 tech (Laravel, CI4, Node, Express, PG, MySQL, React, Next, Tailwind, Git, Docker, Linux) via `react-icons/si` + color, loop `[...techStack,...techStack]` + `animate-marquee 25s`, gradient fade edges |
| Projects | `sections/Projects.tsx:9` | ✓ | `id="projects"` slice(0,6) grid 3col, card inline (duplikat logic ProjectCard), footer link `/projects` "Lihat Semua Project →" |
| Experience | `sections/Experience.tsx:8` | ✓ | `id="experience"` bg-zinc-900/50, vertical line + dot blue, motion x-20, card border + role/company/period/description/tech pills |
| Contact | `sections/Contact.tsx:13` | ✓ | `id="contact"` max-w-xl, socialLinks map + mailto personal.email |
| Skills | `sections/Skills.tsx:14` | ✗ | `id="skills"` (duplikat!), 4 kategori backend/frontend/database/tools, filter `skills`, progress bar `motion width 0→level%` gradient blue→cyan |
| TerminalSection | `sections/TerminalSection.tsx:66` | ✗ | `id="terminal"` 347 baris, 15+ commands (help, banner, about/whoami, skills, projects, exp, contact, social, github, ls, neofetch, date, echo, sudo, clear), history ↑↓, Tab autocomplete, Ctrl+L, auto scroll, boot msg |

## Data Layer

### `src/data/portfolio.ts:1`
Single source of truth:
```typescript
export const personal = {
  name: "Rafif", role: "Frontend Developer",
  tagline: "Creating engaging frontend experiences and modern web applications",
  description: "I enjoy exploring the field of frontend development and love learning new things.",
  email: "rabbanirafif434@gmail.com", location: "Indonesia", avatar: "👨‍💻",
  available: true, availableText: "Available for Internship", resumeUrl: "/cv.pdf" // file belum ada di public/
}
function ph(text:string) => `https://placehold.co/800x500/1a1a2e/3b82f6?text=${...}`

export const projects: Project[] = [6]
 // flappybird (3 real jpeg), chatbot (5 real jpeg), clubbasket/siakad/sipesat/sigetar (ph placeholder)
 // liveUrl/sourceUrl sebagian dummy example.com/github.com/rafif/*
export const skills: Skill[] = [13] // Laravel 90, REST API 90, CI4 85, PG 85, Git 85, MySQL 80, Linux 75, Node 75, Express 70, Tailwind 70, React 60, Next 55, Docker 60
export const experiences: Experience[] = [3]
export const socialLinks: SocialLink[] = [2] // GitHub https://github.com/Rafif110808, Email mailto
export const navLinks = [4] // About #about, Projects /projects, Experience #experience, Contact #contact
```

### `src/types/portfolio.ts:1`
```typescript
interface Project { slug, title, description, tech[], images[], overview, features[], challenges, futureImprovements, liveUrl?, sourceUrl? }
interface Skill { name, category:"backend"|"frontend"|"database"|"tools", level:0-100, icon }
interface Experience { id, role, company, period, description, tech[] }
interface SocialLink { name, url, icon }
```

## Styling System

### Tailwind CSS 4
- Tanpa `tailwind.config.ts` (v4 CSS-first). Plugin di `postcss.config.mjs:3` → `"@tailwindcss/postcss": {}`.
- Import di `globals.css:1` → `@import "tailwindcss"` + `@theme inline` mapping `--color-background/foreground` & `--font-sans/mono`.
- CSS vars `globals.css:3` `--background:#0a0a0a --foreground:#d4d4d4`.
- Dark-only: `bg-zinc-950` dominant, `border-zinc-800`, aksen `blue-500/600`, text `zinc-100/400/500/600`.

### Font
- `Geist` variable `--font-geist-sans`, `Geist_Mono` `--font-geist-mono` di `layout.tsx:5` subsets `["latin"]`.

### Animations (`globals.css:23` + Framer Motion)
- `pulse 1.2s step-end infinite`, `bounce 2s ease-in-out infinite`, `marquee 25s linear infinite` (translateX 0→-50%).
- `.scrollbar-thin` 6px #424242/#1e1e1e.
- Framer: `initial {opacity:0,y:30/x:-20/scale:0.5} → whileInView/animate`, `viewport={{once:true, margin:"-50px"}}`, `AnimatePresence mode="wait"`.

## Key Features Implementation

### 1. Project Card + Grid
- `ProjectCard.tsx:13` & `Projects.tsx:20` duplikat logic. Motion delay `index*0.06`, hover `-translate-y-1.5` + `border-zinc-700` + `shadow-blue-500/5`, image `aspect-video object-cover group-hover:scale-105 duration-500`, `line-clamp-2`.
- Listing `/projects` tanpa motion filter; home `slice(0,6)`.

### 2. Project Gallery
- `ProjectGallery.tsx:20` — `current` state circular prev/next, `motion.img key={current} opacity 0→1 0.3s`, dots `w-6 bg-blue-500` vs `w-2 bg-zinc-600`. Tidak ada thumbnail strip, swipe, keyboard, lazy loading, atau modal fullscreen (berbeda dari doc lama).

### 3. Project Detail
- `projects/[slug]/page.tsx:11` — `generateStaticParams()` static generation, breadcrumb, gallery, tech pills dua tempat (TechBadge + span border), conditional `liveUrl`/`sourceUrl` buttons, sections Overview/Features (dot blue)/Technology/Challenges/FutureImprovement, Back link.

### 4. TechStack Marquee
- `TechStack.tsx:40` `TechItem` flex `px-6 py-4 mx-3 border bg-zinc-900/50 rounded-xl`, `loopItems = [...techStack,...techStack]`, container `flex w-max animate-marquee` + fade gradients `w-24 from-zinc-950`.

### 5. Skills (Unused)
- `Skills.tsx:20` grid `md:2`, per kategori `motion y30 delay catIdx*0.1`, bar `width 0→level% duration 1 delay catIdx*0.1+idx*0.05`.

### 6. Terminal (Unused)
- `TerminalSection.tsx:66` 347 baris, `PROMPT guest@rafif:~$`, `helpText` + `banner` ASCII, `bar(level)` █/░, `uid` counter, `lines` + `history` + `histIdx`, `isFirstRender` guard, `bottomRef scrollIntoView smooth`, `setTimeout 300ms` boot, `exec` switch 15+ cmd, `onKey` Enter/ArrowUp/Down/Tab/Ctrl+L, window chrome (red/yellow/green dots).

### 7. Navbar & Footer
- `Navbar.tsx:7` fixed `border-b backdrop-blur-lg bg-zinc-950/90`, hamburger 3 spans `h-px w-5`, mobile `motion nav height 0→auto`. Tidak ada active highlight, smooth scroll, atau dark toggle (beda doc lama).
- `Footer.tsx:5` `border-t py-6 text-xs zinc-600` `&copy; {year} {name}`.

### 8. Not Found
- `not-found.tsx:27` motion `scale 0.5→1`, glitch per char `y:[0,-2,1,0] repeat Infinity`, subtitle `$ page not found`, CTA Back to Home blue-600.

## Development Workflow

### Adding New Project
1. Tambah entry di `src/data/portfolio.ts:21` (ikuti `Project` interface, `slug` unik).
2. Taruh jpeg di `public/projects/` (real sekarang: `flappy_bird_*.jpeg`, `chatbot_*.jpeg`). Untuk placeholder, pakai `ph("Label")`.
3. `liveUrl`/`sourceUrl` opsional — jika kosong button tidak render (`[slug]/page.tsx:54`).
4. `generateStaticParams` otomatis pick slug baru; `npm run build` akan static generate.

### Adding New Skill
1. Push ke `skills` array di `portfolio.ts:191` dengan `category` dan `level`.
2. Jika ingin muncul di marquee, update manual `techStack` di `TechStack.tsx:25` (marquee tidak baca `portfolio.ts`).

### Modifying Sections
- Edit di `src/sections/`; data via `import { personal, projects, skills, experiences, socialLinks } from "@/data/portfolio"`.
- Untuk aktifkan `Skills`/`TerminalSection`, tambah import di `src/app/page.tsx:1` dan susun di `<main>`. Perhatikan `id="skills"` duplikat — ganti satu jadi `id="tech-stack"` atau `id="skill-levels"`.
- Images pakai `<img src>` langsung; `public/` dilayani di root.

## Configuration Files

| File | Purpose | Catatan |
|------|---------|---------|
| `package.json` | deps & scripts | next 16.2.10, react 19.2.4, framer-motion 12.42.2, tailwind 4, @tailwindcss/postcss |
| `tsconfig.json` | TS strict, bundler, `@/*` | include `.next/types` |
| `next.config.ts` | Next config | `allowedDevOrigins: ["10.21.1.161"]` |
| `eslint.config.mjs` | ESLint flat | `next/core-web-vitals` + `next/typescript`, ignores `.next/out/build/next-env.d.ts` |
| `postcss.config.mjs` | PostCSS | `@tailwindcss/postcss` |
| `src/app/globals.css` | Global styles | `@import "tailwindcss"`, vars, keyframes |
| `.gitignore` | Ignores | `.next/out/build/.vercel/node_modules/*.log/.env next-env.d.ts` |

Tidak ada `tailwind.config.ts`, `sitemap.ts`, `robots.ts`, `middleware.ts`.

## Performance Considerations
- Images: `<img>` biasa, tidak pakai `next/image` (no optimization, no lazy). `ProjectCard` fallback `/placeholder.svg` (file tidak ada → broken jika image null).
- Fonts: `next/font/google` Geist self-host + preload otomatis.
- Code splitting: otomatis App Router per route (`/`, `/projects`, `/projects/[slug]`).
- Animations: Framer Motion `viewport once` untuk hindari re-trigger; marquee `w-max` duplikasi dom 24 items.

## SEO & Metadata
- `layout.tsx:15` `metadata: {title:"Rafif | Frontend Developer", description:"Frontend developer specializing in React, Next.js..."}` — tanpa openGraph/twitter/template.
- `<html lang="en">`, semantic `<main>/<section>/<nav>/<header>/<footer>`.
- Tidak ada `sitemap.xml`/`robots.txt` auto (Next tidak generate tanpa file).

## Deployment Checklist
- [ ] `npm run build` pass (cek `ph()` placehold, image path, slug unik)
- [ ] `npm run lint` clean
- [ ] Sediakan `public/cv.pdf` (ref `personal.resumeUrl`), `public/favicon.ico` sudah di `src/app/favicon.ico` tapi cek Vercel favicon
- [ ] Ganti dummy URL `liveUrl/sourceUrl` (flappybird presensi etc) ke URL real atau kosongkan
- [ ] Ganti 4 project placeholder dengan screenshot real
- [ ] Audit `id` duplikat `skills`, dead code `Skills`/`TerminalSection` (hapus atau mount)
- [ ] Optimasi image: migrasi ke `next/image` jika mau Vercel Image Optimization

## Known Issues / TODO
- [x] Project detail `/projects/[slug]` **sudah implement** (beda doc lama) — `generateStaticParams` + `notFound()` ok
- [ ] `Skills.tsx` dan `TerminalSection.tsx` tidak di-mount di `page.tsx` — dead code 400+ baris
- [ ] `id="skills"` duplikat (TechStack vs Skills) — anchor `#skills` ambigu
- [ ] `Projects.tsx` duplikat card logic dengan `ProjectCard.tsx` — pertimbangkan reuse component
- [ ] `public/projects` hanya 8 jpeg; 4 project pakai `placehold.co` eksternal — butuh `next.config.images.remotePatterns` jika migrasi ke `next/image`
- [ ] Contact belum ada form/backend — hanya mailto + social links (2: GitHub, Email; LinkedIn tidak ada)
- [ ] No tests (jest/vitest/playwright), no analytics
- [ ] `TechStack` hardcode terpisah dari `skills` data — source ganda
- [ ] `ProjectCard` fallback `/placeholder.svg` tidak ada file → 404 image

