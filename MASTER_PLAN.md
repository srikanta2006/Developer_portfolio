# MASTER_PLAN.md

## Personal Portfolio --- Srikanta Bellamkonda

**Status:** Approved blueprint\
**Design direction:** Minimal editorial\
**Identity:** Creative technologist / software developer / AI builder\
**Identity presentation:** Professional photograph\
**Theme:** Light only\
**Architecture:** Hybrid --- single-page homepage + dedicated project
case-study pages\
**Domain:** Undecided; deploy to a Vercel preview URL first\
**Development approach:** Phase-by-phase implementation with explicit
user review and approval between phases

------------------------------------------------------------------------

## 1. Product vision

Build a polished personal portfolio that communicates how Srikanta
thinks, builds, experiments, and ships software. It should feel like a
carefully designed editorial publication about a creative
technologist---not a generic developer template.

The portfolio has three jobs:

1.  Establish a clear professional identity.
2.  Demonstrate engineering ability through real projects, technical
    decisions, and case studies.
3.  Make it easy for recruiters, hiring managers, founders, and
    collaborators to explore work and make contact.

### Core positioning

**Creative Technologist · Software Developer · AI Builder**

Suggested hero message:

> Building intelligent products at the intersection of software and AI.

Supporting copy should be concise, authentic, and editable. Avoid
inflated claims, unsupported metrics, and claims of expertise that
cannot be defended in an interview.

### Audience

-   Recruiters and hiring managers
-   Engineering teams and startup founders
-   Potential collaborators
-   Developers interested in the user's work

### Product principles

-   Content and projects take priority over decoration.
-   Minimal visual design, rich but purposeful interaction.
-   Fast, accessible, responsive, and easy to maintain.
-   Real screenshots, real links, and verifiable claims only.
-   No fake GitHub statistics, fabricated project outcomes, or
    placeholder testimonials.
-   Build in small, reviewable phases. Do not continue to the next phase
    without explicit user approval.

------------------------------------------------------------------------

## 2. Approved decisions

  -----------------------------------------------------------------------
  Area                                Decision
  ----------------------------------- -----------------------------------
  Visual direction                    Minimal editorial

  Primary palette                     Warm off-white, white, near-black,
                                      muted gray

  Accent                              Restrained violet, with muted sage
                                      as a secondary accent

  Theme                               Light only; do not build a theme
                                      toggle

  Identity presentation               Professional photograph

  Hero treatment                      Typography-led; photograph may
                                      appear as a supporting visual, not
                                      dominate the hero

  Website structure                   Hybrid

  Homepage                            Single page with anchored sections

  Project details                     Dedicated case-study routes

  Signature interaction               Functional portfolio terminal

  Motion                              Subtle, purposeful animations

  GitHub                              Public profile/repository/activity
                                      integration

  Domain                              Undecided; use Vercel preview
                                      deployment until chosen

  Content management                  Local structured data and MDX
                                      initially; no database required
  -----------------------------------------------------------------------

### Visual references in words

Aim for the restraint of editorial/Swiss-inspired web design with the
clarity of a modern software product. Use strong typography, generous
whitespace, precise alignment, thin borders, restrained accent color,
and high-quality project imagery.

Avoid: - Neon-heavy cyberpunk styling - Excessive gradients and glow
effects - Skill percentage bars - Excessive glassmorphism -
Cursor-following effects that interfere with usability - Animation on
every element - Large decorative elements that push actual work below
the fold

------------------------------------------------------------------------

## 3. Information architecture and routes

### Main navigation

-   Home
-   About
-   Work
-   Experience
-   Contact
-   Resume link

Keep the navigation compact and sticky. On mobile, use a simple
accessible menu. The logo/name returns to the homepage top.

### Homepage sections

Use this order:

1.  Hero
2.  About
3.  Selected Work
4.  Technical Capabilities
5.  Experience & Journey
6.  GitHub Activity
7.  Interactive Terminal
8.  Contact
9.  Footer

### Routes

-   `/` --- Homepage
-   `/work/biznexus` --- BizNexus case study
-   `/work/burst` --- Burst case study
-   `/work/hackos` --- HackOS case study

Use a reusable case-study template driven by project data/MDX. Do not
create separate one-off page implementations for each project unless a
project genuinely needs a unique layout.

### Navigation behavior

-   Desktop: sticky, minimal navigation with active section indication
    where appropriate.
-   Mobile: accessible menu with clear open/close behavior.
-   Anchor links should account for the sticky header.
-   Project cards navigate to their case-study pages.
-   External links should be clearly identified and open safely.

------------------------------------------------------------------------

## 4. Detailed section specifications

### 4.1 Hero

**Purpose:** Explain who the portfolio belongs to and what kind of work
the owner does within a few seconds.

Content: - Full name: Srikanta Bellamkonda - Role line: Creative
Technologist · Software Developer · AI Builder - Main headline:
"Building intelligent products at the intersection of software and
AI." - Short, first-person supporting introduction - Primary CTA:
"Explore my work" - Secondary CTA: "Resume" - Links to GitHub and
LinkedIn - Optional availability indicator, but only if the user
confirms the wording is current - Location may be shown as Hyderabad,
India if the user approves keeping it public

Design: - Large editorial typography - Two-column layout on wide screens
where useful - Professional photo used as a supporting visual with
consistent crop and accessible alt text - Small metadata labels and
subtle dividers - No giant gradient background - Strong first viewport
on common laptop and mobile sizes

The photograph is not available yet. Use a clearly labeled temporary
image placeholder during development; do not invent or generate a
realistic portrait of the user. Ask for the actual photo when needed.

### 4.2 About

**Heading:** "A little about how I think."

Include: - Short engineering-focused biography - Education - Interests
across software engineering, AI, and product building -
Learning/building philosophy - Optional photograph or alternate crop -
Resume link

Keep the biography concise. Do not duplicate the entire resume.

### 4.3 Selected Work

Feature three projects:

**BizNexus** - Positioning: AI-powered business intelligence / business
co-pilot application. - Explain the actual implemented workflow and
agent orchestration accurately. - Highlight architecture, data flow, and
product decisions. - Do not claim capabilities that are only planned.

**Burst** - Positioning: Full-stack multi-user blogging application. -
Explain authentication, publishing, feed, and the implemented
review/content workflow accurately. - Include real product screenshots.

**HackOS** - Positioning: Productivity workspace for hackathon
workflows. - Explain its workspace, focus mode, and integrated tools
based on what is actually implemented. - Distinguish working features
from prototypes or planned features.

Every project card should include: - Project name and number - Short
value proposition - Category - Real screenshot or labeled placeholder -
Concise technology tags - "View case study" - GitHub and live demo links
only when valid

### 4.4 Technical capabilities

Group technologies by discipline, not by arbitrary skill percentages.

Suggested categories: - Programming: Python, C++, Java, JavaScript, C -
AI / ML: Deep Learning, Agentic AI, YOLOv8, NLP, Computer Vision, LLM
orchestration - Frontend: React, Next.js, HTML, CSS - Backend: Flask,
Node.js, FastAPI - Data / Cloud: SQLite, Firebase, Supabase, Azure -
Tools: Git, Docker, Linux, Jenkins, Vercel

Treat this as a proposed content inventory, not a claim that every
technology has equal proficiency. Before publishing, ask the user to
verify, remove, or reorder technologies. Do not show proficiency
percentages.

### 4.5 Experience & Journey

Use a vertical editorial timeline. Separate categories clearly: -
Education - Professional experience (only if applicable and verified) -
Technical training - Hackathons and competitions - Leadership and
community involvement

Potential content to verify: - B.Tech Computer Science education -
TekWorks technical training and practical work - Startup Party
participation/selection - Smart India Hackathon 2024 screening -
Agentathon 2025 participation - Technical leadership and community
involvement

Do not represent training, hackathons, or volunteering as employment.
Verify organization names, dates, titles, and wording with the user
before publishing.

### 4.6 GitHub Activity

Use the public GitHub profile: `https://github.com/srikanta2006`.

Potential UI: - Profile link and avatar (if available through the API) -
Public repository highlights - Recent public repository activity or
contribution data, only if supported by a reliable endpoint - Language
information only when it can be computed accurately and its meaning is
explained

Implementation: - Fetch server-side through a Next.js route or server
component. - Keep any token server-side in environment variables; never
expose secrets in client code. - Prefer unauthenticated public API
access if it meets requirements. - Cache responses and handle rate
limits, missing data, and API outages gracefully. - Show a helpful
fallback with a GitHub profile link if the API is unavailable. - Never
fabricate contribution counts or imply private repository access. -
Document API limitations.

### 4.7 Interactive Terminal

Build a small, accessible, portfolio-specific command interface.

Suggested commands: - `help` --- list supported commands - `about` ---
short introduction - `projects` --- list projects and navigate to work -
`skills` --- show technical categories - `github` --- open public GitHub
profile - `contact` --- show contact links - `resume` --- provide the
resume link if available - `clear` --- clear terminal output

Requirements: - Commands must be deterministic and harmless. - Keyboard
support: Enter to submit; sensible focus behavior. - Clear command
history/output behavior. - Mobile-friendly input and output. - Visible
focus states and accessible labels. - No simulated operating-system
access, fake diagnostics, shell execution, arbitrary command execution,
or misleading security claims. - Terminal must not be the only way to
access any portfolio content.

### 4.8 Contact

Include: - Clear invitation to connect - Email address, once
supplied/verified - LinkedIn - GitHub - Resume link - Optional contact
form

If a form is implemented, validate inputs, provide accessible
success/error feedback, protect against spam, and do not expose
email-service credentials. If no backend/service is configured, use a
direct email link rather than a fake form.

### 4.9 Footer

Include: - Name/wordmark - Small navigation links - GitHub and
LinkedIn - Copyright year generated dynamically - Optional "Designed and
built by..." line

------------------------------------------------------------------------

## 5. Project case-study specification

Each case study should use the same reusable structure:

1.  Project title, short tagline, category, role, and timeframe (if
    verified)
2.  Overview
3.  Problem / context
4.  Goals and constraints
5.  Solution and key user flows
6.  Product screenshots
7.  System architecture diagram
8.  Technical implementation
9.  Key engineering decisions and trade-offs
10. Challenges and how they were addressed
11. Outcome and learnings
12. Technology stack
13. GitHub / live demo links
14. Previous/next project navigation

### Case-study content rules

-   Clearly distinguish implemented, partially implemented, and planned
    features.
-   Use real screenshots from the application.
-   Do not invent users, revenue, performance gains, adoption, or
    business impact.
-   Explain personal contribution accurately, especially for team
    projects.
-   Prefer concrete engineering explanations over generic statements.
-   Architecture diagrams must reflect the actual code and system.
-   Ask the user to supply or verify project-specific details before
    final copy is published.

------------------------------------------------------------------------

## 6. Design system

### Color tokens

Primary light theme: - Page background: `#F7F6F2` - Surface/card:
`#FFFFFF` - Primary text: `#171717` - Secondary text: `#858585` - Accent
violet: `#6D5DFB` - Muted sage: `#B8C6A5` - Border: `#E8E5DD`

Use violet sparingly for links, focus/active states, and small
highlights. Ensure text and controls meet WCAG contrast requirements;
adjust tokens if contrast testing identifies failures.

### Typography

Preferred pairing: - Display/headings: Playfair Display - Body/UI:
Inter - Technical labels/terminal: JetBrains Mono

Use responsive type scales with `clamp()` where appropriate. Keep
paragraphs readable and avoid excessively wide line lengths.

### Layout

-   Maximum content width: approximately 1200px
-   Main content width: approximately 1100px
-   Desktop grid: 12 columns
-   Mobile grid: 4 columns
-   Desktop section spacing: approximately 100--140px
-   Mobile section spacing: approximately 64--80px
-   Card radius: approximately 8--14px
-   Thin, low-contrast borders
-   Minimal shadows
-   Consistent spacing scale and alignment

### Components

Create reusable components for: - Site header/navigation - Mobile
navigation - Section heading - Buttons and text links - Project card -
Technology tag - Timeline item - Social links - GitHub
activity/repository card - Terminal - Case-study hero - Image/media
frame - Footer

### Responsive behavior

Test at minimum: - Small mobile: 320--375px - Large mobile: 390--430px -
Tablet: 768px - Laptop: 1280--1440px - Wide desktop: 1600px+

Avoid horizontal overflow. Make terminal, navigation, project media, and
case-study diagrams usable on touch devices.

------------------------------------------------------------------------

## 7. Motion and interaction specification

Use Framer Motion (or the current compatible Motion package selected
during setup) for restrained motion.

Approved motion: - Hero text entrance - Small navigation active-state
transition - Gentle section reveal - Subtle project image zoom on
hover - Timeline reveal - Terminal typing/cursor treatment - Page
transitions only if they do not impair navigation or performance

Rules: - Respect `prefers-reduced-motion`. - Do not hide important
content until animation completes. - Avoid scroll-jacking and excessive
parallax. - Keep animations short and purposeful. - Ensure keyboard and
touch interactions work without hover. - Prefer CSS for simple
hover/focus transitions; use motion library only where it adds value.

------------------------------------------------------------------------

## 8. Technical architecture

### Recommended stack

-   Next.js with App Router
-   TypeScript
-   Tailwind CSS
-   Framer Motion / Motion
-   Lucide React
-   MDX or structured TypeScript data for case studies
-   GitHub REST API for public profile/repository data
-   Vercel for preview and production hosting

Use current stable, mutually compatible package versions at project
initialization. Do not blindly copy obsolete setup commands or APIs.

### Data strategy

No database is needed initially.

Keep editable content in: - `src/data/projects.ts` -
`src/data/skills.ts` - `src/data/experience.ts` - MDX files or
equivalent structured case-study content

Keep content separate from presentation components.

### Suggested structure

``` text
portfolio/
├── public/
│   ├── images/
│   ├── projects/
│   ├── resume.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── work/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── api/
│   │       └── github/
│   │           └── route.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   ├── terminal/
│   │   └── ui/
│   ├── content/
│   │   └── work/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   └── lib/
│       ├── github.ts
│       └── utils.ts
├── .env.example
├── MASTER_PLAN.md
├── README.md
└── package.json
```

Adapt this structure if the chosen Next.js version or MDX setup calls
for a better convention. Avoid unnecessary abstraction.

### Engineering standards

-   Strict TypeScript; avoid `any` unless justified.
-   Reusable components without overengineering.
-   Semantic HTML.
-   Accessible labels, focus states, and keyboard interactions.
-   Image optimization and meaningful alt text.
-   Server components by default; use client components only for
    interactive behavior.
-   Keep secrets on the server.
-   Error, loading, and empty states for integrations.
-   No unnecessary dependencies.
-   No console errors or hydration warnings.
-   Keep README setup instructions current.

------------------------------------------------------------------------

## 9. Implementation phases and review gates

**Critical rule: complete only one phase at a time. Stop after each
phase and wait for the user's explicit approval before starting the next
phase.**

The coding agent must not automatically continue to another phase, even
if it believes the next phase is obvious.

### Phase 0 --- Discovery and project setup

Tasks: - Inspect the existing workspace before changing anything. -
Determine whether this is a new project or an existing repository. -
Confirm runtime/package manager and current environment. - Initialize
Next.js, TypeScript, and Tailwind if needed. - Establish the initial
folder structure. - Add linting and formatting conventions appropriate
to the project. - Create a basic README and `.env.example`. - Add this
`MASTER_PLAN.md` to the project.

Acceptance criteria: - App runs locally. - Initial build succeeds. - No
unnecessary packages. - Setup instructions are documented. - No visual
sections are built prematurely.

**Review gate:** Show the user the setup, file tree, commands, and
test/build results. Stop and request approval.

### Phase 1 --- Design foundation and site shell

Tasks: - Implement color and typography tokens. - Configure global
layout and responsive container. - Build header/navigation and footer. -
Build reusable buttons, links, tags, and section-heading components. -
Add basic responsive behavior. - Establish the light-only visual system.

Acceptance criteria: - Consistent typography, colors, spacing, and
borders. - Navigation works on desktop and mobile. - Keyboard focus is
visible. - No horizontal overflow at tested widths. - No unfinished
theme toggle.

**Review gate:** Present screenshots or a running preview at desktop and
mobile sizes. List files changed and tests run. Stop for approval.

### Phase 2 --- Homepage content and layout

Tasks: - Implement Hero. - Implement About. - Implement Selected Work
cards. - Implement Technical Capabilities. - Implement Experience &
Journey. - Implement Contact and Footer. - Use structured content
data. - Use labeled placeholders for missing photo, project screenshots,
resume, or contact details.

Acceptance criteria: - Homepage section order matches the plan. -
Content is readable and responsive. - CTAs and anchors work. - No
fabricated facts or metrics. - Placeholder assets are obvious and easy
to replace.

**Review gate:** Present the full homepage and a content checklist
identifying every item that needs user verification. Stop for approval.

### Phase 3 --- Project case studies

Tasks: - Create reusable case-study route/template. - Add BizNexus,
Burst, and HackOS case-study content. - Add image galleries/media
frames. - Add architecture diagram support. - Add previous/next project
navigation. - Add verified repository/demo links.

Acceptance criteria: - All three routes load directly and through
project cards. - Consistent case-study structure. - Responsive media and
diagrams. - Implemented vs planned features are clearly distinguished. -
No invented outcomes or screenshots.

**Review gate:** Ask the user to verify project descriptions, personal
contributions, architecture, screenshots, and links. Stop for approval.

### Phase 4 --- Interactive features

Tasks: - Build functional portfolio terminal. - Add approved motion and
transitions. - Implement GitHub API integration. - Add loading, error,
and fallback states. - Cache GitHub data appropriately. - Verify
keyboard and touch behavior.

Acceptance criteria: - Terminal supports only documented portfolio
commands. - Terminal does not execute arbitrary commands. - GitHub
integration uses public, verifiable data. - API failures do not break
the page. - Reduced-motion preferences are respected. - No secrets are
exposed in browser code.

**Review gate:** Demonstrate terminal commands, GitHub success/failure
states, and animations. Stop for approval.

### Phase 5 --- Quality, accessibility, and optimization

Tasks: - Test responsive layouts and browsers. - Audit semantic HTML and
keyboard navigation. - Check color contrast and reduced motion. -
Optimize images, fonts, and client-side JavaScript. - Check metadata,
title, description, canonical URL strategy, and Open Graph metadata. -
Check links, resume download, contact behavior, and error states. - Run
production build and relevant lint/type checks.

Acceptance criteria: - No critical accessibility issues. - No broken
internal links. - No horizontal overflow. - No runtime/build errors. -
Good Core Web Vitals practices. - Search metadata is present and
accurate.

**Review gate:** Provide a test report with any remaining known
limitations. Stop for approval.

### Phase 6 --- Deployment

Tasks: - Connect the repository to Vercel. - Configure environment
variables if needed. - Deploy a preview/production build using the
temporary Vercel URL. - Verify all routes and integrations in
production. - Confirm resume and contact links. - Discuss custom domain
options only when the user is ready.

Acceptance criteria: - Production deployment succeeds. - All pages load
directly. - API routes behave correctly. - No development-only URLs or
secrets. - User explicitly approves the final public release.

**Review gate:** Provide the deployment URL, verification checklist, and
any domain follow-up. Do not purchase or configure a custom domain
without explicit instruction.

------------------------------------------------------------------------

## 10. Testing and quality checklist

### Functional

-   Navigation and anchor links
-   Mobile menu open/close
-   Project cards and case-study routes
-   Previous/next case-study links
-   Resume download
-   GitHub profile/repository links
-   Terminal command handling
-   Contact links/form behavior
-   GitHub API fallback behavior

### Visual

-   Typography and hierarchy
-   Consistent spacing
-   Photo crop and image quality
-   Project screenshot aspect ratios
-   Responsive layouts
-   Hover, focus, and active states
-   No layout shift from media loading

### Accessibility

-   Semantic landmarks and heading order
-   Keyboard-only navigation
-   Visible focus indicators
-   Accessible names for icon-only controls
-   Alt text for meaningful images
-   Sufficient color contrast
-   Reduced-motion support
-   Form labels and error announcements

### Technical

-   TypeScript checks
-   Lint
-   Production build
-   Browser console
-   Network/API error handling
-   No exposed secrets
-   No hydration mismatch
-   Metadata and social preview

------------------------------------------------------------------------

## 11. Content and asset dependencies

The agent should keep a content-readiness checklist and ask for assets
only when they are needed.

  Item                               Status
  ---------------------------------- -----------------------------------------------
  Full name                          Available
  GitHub profile                     Available
  LinkedIn profile                   Previously supplied; verify before publishing
  Professional photo                 Needed
  Latest resume PDF                  Needed
  BizNexus screenshots               Needed
  Burst screenshots                  Needed
  HackOS screenshots                 Needed
  Project repository URLs            Verify
  Live demo URLs                     Verify
  Email address for public display   Confirm
  Education wording/dates            Verify
  Experience and achievement dates   Verify
  Custom domain                      Undecided

Do not block the initial setup because these assets are missing. Use
clearly labeled placeholders and replace them during content review.

------------------------------------------------------------------------

## 12. Scope boundaries

Do not add these unless the user requests them or approves a later scope
change: - Blog/CMS - Admin dashboard - Database or authentication - AI
chatbot - Analytics trackers - Complex 3D scenes - Light/dark theme
switcher - Custom domain purchase - Paid third-party services -
Arbitrary terminal or shell execution - Unrequested external
integrations

A portfolio should remain fast and easy to maintain.

------------------------------------------------------------------------

## 13. Definition of success

The project is successful when: - A visitor understands the owner's
identity and interests quickly. - The three featured projects are easy
to discover. - Case studies demonstrate real engineering thinking. - The
design is distinctive but restrained. - Interactions are useful,
accessible, and reliable. - The site works well on mobile and desktop. -
Content is truthful and easy to update. - The user understands the
codebase and can maintain it. - The user approves each phase before the
next begins.

**Final product principle:** Build a portfolio that demonstrates the
ability to think, design, engineer, and ship---not merely list
technologies.
