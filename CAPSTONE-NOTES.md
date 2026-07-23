# InterviewAI - Capstone Project Notes

## Overview
AI-powered mock interview practice platform that helps users prepare for technical, behavioral, and system design interviews with real-time feedback and performance analytics.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** React Icons (HeroIcons)
- **Deployment:** Vercel (auto-deploy on push)
- **Runtime:** Server Components by default, Client Components only for interactivity

## Project Structure
```
interviewai-capstone/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx          # Root layout with navigation + footer
│   │   ├── page.tsx            # Landing/Home page
│   │   ├── dashboard/page.tsx  # Dashboard with stats & charts
│   │   ├── practice/page.tsx   # Interview categories & difficulty
│   │   ├── learn/page.tsx      # Learning paths & articles
│   │   ├── history/page.tsx    # Session history timeline
│   │   ├── analytics/page.tsx  # Performance breakdown & AI insights
│   │   ├── profile/page.tsx    # Settings & preferences
│   │   ├── health/page.tsx     # Health check (fetches API data)
│   │   └── api/health/route.ts # Health check API endpoint
│   │   └── globals.css         # Design tokens & theme
│   └── components/
│       └── Navigation.tsx      # Responsive nav with icons (Client Component)
```

## Routes (10 total)
| Route | Type | Purpose |
|-------|------|---------|
| `/` | Static | Hero section, features grid, role tags, CTA |
| `/dashboard` | Static | Stats cards, weekly bar chart, quick actions, recent sessions |
| `/practice` | Static | 6 category cards, difficulty selector, role tags |
| `/learn` | Static | 4 learning paths with progress bars, 5 quick-read articles |
| `/history` | Static | Summary strip, 6 session cards with color-coded scores |
| `/analytics` | Static | Metric cards, category breakdown, AI insights, score trend |
| `/profile` | Static | Avatar header, form sections, notification toggles |
| `/health` | Dynamic | Status banner, detail cards, fetches from `/api/health` |
| `/api/health` | API | Returns JSON: status, timestamp, service, version |

## Design System
- **Theme:** Dark mode (forced, `color-scheme: dark`)
- **Primary Color:** Blue (#3b82f6)
- **Background:** #0a0f1a (deep navy)
- **Cards:** #111827 (dark gray)
- **Borders:** #1e293b (subtle)
- **Text:** #e2e8f0 (light slate)
- **Accent:** #1e3a5f (blue-tinted dark)

## Key Features
1. **Landing Page** - Gradient hero with animated badge, 3 feature cards, role selection, stats counter
2. **Dashboard** - 4 stat cards with trends, CSS bar chart for weekly progress, quick actions panel, recent activity feed
3. **Practice** - 6 interview categories (Technical, Behavioral, System Design, Product, Culture, DevOps), 3 difficulty levels
4. **Learning Hub** - 4 structured courses with progress tracking, 5 curated articles with read times
5. **Analytics** - 4 performance metrics with trends, 5-category score breakdown with progress bars, 3 AI insight cards
6. **History** - Summary strip with totals, 6 session cards with color-coded scores and tags
7. **Profile** - Avatar header, 2 form sections, notification toggle switches
8. **Health Check** - Server Component fetching data from API, status banner, 4 detail cards
9. **Navigation** - Icons on every link, responsive (horizontal on desktop, icon-only on mobile)
10. **Footer** - Project branding

## Component Architecture
- **Server Components (default):** All page components are Server Components for performance
- **Client Components:** Only `Navigation.tsx` uses `"use client"` for `usePathname()` interactivity
- **Data Fetching:** Health page fetches from `/api/health` using `fetch()` with `cache: "no-store"`

## Deployment
- **Platform:** Vercel
- **Preview URL:** https://interviewai-capstone.vercel.app
- **GitHub Repo:** https://github.com/archanamalluri5-eng/interviewai-capstone
- **Auto-deploy:** Every push to `master` triggers a new production deployment

## Responsive Breakpoints
- Mobile: 375px (compact icon nav, stacked layouts)
- Tablet: 640px (2-column grids)
- Desktop: 1024px+ (full navigation, 3-4 column grids)

## Security
- `.gitignore` covers all `.env*` files
- `.env.example` provided for structure reference
- No secrets committed to repository
- No API keys hardcoded in source
