# Codebase Documentation - Portfolio

## Deskripsi Project
Website portfolio pribadi **Rafif** - Frontend Developer dari Indonesia. Menampilkan project, skills, pengalaman, dan kontak dalam desain modern dengan animasi halus.

## Arsitektur

### App Router (Next.js 16)
- Menggunakan **App Router** dengan React Server Components
- `src/app/page.tsx` - Entry point, compose semua section
- `src/app/layout.tsx` - Root layout dengan metadata SEO, font Geist
- `src/app/projects/[slug]/` - Dynamic route untuk detail project

### Component Architecture
```
components/
├── layout/
│   ├── Navbar.tsx      # Navigation bar dengan smooth scroll
│   └── Footer.tsx      # Footer dengan social links
└── ui/
    ├── ProjectCard.tsx # Card project di grid
    ├── ProjectGallery.tsx # Gallery gambar project (modal)
    └── TechBadge.tsx   # Badge teknologi
```

### Section Components
Setiap section independen dan reusable:
- **Hero.tsx** - Landing section dengan terminal animation
- **About.tsx** - Tentang saya
- **TechStack.tsx** - Teknologi yang dikuasai
- **Projects.tsx** - Grid project dengan filter
- **Experience.tsx** - Timeline pengalaman kerja
- **Skills.tsx** - Skills dengan progress bar per kategori
- **Contact.tsx** - Form kontak
- **TerminalSection.tsx** - Terminal interaktif

## Data Layer

### `src/data/portfolio.ts`
Single source of truth untuk semua konten:

```typescript
export const personal = { ... }      // Info pribadi
export const projects: Project[] = [ ... ]  // 6 project
export const skills: Skill[] = [ ... ]      // 13 skills
export const experiences: Experience[] = [ ... ] // 3 experiences
export const socialLinks: SocialLink[] = [ ... ] // 2 links
export const navLinks = [ ... ]             // Navigation
```

### `src/types/portfolio.ts`
TypeScript interfaces untuk type safety:

```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  overview: string;
  features: string[];
  challenges: string;
  futureImprovements: string;
  liveUrl?: string;
  sourceUrl?: string;
}

interface Skill {
  name: string;
  category: "backend" | "frontend" | "database" | "tools";
  level: number;  // 0-100
  icon: string;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
```

## Styling System

### Tailwind CSS 4
- Konfigurasi di `postcss.config.mjs` dan `globals.css`
- CSS variables untuk theming
- Dark mode: `class` strategy

### Font
- **Geist Sans** (variable: `--font-geist-sans`)
- **Geist Mono** (variable: `--font-geist-mono`)
- Loaded via `next/font/google`

### Animations
- **Framer Motion** untuk page transitions, scroll animations
- Custom animations di components

## Key Features Implementation

### 1. Project Gallery Modal
`ProjectGallery.tsx` - Modal dengan:
- Keyboard navigation (arrow keys, ESC)
- Touch/swipe support
- Thumbnail strip
- Lazy loading images

### 2. Terminal Section
`TerminalSection.tsx` - Terminal interaktif dengan:
- Command history
- Auto-complete
- Custom commands (help, about, projects, skills, contact, clear)
- Typing animation

### 3. Skills Visualization
`Skills.tsx` - Grouped by category dengan:
- Progress bar animasi
- Icon per skill
- Level percentage

### 4. Responsive Navigation
`Navbar.tsx` - Dengan:
- Mobile hamburger menu
- Smooth scroll ke section
- Active section highlight
- Dark mode toggle

## Development Workflow

### Adding New Project
1. Tambah entry di `src/data/portfolio.ts` → `projects` array
2. Tambah gambar di `public/projects/`
3. TypeScript akan validate struktur data

### Adding New Skill
1. Tambah entry di `skills` array di `portfolio.ts`
2. Pilih category: `backend` | `frontend` | `database` | `tools`
3. Set level (0-100) dan icon

### Modifying Sections
- Edit component di `src/sections/`
- Data diambil dari `portfolio.ts` via import

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript config (strict mode) |
| `next.config.ts` | Next.js config |
| `eslint.config.mjs` | ESLint flat config |
| `postcss.config.mjs` | PostCSS untuk Tailwind |
| `tailwind.config.ts` | Tailwind config (jika ada) |

## Performance Considerations
- Images: Next.js Image component untuk optimasi
- Fonts: `next/font` untuk self-hosting & preload
- Code splitting: Automatic via App Router
- Static generation: Default untuk page.tsx

## SEO & Metadata
- `layout.tsx` - Metadata utama (title, description)
- Open Graph tags untuk social sharing
- Semantic HTML structure
- Sitemap & robots.txt (auto-generated)

## Deployment Checklist
- [ ] `npm run build` passes tanpa error
- [ ] `npm run lint` clean
- [ ] Environment variables configured (jika ada)
- [ ] Images optimized di `public/`
- [ ] Favicon di `public/favicon.ico`
- [ ] Resume PDF di `public/cv.pdf` (referenced di personal.resumeUrl)

## Known Issues / TODO
- Project detail page (`/projects/[slug]`) belum diimplementasikan
- Contact form backend integration needed
- Unit tests belum ada
- Analytics tracking belum ditambahkan