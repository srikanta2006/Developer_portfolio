# Personal Portfolio — Srikanta Bellamkonda

**Identity:** Creative Technologist · Software Developer · AI Builder  
**Visual Direction:** Minimal Editorial  
**Theme:** Light Only  
**Architecture:** Next.js App Router (Hybrid: Single-Page Homepage + Dedicated Case-Study Routes)

---

## Overview

This repository houses the personal portfolio of Srikanta Bellamkonda. It is engineered with a minimal editorial aesthetic, presenting real projects, engineering decisions, and technical case studies.

The project follows a disciplined, phase-by-phase implementation governed by `MASTER_PLAN.md` and `AI_CODING_AGENT_PROMPT.md`.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with editorial `@theme` tokens
- **Typography:** Next.js Google Fonts (`Playfair Display`, `Inter`, `JetBrains Mono`)
- **Icons:** [Lucide React](https://lucide.dev/) + Semantic SVGs
- **Utilities:** `clsx`, `tailwind-merge` (`cn` helper in `src/lib/utils.ts`)
- **Linting:** ESLint (flat config with Next.js core web vitals and TypeScript rules)

---

## Design System Tokens (Light Theme Only)

| Token | Value | Role |
| :--- | :--- | :--- |
| **Page Background** | `#F7F6F2` | Warm off-white editorial canvas |
| **Surface / Card** | `#FFFFFF` | Crisp white cards, containers, and interactive surfaces |
| **Primary Text** | `#171717` | Near-black high-contrast heading and body text |
| **Secondary Text** | `#706E6B` | Muted neutral with guaranteed WCAG AA contrast ratio (>4.5:1) |
| **Accent Violet** | `#6D5DFB` | Purposeful highlights, links, and keyboard focus rings |
| **Muted Sage** | `#B8C6A5` | Secondary calm nature/architectural accent |
| **Border** | `#E8E5DD` | Subtle low-contrast structural dividers and borders |

---

## Project Structure

```text
Portfolio_website/
├── public/
│   ├── images/              # Photographs and editorial media
│   ├── projects/            # Real project screenshots
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, typography variables, reduced-motion rules
│   │   ├── layout.tsx       # Root layout, Google Fonts, Header, Skip-to-content, Footer
│   │   └── page.tsx         # Design tokens & site shell preview (Phase 1)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx# Responsive container (1120px default, 1240px wide, 840px narrow)
│   │   │   ├── Header.tsx   # Sticky header with desktop nav, mobile drawer, skip link
│   │   │   └── Footer.tsx   # Wordmark, links, social connections, and back-to-top
│   │   ├── sections/        # Homepage sections (Phase 2)
│   │   ├── projects/        # Project cards and showcase components
│   │   ├── terminal/        # Interactive portfolio command interface (Phase 4)
│   │   └── ui/
│   │       ├── Badge.tsx    # Tech tags and status pills (default, accent, sage, neutral)
│   │       ├── Button.tsx   # Polymorphic button/link (primary, secondary, accent, outline, ghost)
│   │       ├── SectionHeading.tsx # Editorial numbered section titles
│   │       └── TextLink.tsx # Accessible text link with external indicator
│   ├── content/
│   │   └── work/            # Case study MDX / content definitions (Phase 3)
│   ├── data/                # Structured data files (Phase 2)
│   └── lib/
│       └── utils.ts         # Utility helpers (cn class merging)
├── .env.example             # Environment variable template
├── AI_CODING_AGENT_PROMPT.md# Implementation instructions and workflow contract
├── MASTER_PLAN.md           # Master blueprint and source of truth
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started (Windows PowerShell)

### Prerequisites

- **Node.js**: v20+ or v22 LTS (Verified on `v22.14.0`)
- **npm**: v10+ (Verified on `10.9.2`)

### 1. Install Dependencies

```powershell
npm install
```

### 2. Run Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Verification & Quality Checks

Run linting:
```powershell
npm run lint
```

Run TypeScript type check:
```powershell
npm run typecheck
```

Run production build:
```powershell
npm run build
```

---

## Implementation Phases & Status

| Phase | Description | Status |
| :--- | :--- | :--- |
| **Phase 0** | Discovery and project setup | **Complete** |
| **Phase 1** | Design foundation and site shell | **Complete (Awaiting Review)** |
| **Phase 2** | Homepage content and layout | Next up (Pending Phase 1 approval) |
| **Phase 3** | Project case studies | Scheduled |
| **Phase 4** | Interactive features (Terminal & GitHub) | Scheduled |
| **Phase 5** | Quality, accessibility & optimization | Scheduled |
| **Phase 6** | Deployment (Vercel preview) | Scheduled |
