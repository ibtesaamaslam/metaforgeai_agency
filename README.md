<div align="center">

<img src="https://img.shields.io/badge/TypeScript-91.7%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/shadcn%2Fui-Component%20Library-000000?style=for-the-badge&logo=shadcnui&logoColor=white"/>
<img src="https://img.shields.io/badge/Gemini-AI%20Powered-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
<img src="https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Visibility-Private%20Repository-red?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/License-Proprietary-FF0000?style=for-the-badge"/>

<br/><br/>

# ⚡ MetaForgeAI Agency
### *AI Agency Website · React 18 · TypeScript · shadcn/ui · Gemini AI · Vercel*

**A production-grade, fully responsive AI agency website built with a modern React + TypeScript stack, a complete shadcn/ui component library, Gemini AI-powered blog generation, dark/light theme support, SEO optimization, and a full contact form with Zod validation — deployed live on Vercel.**

<br/>

🌐 **Live Demo:** [metaforgeai-agency.vercel.app](https://metaforgeai-agency.vercel.app)
🔒 **Visibility:** Private Repository — source code is not publicly accessible

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [What Is MetaForgeAI?](#-what-is-metaforgeai)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Pages & Sections](#-pages--sections)
- [Component Library](#-component-library-shadcnui)
- [AI Blog Generation](#-ai-blog-generation)
- [Theme System](#-theme-system)
- [SEO & Performance](#-seo--performance)
- [Form Handling & Validation](#-form-handling--validation)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🔍 Overview

**MetaForgeAI Agency** is a modern, production-ready agency website that presents AI services, showcases a portfolio of AI-powered solutions, and provides a professional web presence for an artificial intelligence consultancy and development agency. The site is engineered with a fully typed React 18 and TypeScript codebase, accelerated by Vite, styled with Tailwind CSS, and powered by the complete shadcn/ui component suite built on Radix UI primitives.

The project integrates **Google Gemini AI** for automated blog content generation — enabling the agency to programmatically produce technical articles and thought leadership posts at scale. It ships with SEO metadata management via `react-helmet-async`, dark/light theme toggling via `next-themes`, responsive layouts across all breakpoints, accessible interactive components through Radix UI, and a fully validated contact form using React Hook Form and Zod.

> 💡 **Why this stack?** React + TypeScript provides type safety across the entire component tree. Vite delivers sub-second hot module replacement for rapid development. shadcn/ui gives full ownership of every component's source code — unlike third-party UI kits, components live directly in the repository and can be customised at the source level. Tailwind CSS eliminates naming collisions and dead CSS. Together, they produce a maintainable, performant, and visually polished professional website.

---

## 🌐 Live Demo

| Environment | URL |
|-------------|-----|
| Production (Vercel) | [metaforgeai-agency.vercel.app](https://metaforgeai-agency.vercel.app) |
| Repository | Private — access granted by owner only |
| Lovable Project | [lovable.dev/projects/84a95da8](https://lovable.dev/projects/84a95da8-48d4-4104-b637-140e2a14c68c) |

---

## 🤖 What Is MetaForgeAI?

MetaForgeAI is an AI-first agency that designs and delivers AI-powered solutions for businesses — spanning automation, natural language processing, generative AI applications, machine learning pipelines, and intelligent web experiences. The agency website serves as:

- A **marketing and brand presence** showcasing the agency's identity, services, and mission.
- A **portfolio showcase** displaying case studies, client projects, and demonstrated AI capabilities.
- A **content hub** with an AI-generated blog covering AI trends, tutorials, and agency updates.
- A **conversion touchpoint** with a contact and inquiry form for prospective clients.
- A **capability demonstration** — the site itself is built using modern AI-assisted tooling (Lovable) and powered by Gemini AI for content, proving the agency's approach in practice.

---

## 🧰 Tech Stack

### Frontend Core

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev/) | 18.3.1 | UI framework — component-based architecture |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.3 | 91.7% of codebase — end-to-end static typing |
| [Vite](https://vitejs.dev/) | 5.4.19 | Build tool — ESM-native, sub-second HMR |
| [React Router DOM](https://reactrouter.com/) | 6.30.1 | Client-side routing and navigation |

### Styling & UI

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.17 | Utility-first CSS framework |
| [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | 1.0.7 | Keyframe animation utilities for Tailwind |
| [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | 0.5.16 | Prose styling for markdown-rendered blog content |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 2.6.0 | Safely merge conflicting Tailwind class names |
| [class-variance-authority](https://cva.style/docs) | 0.7.1 | Type-safe component variant management |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Conditional className construction utility |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.3.0 | Dark / light / system theme switching |
| [Lucide React](https://lucide.dev/) | 0.462.0 | 1,000+ consistent SVG icon set |

### Component Library (shadcn/ui + Radix UI)

| Primitive | Version | Used For |
|-----------|---------|---------|
| `@radix-ui/react-accordion` | 1.2.11 | FAQ and expandable content sections |
| `@radix-ui/react-alert-dialog` | 1.1.14 | Confirmation dialogs |
| `@radix-ui/react-avatar` | 1.1.10 | Team member and client profile images |
| `@radix-ui/react-checkbox` | 1.3.2 | Form checkboxes with accessibility |
| `@radix-ui/react-dialog` | 1.1.14 | Modal windows and overlays |
| `@radix-ui/react-dropdown-menu` | 2.1.15 | Navigation dropdowns |
| `@radix-ui/react-navigation-menu` | 1.2.13 | Accessible top navigation bar |
| `@radix-ui/react-popover` | 1.1.14 | Floating contextual panels |
| `@radix-ui/react-progress` | 1.1.7 | Skill and service progress indicators |
| `@radix-ui/react-select` | 2.2.5 | Accessible dropdown selects in forms |
| `@radix-ui/react-separator` | 1.1.7 | Visual dividers between sections |
| `@radix-ui/react-slider` | 1.3.5 | Range input sliders |
| `@radix-ui/react-tabs` | 1.1.12 | Service and portfolio tabbed views |
| `@radix-ui/react-toast` | 1.2.14 | Notification toasts (+ Sonner) |
| `@radix-ui/react-tooltip` | 1.2.7 | Hover tooltips on interactive elements |
| `cmdk` | 1.1.1 | Command palette / search interface |

### Data & Forms

| Technology | Version | Purpose |
|-----------|---------|---------|
| [TanStack Query](https://tanstack.com/query) | 5.83.0 | Server state, caching, and data fetching |
| [React Hook Form](https://react-hook-form.com/) | 7.61.1 | Performant uncontrolled form management |
| [Zod](https://zod.dev/) | 3.25.76 | Schema-first runtime validation |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | 3.10.0 | Connects Zod schemas to React Hook Form |

### Content & Media

| Technology | Version | Purpose |
|-----------|---------|---------|
| [react-markdown](https://github.com/remarkjs/react-markdown) | 10.1.0 | Renders Gemini-generated blog markdown as HTML |
| [Recharts](https://recharts.org/) | 2.15.4 | Data visualizations and analytics charts |
| [Embla Carousel](https://www.embla-carousel.com/) | 8.6.0 | Touch-friendly carousel for testimonials/portfolio |
| [react-day-picker](https://react-day-picker.js.org/) | 8.10.1 | Calendar / date picker in booking forms |
| [date-fns](https://date-fns.org/) | 3.6.0 | Date formatting and manipulation |

### SEO & UX

| Technology | Version | Purpose |
|-----------|---------|---------|
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | 3.0.0 | Per-page `<head>` meta tags, title, OG tags |
| [Sonner](https://sonner.emilkowal.ski/) | 1.7.4 | Styled toast notification system |
| [input-otp](https://github.com/guilhermerodz/input-otp) | 1.4.2 | OTP / verification code input fields |
| [vaul](https://vaul.emilkowal.ski/) | 0.9.9 | Mobile-optimized drawer / bottom sheet |
| [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) | 2.1.9 | Draggable split-panel layouts |

### AI & Backend

| Technology | Purpose |
|-----------|---------|
| Google Gemini AI (`GEMINI_API_KEY`) | Powers `generate-blogs.js` — AI blog content generation |
| Vercel | Production hosting, CI/CD from GitHub main branch |

### Tooling

| Tool | Version | Purpose |
|------|---------|---------|
| Bun | Latest | Primary package manager (`bun.lockb`) |
| npm | Latest | Fallback package manager (`package-lock.json`) |
| ESLint | 9.32.0 | Linting via `eslint.config.js` |
| `eslint-plugin-react-hooks` | 5.2.0 | Enforces React hooks rules |
| `eslint-plugin-react-refresh` | 0.4.20 | Fast Refresh compatibility |
| PostCSS + Autoprefixer | 8.5.6 / 10.4.21 | CSS vendor prefix handling |
| `lovable-tagger` | 1.1.9 | Lovable AI build-time component tagging |

---

## ✨ Key Features

### 🎨 Design & Visual

- **Fully responsive layout** — optimized for mobile (320px), tablet (768px), and desktop (1280px+) viewports.
- **Dark / light / system theme** — persisted theme preference via `next-themes` with flicker-free SSR-compatible hydration.
- **Smooth animations** — entrance animations, hover transitions, and page transitions via `tailwindcss-animate` keyframes.
- **Professional typography** — `@tailwindcss/typography` provides beautiful prose styling for all blog and long-form content.
- **Consistent iconography** — Lucide React's 1,000+ pixel-perfect SVG icons used throughout the interface.
- **Touch-friendly carousel** — Embla Carousel powers testimonials, portfolio items, and team slides with swipe gestures on mobile.
- **Accessible from day one** — all interactive components built on Radix UI primitives, which implement ARIA attributes, keyboard navigation, and focus management by default.

### 🤖 AI-Powered Features

- **Gemini blog generation** — `generate-blogs.js` at the repo root calls the Gemini API to produce SEO-optimised blog posts, technical articles, and AI thought leadership content automatically.
- **Markdown rendering** — generated blog posts are stored as markdown and rendered via `react-markdown` with full `@tailwindcss/typography` prose styling.
- **AI agency showcase** — the site itself demonstrates AI-assisted development methodology through its Lovable-built architecture.

### 📋 Forms & Validation

- **Contact / inquiry form** — React Hook Form with Zod validation, covering name, email, company, service interest, and message fields.
- **Real-time validation** — field-level error messages appear inline as users type, without page reload.
- **Schema-first design** — Zod schemas define the shape and constraints of all form data, which React Hook Form then enforces via `@hookform/resolvers`.
- **Accessible selects** — Radix UI `Select` and `Checkbox` components in forms comply with WCAG keyboard and screen reader requirements.

### 🔍 SEO & Discoverability

- **Per-page meta tags** — `react-helmet-async` manages `<title>`, `<meta description>`, Open Graph (`og:title`, `og:image`, `og:description`), and Twitter Card tags for every route.
- **Semantic HTML** — proper use of `<article>`, `<section>`, `<nav>`, `<main>`, and heading hierarchy for crawler readability.
- **Fast load times** — Vite code splitting, tree shaking, and asset optimization produce minimal JavaScript bundles per route.

### 📊 Data & Analytics

- **Recharts visualizations** — service metrics, client satisfaction rates, and growth charts rendered as interactive SVG charts.
- **TanStack Query** — handles server state with automatic background refetching, caching, and stale-while-revalidate strategies for any API data.

---

## 📂 Project Structure

```
metaforgeai_agency/
│
├── public/                          # Static assets served at root
│   └── (images, favicons, OG images)
│
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                      # shadcn/ui primitives (Accordion, Button,
│   │   │                            # Card, Dialog, Input, Select, Tabs, etc.)
│   │   ├── layout/                  # Navbar, Footer, Layout wrapper
│   │   ├── sections/                # Page sections (Hero, Services, Portfolio,
│   │   │                            # Testimonials, Team, Stats, CTA, Contact)
│   │   └── blog/                    # Blog card, blog list, blog post renderer
│   │
│   ├── pages/                       # Route-level page components
│   │   ├── Index.tsx                # Homepage — all sections assembled
│   │   ├── About.tsx                # About page — mission, team, values
│   │   ├── Services.tsx             # Services detail page
│   │   ├── Portfolio.tsx            # Case studies and project showcase
│   │   ├── Blog.tsx                 # Blog listing page
│   │   ├── BlogPost.tsx             # Individual blog post (markdown rendered)
│   │   ├── Contact.tsx              # Contact and inquiry form page
│   │   └── NotFound.tsx             # 404 page
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx           # Responsive breakpoint detection
│   │   └── use-toast.ts             # Sonner toast notification hook
│   │
│   ├── lib/                         # Utility functions
│   │   └── utils.ts                 # cn() — clsx + tailwind-merge helper
│   │
│   ├── App.tsx                      # React Router v6 route definitions
│   ├── main.tsx                     # React DOM root + HelmetProvider + QueryProvider
│   └── index.css                    # Tailwind base/components/utilities imports
│
├── generate-blogs.js                # Gemini AI blog post generation script
├── metadata.json                    # App metadata (name, permissions)
├── components.json                  # shadcn/ui CLI configuration
├── tailwind.config.ts               # Tailwind theme, plugins, content paths
├── vite.config.ts                   # Vite plugins, path aliases, dev server config
├── tsconfig.json                    # TypeScript project references config
├── tsconfig.app.json                # App source TypeScript settings
├── tsconfig.node.json               # Node tooling TypeScript settings
├── eslint.config.js                 # ESLint flat config (v9)
├── postcss.config.js                # PostCSS autoprefixer config
├── .env.example                     # Environment variable template
├── .gitignore
├── bun.lockb                        # Bun lockfile (primary package manager)
├── package-lock.json                # npm lockfile (fallback)
├── package.json                     # Dependencies and scripts
└── index.html                       # Vite HTML entry point
```

---

## 📄 Pages & Sections

### Homepage (`/`)

The homepage assembles all major sections into a single-page scroll experience:

| Section | Description |
|---------|-------------|
| **Hero** | Full-width headline, tagline, primary CTA button, and animated background |
| **Services** | Grid of AI service offerings — NLP, automation, generative AI, ML pipelines, web AI |
| **Stats** | Animated counters — clients served, projects completed, satisfaction rate, team size |
| **Portfolio** | Embla Carousel of featured case studies with project images and results |
| **Testimonials** | Client quotes in a carousel with avatar, name, company, and star rating |
| **Team** | Grid of team member cards with Radix Avatar, role, and social links |
| **Blog Preview** | Latest 3 blog posts with title, excerpt, date, and read-more link |
| **CTA** | Full-width call-to-action section with primary and secondary buttons |
| **Contact** | Contact form and agency contact details |
| **Footer** | Navigation links, social media, copyright |

### About Page (`/about`)

Covers the agency's founding story, mission statement, core values, team profiles, and technology philosophy. Uses Radix Tabs to separate "Our Story", "Our Values", and "Our Team" content.

### Services Page (`/services`)

Detailed breakdown of every AI service offering with use cases, deliverables, pricing tiers, and a Radix Accordion FAQ per service category. Services include:

- AI Strategy & Consulting
- Custom AI Model Development
- Natural Language Processing Solutions
- Generative AI Applications
- AI Process Automation
- Machine Learning Pipelines
- Intelligent Web & App Development

### Portfolio Page (`/portfolio`)

Filterable grid of case studies. Each card shows client name, industry, service type, outcome metrics, and links to a detailed project view. Radix Tabs filter by service category.

### Blog Page (`/blog`)

Paginated list of all blog posts generated by the Gemini AI script. Each card shows title, excerpt, date, category tag, and read time. Posts are stored as markdown and rendered via `react-markdown`.

### Blog Post Page (`/blog/:slug`)

Individual post page with full markdown rendering via `react-markdown` + `@tailwindcss/typography` prose styling, author info, publish date, estimated read time, social share buttons, and related posts.

### Contact Page (`/contact`)

Full-width contact form built with React Hook Form + Zod, including fields for name, email, company, phone, service of interest (Radix Select), budget range (Radix Select), project description (textarea), and newsletter opt-in (Radix Checkbox). Validated inline with schema-level constraints.

---

## 🧩 Component Library (shadcn/ui)

This project uses the full `shadcn/ui` component collection — all components live directly in `src/components/ui/` and are fully customisable at the source level. Configuration is managed via `components.json`.

Key components in use:

| Component | Used On |
|-----------|---------|
| `Button` | CTA buttons, form submits, navigation actions |
| `Card` | Service cards, portfolio cards, blog cards, team cards |
| `Input` | Contact form text fields |
| `Textarea` | Contact form message field |
| `Select` | Service and budget dropdowns in contact form |
| `Checkbox` | Newsletter opt-in in contact form |
| `Accordion` | FAQ sections on services page |
| `Tabs` | Service filters, about page sections, portfolio filters |
| `Dialog` | Project detail modals in portfolio |
| `Toast` + Sonner | Form submission confirmations and error notifications |
| `Avatar` | Team member profiles, testimonial authors |
| `Progress` | Skill bars and service metric indicators |
| `Separator` | Visual section dividers |
| `NavigationMenu` | Top navigation bar with dropdown submenus |
| `Tooltip` | Technology badge tooltips |
| `Badge` | Service tags, category labels on blog cards |
| `Sheet` + Vaul | Mobile navigation drawer |
| `Carousel` | Testimonials, portfolio highlights (Embla) |
| `Command` | Search palette (Ctrl+K) |
| `Skeleton` | Loading states for blog and portfolio lists |

---

## 🤖 AI Blog Generation

The `generate-blogs.js` script at the repository root provides automated blog content generation powered by the **Google Gemini API**.

### How It Works

```
node generate-blogs.js
        ↓
Reads topic list or seed prompts from config
        ↓
Calls Gemini API with a system prompt instructing it to act as
an AI industry expert writing for a technical B2B audience
        ↓
Receives markdown-formatted blog post with:
  - SEO-optimised title and meta description
  - Introduction, body sections with H2/H3 headings
  - Practical examples and code snippets where relevant
  - Conclusion with CTA
        ↓
Saves output as .md files in the blog content directory
        ↓
React blog pages read and render these markdown files
via react-markdown + @tailwindcss/typography
```

### Configuration

```env
GEMINI_API_KEY="your_gemini_api_key_here"
APP_URL="https://metaforgeai-agency.vercel.app"
```

### Generated Content Types

- AI industry trend analysis
- Technical tutorials (AI implementation guides)
- Case study breakdowns
- Thought leadership articles on generative AI, LLMs, and automation
- Agency news and project announcements

---

## 🌗 Theme System

MetaForgeAI Agency ships with a full dark/light/system theme implementation via `next-themes`:

```tsx
// Wrapped at root in main.tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <App />
</ThemeProvider>
```

- **`attribute="class"`** — applies `dark` class to `<html>` element.
- **`defaultTheme="system"`** — respects the user's OS-level preference on first visit.
- **`enableSystem`** — automatically updates when the OS theme changes.
- All colour tokens are defined as CSS custom properties in `index.css` and switched via the `.dark` class — ensuring zero flash on load.
- The theme toggle in the Navbar calls `useTheme()` from `next-themes` to cycle between light, dark, and system modes.

---

## 🔍 SEO & Performance

### Metadata Management

`react-helmet-async` is initialized in `main.tsx` via `<HelmetProvider>` and used in every page component:

```tsx
<Helmet>
  <title>MetaForgeAI — AI Agency</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="MetaForgeAI Agency" />
  <meta property="og:image" content="/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

Blog post pages dynamically inject the post's title, description, and cover image from the markdown frontmatter.

### Performance Optimizations

| Optimization | Implementation |
|-------------|----------------|
| Code splitting | Vite automatic route-based chunks via React lazy + Suspense |
| Tree shaking | ESM-native Vite build eliminates unused imports |
| Asset optimization | Vite image optimization and hashing for cache busting |
| Tailwind purge | Only used class names included in production CSS |
| Bundle analysis | `vite build` outputs chunk sizes for monitoring |

---

## 📋 Form Handling & Validation

The contact form demonstrates a best-practice React Hook Form + Zod architecture:

```tsx
const contactSchema = z.object({
  name:        z.string().min(2, "Name must be at least 2 characters"),
  email:       z.string().email("Please enter a valid email address"),
  company:     z.string().optional(),
  phone:       z.string().optional(),
  service:     z.enum(["nlp", "automation", "generative-ai", "ml", "consulting", "web-ai"]),
  budget:      z.enum(["under-5k", "5k-20k", "20k-50k", "50k-plus", "tbd"]),
  message:     z.string().min(20, "Please provide at least 20 characters"),
  newsletter:  z.boolean().default(false),
});

const form = useForm<z.infer<typeof contactSchema>>({
  resolver: zodResolver(contactSchema),
});
```

- `zodResolver` bridges the Zod schema to React Hook Form's validation cycle.
- Errors are displayed inline beneath each field using `form.formState.errors`.
- The `Sonner` toast fires on successful submission and on API errors.
- Form state resets automatically on successful submission.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (required by Vite)
- **Bun** (recommended) or **npm**
- A **Google Gemini API Key** (required only for blog generation — the website itself works without it)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ibtesaamaslam/metaforgeai_agency.git
cd metaforgeai_agency

# 2. Install dependencies
bun install       # recommended
# or
npm install

# 3. Set up environment variables
cp .env.example .env
# → Add your GEMINI_API_KEY and APP_URL

# 4. Start the development server
bun run dev       # or: npm run dev
# → Opens on http://localhost:3000
```

### Running Blog Generation

```bash
# Generate AI blog posts using Gemini
node generate-blogs.js
```

---

## 🔑 Environment Variables

Create a `.env` file at the root using `.env.example` as a template:

```env
# Required for Gemini AI blog generation (generate-blogs.js)
GEMINI_API_KEY="your_google_gemini_api_key"

# The deployed URL of the application (used for self-referential links and OG tags)
APP_URL="https://metaforgeai-agency.vercel.app"
```

| Variable | Required | Where to Get It |
|----------|----------|----------------|
| `GEMINI_API_KEY` | For blog generation only | [Google AI Studio](https://aistudio.google.com/app/apikey) |
| `APP_URL` | For OG tags and links | Your Vercel deployment URL |

> The website itself runs fully without the `GEMINI_API_KEY` — it is only needed when running `generate-blogs.js` to create new content.

---

## 📜 Available Scripts

```bash
# Start development server on http://localhost:3000 (all interfaces)
bun run dev          # or: npm run dev

# Build for production (outputs to dist/)
bun run build        # or: npm run build

# Build in development mode (unminified, for debugging prod issues)
bun run build:dev    # or: npm run build:dev

# Preview the production build locally
bun run preview      # or: npm run preview

# Run ESLint across all source files
bun run lint         # or: npm run lint

# Generate new blog posts with Gemini AI
node generate-blogs.js
```

---

## 🚢 Deployment

### Vercel (Production — Recommended)

The project is deployed at [metaforgeai-agency.vercel.app](https://metaforgeai-agency.vercel.app) via Vercel's GitHub integration:

1. Push any commit to the `main` branch.
2. Vercel automatically runs `npm run build`.
3. The `dist/` output is deployed to Vercel's global CDN.
4. Automatic preview deployments are created for every pull request.

**Vercel configuration** (in project settings):
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18.x

### Lovable (Alternative)

The project is also connected to [Lovable](https://lovable.dev/projects/84a95da8-48d4-4104-b637-140e2a14c68c). Changes made in the Lovable editor are automatically committed to this repository. Clicking **Share → Publish** in Lovable deploys directly.

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ directory is a self-contained static site
# Deploy it to any static host: Netlify, GitHub Pages, Cloudflare Pages, AWS S3, etc.
```

### Netlify

```toml
# netlify.toml
[build]
  command   = "npm run build"
  publish   = "dist"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

### Cloudflare Pages

Set build command to `npm run build` and output directory to `dist` in the Cloudflare Pages dashboard.

---

## 🗺 Roadmap

- [ ] **CMS integration** — connect a headless CMS (Sanity, Contentful, or Strapi) for non-technical content management
- [ ] **AI chatbot widget** — Gemini-powered live chat for visitor inquiries
- [ ] **Multi-language support** — i18n via `react-i18next` for Arabic, French, and Urdu
- [ ] **Portfolio filtering with animations** — Framer Motion layout animations for portfolio grid filtering
- [ ] **Analytics dashboard** — integrate PostHog or Plausible for privacy-friendly visitor analytics
- [ ] **Email integration** — connect contact form to Resend or SendGrid for delivery and autoresponse
- [ ] **Case study detail pages** — full dedicated pages per portfolio project with metrics, timeline, and testimonial
- [ ] **Service booking system** — calendar-based consultation booking via Radix `react-day-picker`
- [ ] **Blog search** — full-text search across all blog posts using cmdk Command palette
- [ ] **RSS feed** — auto-generated RSS/Atom feed for the blog

---

## 🔒 Private Repository Notice

This repository is **private**. The source code is proprietary and is not available for public forking, cloning, or redistribution.

If you are a collaborator who has been granted access by the owner:

```bash
# Clone using your authorised GitHub account
git clone https://github.com/ibtesaamaslam/metaforgeai_agency.git
cd metaforgeai_agency

# Install dependencies
bun install

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes, commit, and push
git add .
git commit -m "feat: description of your change"
git push origin feature/your-feature-name

# Open a Pull Request for review by the owner
```

> Unauthorised access, redistribution, or use of this codebase is strictly prohibited. See the [License](#-license) section for full terms.

---

## 👤 Author

<div align="center">

**Ibtesaam Aslam**

[![GitHub](https://img.shields.io/badge/GitHub-ibtesaamaslam-181717?style=for-the-badge&logo=github)](https://github.com/ibtesaamaslam)

*Full-Stack Developer & AI Enthusiast*

</div>

---

## 📜 License

```
Proprietary License

Copyright (c) 2024 Ibtesaam Aslam. All Rights Reserved.

This software and its source code are the exclusive property of Ibtesaam Aslam.
No part of this codebase may be copied, modified, distributed, sublicensed,
sold, or used in any form — in whole or in part — without the express prior
written permission of the copyright owner.

Unauthorised use, reproduction, or distribution of this software, via any
medium, is strictly prohibited and may result in severe civil and criminal
penalties, and will be prosecuted to the maximum extent possible under applicable law.

THE SOFTWARE IS PROVIDED "AS IS" WITHOUT ANY WARRANTY OF ANY KIND.
THE AUTHOR ACCEPTS NO LIABILITY FOR ANY DAMAGES ARISING FROM UNAUTHORISED USE.
```

| Permission | Status |
|-----------|--------|
| ❌ Public distribution | Not permitted |
| ❌ Forking or cloning | Not permitted without authorisation |
| ❌ Commercial use by third parties | Not permitted |
| ❌ Modification and redistribution | Not permitted |
| ✅ Authorised collaborator access | Permitted with explicit owner approval |
| ✅ Personal / internal use by owner | Permitted |

---

## 🙏 Acknowledgements

A special thank you to the tools, platforms, and teams that made MetaForgeAI Agency possible:

- **[Google AI Studio](https://aistudio.google.com/)** — the development environment and platform through which the Gemini API integration was built, tested, and iterated. Google AI Studio's seamless API key management, model playground, and structured output tooling were instrumental in making the AI blog generation pipeline work reliably. The `.env.example` `GEMINI_API_KEY` and `APP_URL` are injected automatically by AI Studio at runtime — a workflow that dramatically simplified deployment.
- **[Google Gemini API](https://ai.google.dev/)** — the underlying AI model powering `generate-blogs.js`. Gemini's large context window, structured JSON output via `responseSchema`, and strong reasoning quality produce publication-ready blog content with minimal post-processing.
- **[shadcn/ui](https://ui.shadcn.com/)** — for the exceptional component philosophy of owning your UI code rather than depending on a black-box package. Every component in `src/components/ui/` is customisable at the source level.
- **[Radix UI](https://www.radix-ui.com/)** — for the accessible, unstyled primitive components that power every interactive element with proper ARIA attributes and keyboard navigation built in.
- **[Lovable](https://lovable.dev/)** — for the AI-assisted development environment that accelerated the initial scaffold and wired up the Vite + React + shadcn stack with zero configuration overhead.
- **[Vercel](https://vercel.com/)** — for zero-configuration GitHub-integrated deployment with automatic preview builds and global CDN distribution.
- The **open-source ecosystem** behind Vite, Tailwind CSS, TanStack Query, React Hook Form, Zod, and every library this project depends on.

---

<div align="center">

🌐 [metaforgeai-agency.vercel.app](https://metaforgeai-agency.vercel.app)

*Built with ❤️ by [Ibtesaam Aslam](https://github.com/ibtesaamaslam) · Powered by [Google AI Studio](https://aistudio.google.com/) & Gemini*

</div>