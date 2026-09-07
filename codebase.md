# Codebase Documentation - Portfolio

## Deskripsi Project
Website portfolio **Rafif** — Frontend Developer. Stack: `Next.js 16.2.10` + `React 19.2.4` + `Tailwind 4` + `Framer Motion 12.42.2` + `next-themes 0.4.6` + `TypeScript strict`. Theme light/dark via `next-themes` class strategy (`:root` `#fafaf9`, `.dark` `#0a0a0a`, accent `blue-600`/`blue-500`). Data terpusat di `src/data/portfolio.ts:1`.

## Arsitektur

### App Router (Next.js 16)
- Alias `@/*` → `src/*` (`tsconfig.json:21`).
- `src/app/layout.tsx:2` — Geist + Space_Grotesk (`--font-display`), `suppressHydrationWarning` di `<html>`, wrap `<ThemeProvider>`, body `bg-background text-foreground`.
- `src/components/ThemeProvider.tsx:1` — `"use client"` wrap `next-themes` `attribute="class" defaultTheme="dark" enableSystem={false}`.
- `src/app/page.tsx:12` — Home compose 6 section.
- `src/app/projects/page.tsx:5` — bento `featured={i===0}`.
- `src/app/projects/[slug]/page.tsx:11` — token sweep, `generateStaticParams`.
- `src/app/not-found.tsx:1` — token `bg-background`, `text-foreground`, `bg-accent/10`.
- `src/app/globals.css:1` — `@import "tailwindcss"`, `@custom-variant dark (&:is(.dark *))`, `:root` light + `.dark` dark, `@theme inline` 5 color tokens, keyframes, `.scrollbar-thin`.
- `next.config.ts:3` — `allowedDevOrigins`.

### Component Architecture
```
components/
├── ThemeProvider.tsx:1        # next-themes wrapper
├── layout/
│   ├── Navbar.tsx:5          # Sun/Moon toggle, mounted guard, token colors, hamburger
│   └── Footer.tsx:3          # border-border-subtle bg-background
├── ProjectCard.tsx:11        # featured?:boolean, token, bento col-span-2
├── ProjectGallery.tsx:11     # token, dots bg-accent
├── TechBadge.tsx:5           # border-border-subtle bg-surface text-foreground/60
└── ui/SectionHeader.tsx:6    # text-foreground bg-accent/50
```

### Section Components
| Section | File | Detail |
|---------|------|--------|
| Hero | `Hero.tsx:1` | bg-background, display font `Space_Grotesk` 6xl/8xl, badge `availableText` dot pulse, 2 CTA, grid `color-mix` |
| About | `About.tsx:14` | border-border-subtle bg-background, stats bg-surface text-accent |
| TechStack | `TechStack.tsx:40` | border-border-subtle bg-surface, fade `from-background` |
| Projects | `Projects.tsx:9` | bento reuse `ProjectCard` featured, border-border-subtle bg-background |
| Experience | `Experience.tsx:8` | bg-surface, dot border-accent, card bg-background |
| Contact | `Contact.tsx:13` | bg-background, buttons border-border-subtle bg-surface |

Hapus: `Skills.tsx`, `TerminalSection.tsx`.

## Data Layer — `src/data/portfolio.ts:1`
```typescript
export const personal = { name:"Rafif", role:"Frontend Developer", tagline, description, email, location, avatar:"👨‍💻", available, availableText, resumeUrl }
export const projects: Project[] = [6] // 2 real image sets + 4 placeholder
export const skills: Skill[] = [13]
export const experiences: Experience[] = [3]
export const socialLinks: SocialLink[] = [2] // GitHub + Email
export const navLinks = [4] // About #about, Projects /projects, Experience #experience, Contact #contact
```

### `src/types/portfolio.ts:1`
`Project`, `Skill` (backend/frontend/database/tools level 0-100), `Experience`, `SocialLink`.

## Styling System
- Tailwind 4 tanpa `tailwind.config.ts`, `@custom-variant dark` untuk next-themes.
- Tokens: `:root` `#fafaf9/#18181b/#ffffff/#e4e4e7/#2563eb`, `.dark` `#0a0a0a/#d4d4d4/#18181b/#27272a/#3b82f6`.
- `@theme inline` → `bg-background` etc.
- Fonts: Geist + Space Grotesk `--font-display`.
- Animations: `marquee 25s`, `pulse`, `bounce`, `.scrollbar-thin`.
- Semua hardcoded `zinc-*`/`blue-*` dihapus (grep 0), kecuali `globals.css` token.

## Key Features Implementation

### 1. Theme System
- `ThemeProvider.tsx:8` + `layout.tsx:35` `suppressHydrationWarning` + `Navbar.tsx:14` `mounted` guard `useEffect setMounted` dengan `eslint-disable`.
- Toggle `setTheme(theme==="dark"?"light":"dark")`, icon `Sun`/`Moon` `lucide-react`, persist via localStorage otomatis next-themes.

### 2. ProjectCard Bento
- `ProjectCard.tsx:11` prop `featured`, `md:col-span-2`, `aspect-[16/9]` vs `aspect-video`, `p-6` vs `p-5`, `text-xl` vs `text-lg`, `line-clamp-3` vs `2`.
- `Projects.tsx:18` & `projects/page.tsx:25` `featured={i===0}`.

### 3. Hero Upgrade
- Display font `Space_Grotesk` tracking-tighter, badge `availableText`, 2 CTA, grid `color-mix`.

### 4. Token Sweep
- Semua file: `bg-zinc-*`→`bg-background/surface`, `border-zinc-*`→`border-border-subtle`, `text-zinc-*`→`text-foreground/60`, `blue-*`→`accent`.

## Development Workflow
- Tambah project: `portfolio.ts:21` + `public/projects/` jpeg, featured otomatis pertama.
- Tambah skill: `skills` array, update `TechStack.tsx:25` manual.
- Theme: pakai token, jangan hardcoded.
- Build: `npm run lint` (0 errors) → `npm run build` (11 pages SSG) pass.

## Configuration Files
| File | Purpose |
|------|---------|
| `package.json` | + next-themes |
| `tsconfig.json` | strict bundler |
| `next.config.ts` | allowedDevOrigins |
| `eslint.config.mjs` | + .opencode ignore, set-state-in-effect disable |
| `postcss.config.mjs` | @tailwindcss/postcss |
| `globals.css` | tokens + custom-variant |
| `ThemeProvider.tsx` | baru |

## Performance
- Images `<img>` biasa, no `next/image` per constraint.
- Fonts `next/font` self-host, marquee duplikasi 24 items, Framer `viewport once`.

## SEO
- `layout.tsx:18` metadata title/description, `lang="en"`, semantic tags.

## Deployment Checklist
- [x] `npm run build` pass (11 pages)
- [x] `npm run lint` 0 errors
- [x] Dead code dihapus, bento reuse, token 0 sisa
- [ ] Sediakan `public/cv.pdf`, ganti placeholder 4 project
- [ ] Cek toggle persist & flash

## Known Issues
- [x] Theme toggle done
- [x] Bento & reuse done
- [x] Dead code dihapus
- [x] Token sweep done
- [ ] Contact mailto only, no tests/analytics
