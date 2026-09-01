# Agent Instructions - Portfolio Project

## Project Overview
Ini adalah website portfolio pribadi **Rafif** (Frontend Developer) yang dibangun dengan **Next.js 16**, **React 19**, **Tailwind CSS 4**, dan **TypeScript**.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4, Framer Motion
- **Icons**: Lucide React, React Icons
- **Language**: TypeScript
- **Font**: Geist (via next/font)

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Halaman utama (menggabungkan semua section)
│   ├── layout.tsx         # Root layout dengan metadata & fonts
│   ├── globals.css        # Global styles
│   ├── projects/          # Halaman detail project (dynamic routes)
│   └── not-found.tsx      # 404 page
├── components/
│   ├── layout/            # Navbar, Footer
│   └── ui/                # ProjectCard, ProjectGallery, TechBadge
├── data/
│   └── portfolio.ts       # Semua data konten (projects, skills, experience, social links)
├── sections/              # Section halaman
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── TerminalSection.tsx
└── types/
    └── portfolio.ts       # TypeScript interfaces
```

## Commands
```bash
npm run dev          # Development server (localhost:3000)
npm run dev:network  # Development server dengan network access
npm run build        # Production build
npm run start        # Production server
npm run serve        # Production server dengan network access
npm run lint         # ESLint
```

## Data Management
Semua konten dikelola di `src/data/portfolio.ts`:
- **personal**: Info pribadi (nama, role, email, location, dll)
- **projects**: Array project dengan detail lengkap
- **skills**: Skills dengan kategori (backend/frontend/database/tools) dan level
- **experiences**: Pengalaman kerja
- **socialLinks**: Link sosial media
- **navLinks**: Navigasi

## Type Definitions
Di `src/types/portfolio.ts`:
- `Project`, `Skill`, `Experience`, `SocialLink`

## Styling Guidelines
- Gunakan Tailwind CSS classes
- Dark mode support via `className` strategy
- Framer Motion untuk animasi
- Responsive design (mobile-first)

## Key Features
1. Hero section dengan animasi terminal
2. About section
3. Tech Stack dengan badge teknologi
4. Projects gallery dengan detail modal
5. Experience timeline
6. Skills dengan progress bar
7. Contact form
8. Terminal interactive section

## Deployment
- Vercel (recommended)
- `npm run build` untuk production build
- Static export tidak digunakan (Next.js App Router)