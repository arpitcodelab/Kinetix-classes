# Kinetix Classes — Rebuild Technical Notes & Architecture (Phase 4)

> **Document Status:** Complete Phase 4 Deliverable  
> **Repository:** Kinetix Classes Rebuild (Stage A: Marketing & Admissions, Stage B: LMS Ready)  
> **Architecture Lead:** Antigravity AI Engineering (`agency-frontend-developer` + `agency-senior-developer`)

---

## 1. Stack Decisions & Rationale

| Layer | Selection | Technical Rationale |
|---|---|---|
| **Build Tool** | **Vite 6** | Ultra-fast HMR, lightweight ES-module pipeline, modern Rollup chunking, sub-250ms dev server startup. |
| **Framework** | **React 19 + TypeScript 5.8** | Static-first, strongly typed component tree, zero runtime type errors, maximum maintainability. |
| **Styling** | **Tailwind CSS 3.4 + PostCSS** | Token-driven atomic styling configured to custom design tokens (`bg-deep`, `kinetic-cyan`, etc.) with zero runtime CSS-in-JS overhead. |
| **Routing** | **React Router DOM 7** | Client-side declarative routing, automatic scroll-to-top restoration, dynamic course routes (`/courses/:slug`), and pre-configured LMS shells (`/login`, `/portal`). |
| **Animation Engine** | **GSAP 3.12 + `@gsap/react` (`useGSAP`)** | Industry-standard smooth 60fps animations, automatic unmount cleanup via `useGSAP` context, and strict `prefers-reduced-motion` compliance. |
| **Iconography** | **Bespoke Vector SVGs + Lucide React** | Precision stroke-based SVGs for custom educational & scientific motifs; Lucide for standard accessible UI iconography. |

---

## 2. Component Inventory & Architecture

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx            # Multi-variant accessible button (primary, secondary, outline, whatsapp, phone)
│   │   ├── Container.tsx         # Responsive container with size scales (sm, md, lg, xl, full)
│   │   ├── FormField.tsx         # Accessible input, textarea, and select field with error state
│   │   ├── Reveal.tsx            # GSAP viewport reveal with automatic cleanup and reduced-motion fallback
│   │   └── Section.tsx           # Semantic section wrapper with background variant tokens
│   │
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed glass header, desktop nav, mobile drawer, LMS portal trigger
│   │   ├── Footer.tsx            # Semantic footer with verified address, Google Maps links, and copyright
│   │   ├── StickyMobileBar.tsx   # Fixed bottom action bar (Call | WhatsApp | Enquire) for mobile viewports
│   │   └── LMSPreviewModal.tsx   # Stage B student & parent portal shell preview modal
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx       # 3-plane dimensional hero (kinetic grid, copy, authentic photo composite)
│   │   ├── TrustStrip.tsx        # 4 verified proof points (Google 5.0, Small Batches, Faculty, Fees)
│   │   ├── ProgramsSection.tsx   # Course cards grid with category filter tabs
│   │   ├── WhyKinetixSection.tsx # The 4 core pedagogical pillars
│   │   ├── GallerySection.tsx    # 10 authentic classroom photos in modern mosaic with zoom lightbox
│   │   ├── FacultySection.tsx    # Verified faculty claim and structured subject mentor cards
│   │   ├── ReviewsSection.tsx    # 10 verified Google customer reviews with 5.0 star badge
│   │   └── FAQSection.tsx        # Accessible accordion FAQ items
│   │
│   └── ui/
│       ├── CourseCard.tsx        # Course card with bespoke scientific SVG illustration & badges
│       ├── FacultyCard.tsx       # Mentor credential card with experience badge
│       ├── Testimonial.tsx       # Google review card with author details and verified check
│       ├── FAQItem.tsx           # Accordion item with expand/collapse states
│       ├── CTABand.tsx           # High-conversion admission & scholarship test callout
│       ├── ContactBlock.tsx      # Campus address, visiting hours, and interactive Google Map
│       └── LeadModal.tsx         # Accessible admissions form with zero-backend honesty & WhatsApp dispatch
│
├── data/                         # Decoupled Typed Data Models (Never edit components for copy changes)
│   ├── courses.ts                # 10 verified academic programs and curriculum descriptions
│   ├── faculty.ts                # Verified faculty credentials and structured placeholders
│   ├── gallery.ts                # 10 verified photos with WebP variants and aspect ratios
│   ├── faqs.ts                   # 6 comprehensive parent and student FAQs
│   ├── institute.ts              # Verified address, phone numbers, hours note, and Google Place ID
│   └── reviews.ts                # 10 full verbatim un-truncated Google reviews
│
├── pages/
│   ├── HomePage.tsx              # Full landing page orchestrated for parent/student journey
│   ├── CoursesPage.tsx           # Comprehensive program catalog with real-time text & category search
│   ├── CourseDetailPage.tsx      # Dynamic individual program syllabus breakdown (`/courses/:slug`)
│   ├── AboutPage.tsx             # Institute story, campus gallery, and methodology
│   ├── FacultyPage.tsx           # Mentors and 1-on-1 counseling scheduling
│   ├── ContactPage.tsx           # Direct embedded enquiry form, phone helpline, and map
│   ├── PrivacyPolicyPage.tsx     # Verbatim legal compliance policy dated 1st January, 2025
│   └── NotFoundPage.tsx          # 404 error page with trajectory recovery links
│
├── types/
│   └── index.ts                  # TypeScript interfaces for all data models
├── index.css                     # Tailwind directives and CSS Custom Properties
├── App.tsx                       # Main application shell with routing and global modals
└── main.tsx                      # React root entrypoint
```

---

## 3. Strict Functional Compliance & Backend Honesty

1. **Zero-Backend Honesty:**
   No server endpoint was provided for form submissions. Rather than displaying deceptive messages like *"We'll call you shortly"*, the admission enquiry form ([`LeadModal.tsx`](file:///c:/Users/Arpit%20Prajapati/Desktop/lead/KineticClassess/src/components/ui/LeadModal.tsx) & [`ContactPage.tsx`](file:///c:/Users/Arpit%20Prajapati/Desktop/lead/KineticClassess/src/pages/ContactPage.tsx)):
   - Clearly notifies users that their submission formats an instantaneous direct dispatch to the official counseling WhatsApp desk.
   - Automatically pre-populates the verified student name, mobile number, target program, and question into `https://wa.me/918448040355?text=...`.
   - Protects against automated spam via a client-side honeypot field (`website_bot_trap`).
   - Validates 10-digit Indian mobile numbers and mandatory fields with accessible error banners.

2. **Verified Telephone Links:**
   All `tel:` links point strictly to the audited number `tel:8448040355`.

3. **Google Maps Place ID Integration:**
   All map embeds and directions point to the verified Google Place ID `ChIJC5tZtyfrDDkR2WHg2F06RR8` for Kinetix Classes at I-120 Alpha 2, Greater Noida.

---

## 4. Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (starts on http://localhost:3000)
npm run dev

# 3. Production Typecheck & Build
npm run build

# 4. Preview production build locally
npm run preview
```

