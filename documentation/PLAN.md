# Master Orchestration & Implementation Plan: Kinetix Classes Redesign

**Orchestrator:** `agency-nexus` + `gsd-*`  
**Target Architecture:** React 19 + Vite + JavaScript JSX (`.jsx`) + SCSS (`.scss`)  
**Strict Directives:**  
1. All React components must use JavaScript JSX in `.jsx` files.  
2. All authored stylesheets must use SCSS in `.scss` files.  
3. Zero TypeScript (`.tsx`/`.ts`), zero Tailwind CSS, zero authored plain `.css`.  
4. Content preservation: All institute facts, prices, faculty, and contact details preserved verbatim.  
5. Visual system: Premium Deep Navy (`#070C14`), Kinetic Cyan (`#00E5C8`), Precision Cobalt (`#2563EB`).  
6. Motion: `scroll-craft` dimensional hero + GSAP ScrollTrigger reveals with `prefers-reduced-motion` compliance.  

---

## Phased Execution Roadmap

### Phase 1: Environment & Tooling Preparation
- Remove Tailwind and TypeScript dependencies from runtime build.
- Configure `vite.config.js` with React plugin, SCSS preprocessor, and clean alias paths.
- Setup `sass` compiler integration.

### Phase 2: Design System & SCSS Architecture (`agency-ux-architect` & `agency-ui-designer`)
- `src/styles/_tokens.scss`: Brand palette, contrast-certified text colors, spacing scales, elevation, radii.
- `src/styles/_reset.scss`: CSS reset, accessible focus indicators, box-sizing, custom scrollbar.
- `src/styles/_typography.scss`: Fluid display headings (`clamp()`), body copy, tabular numerals for dates/fees.
- `src/styles/_components.scss`: Button states, CourseCards, FacultyCards, Testimonials, FormFields, Modals, Navbar, Footer, StickyMobileBar.
- `src/styles/_hero.scss`: Dimensional multi-plane hero styling with depth anchors and light velocity streaks.
- `src/styles/main.scss`: Central stylesheet bundle.

### Phase 3: Data & Component Migration (`agency-frontend-developer`)
- Convert `src/data/*.ts` -> `src/data/*.js` (preserving 100% of verified data verbatim).
- Migrate all UI components to `.jsx` with semantic BEM/SCSS class structures:
  - `Button.jsx`, `Container.jsx`, `Section.jsx`, `FormField.jsx`, `Reveal.jsx`
  - `Navbar.jsx`, `Footer.jsx`, `StickyMobileBar.jsx`, `LMSPreviewModal.jsx`
  - `HeroSection.jsx`, `TrustStrip.jsx`, `ProgramsSection.jsx`, `WhyKinetixSection.jsx`, `FacultySection.jsx`, `ReviewsSection.jsx`, `FAQSection.jsx`, `GallerySection.jsx`
  - `CourseCard.jsx`, `FacultyCard.jsx`, `Testimonial.jsx`, `FAQItem.jsx`, `CTABand.jsx`, `ContactBlock.jsx`, `LeadModal.jsx`
- Migrate all Pages to `.jsx`:
  - `HomePage.jsx`, `CoursesPage.jsx`, `CourseDetailPage.jsx`, `AboutPage.jsx`, `FacultyPage.jsx`, `ContactPage.jsx`, `PrivacyPolicyPage.jsx`, `NotFoundPage.jsx`
- Migrate root entry: `main.jsx` and `App.jsx`.
- Clean up obsolete `.tsx`, `.ts`, and `.css` files.

### Phase 4: Scroll-Craft & GSAP Motion Engineering (`scroll-craft` & `gsap-*`)
- Multi-plane dimensional hero using GSAP timeline with independent background, mid-ground, subject, and foreground drift.
- Batch ScrollTrigger animations for section entries.
- Full `gsap.matchMedia()` integration with reduced-motion mode and mobile optimization.

### Phase 5: Verification & Quality Audits (`playwright-skill`, `agency-*`)
- Production build compilation test (`vite build`).
- Playwright headless browser runs for full-page responsive screenshots (1440px, 1024px, 768px, 390px).
- Accessibility audit (WCAG 2.2 AA), SEO metadata check, performance audit.
- Final Reality Checker certification report.
