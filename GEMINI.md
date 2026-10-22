# Antigravity Frontend Architecture

A reusable operating manual that teaches Antigravity how to combine the installed skills (`agency-*`, `gsap-*`, `scroll-craft`, `gsd-*`, `antislop-*`, `playwright-skill`) to build premium, non-generic React frontends with real motion, for any project.

Skills live in `~/.gemini/config/skills/`. This file never invents skill names: where a skill name is not listed here (the 72 `gsd-*` skills), Antigravity must list the folder and pick from what exists.

---

## 0. How to use this file (3 steps)

1. Put this file in the project root (or in Antigravity's rules/workspace-instructions location; common names are `GEMINI.md` or `AGENTS.md`, check which one your Antigravity version reads) so it is loaded every session.
2. Run the Teach-Back prompt in section 12 once. Antigravity must prove it understood the pipeline before touching code.
3. For each new project, fill the Project Brief (section 13) and paste the Kickoff prompt. Antigravity plans first, asks questions in quiz format, then builds phase by phase.

---

## 1. Operating principles

1. Plan before code. No implementation until the plan is approved (GSD plan mode).
2. Ask, don't guess. Any ambiguity about brand, content, assets or taste becomes a multiple-choice question (section 11).
3. Content is sacred. Reuse the client's real copy and assets. Never invent stats, names, testimonials or images. Use clearly marked placeholders.
4. Design before components. Tokens, type and motion rules are decided in Phase 2, before any section is built.
5. One strong idea per page. Each page has a "feeling curve" and a signature moment, not a stack of identical sections.
6. Motion is structure, not decoration. Every animation explains hierarchy, depth or progress.
7. Evidence over opinion. A phase is done only when screenshots and measurements prove it.
8. Default verdict is "NEEDS WORK" until the reality checker has evidence.

---

## 2. Skill routing map

| Job | Skills to use |
| :--- | :--- |
| Orchestrate the whole project | `agency-nexus`, `agency-agents-orchestrator`, `gsd-*` (plan mode) |
| Product and scope | `agency-product-manager`, `agency-sprint-prioritizer`, `agency-trend-researcher` |
| Research and structure | `agency-ux-researcher`, `agency-ux-architect` |
| Brand and visual identity | `agency-brand-guardian`, `agency-ui-designer`, `agency-visual-storyteller` |
| Delight and micro-interactions | `agency-whimsy-injector` (use sparingly, after the system is stable) |
| Imagery direction | `agency-image-prompt-engineer`, `agency-inclusive-visuals-specialist` |
| Copy (only if the client wants rewrites) | `agency-copywriter`, `antislop-copywriting` |
| Scroll-driven storytelling and hero | `scroll-craft` (run its preflight `doctor.mjs`) |
| Animation engine | `gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-plugins`, `gsap-react`, `gsap-utils`, `gsap-performance` |
| Implementation | `agency-frontend-developer`, `agency-senior-developer`, `agency-rapid-prototyper` (spikes only) |
| Anti-generic filters | `antislop`, `antislop-ui`, `antislop-layoutmobile`, `antislop-code` |
| SEO | `agency-seo-specialist` |
| QA and proof | `playwright-skill`, `agency-evidence-collector`, `agency-accessibility-auditor`, `agency-performance-benchmarker`, `agency-test-results-analyzer` |
| Final gate | `agency-reality-checker` |
| Docs and handoff | `agency-technical-writer` |

Do not use for web UI work: game-engine skills (Godot, Unreal, Unity, Roblox), blockchain skills, China-platform marketing skills, firmware, XR/visionOS skills (unless the brief asks for WebXR via `agency-webxr-developer`). `gsap-frameworks` is for Vue/Svelte only; use `gsap-react` in React.

---

## 3. Pipeline (phases, owners, gates)

Maps to NEXUS phases. Every phase ends with a gate; Antigravity stops and shows evidence before continuing.

### Phase 0: Discovery and content freeze
- Skills: `agency-nexus`, `agency-ux-researcher`, `playwright-skill`
- Do: audit any existing site or brief; crawl pages, capture verbatim text, images (original resolution), links, forms, meta tags; list animations to remove.
- Output: `content/*.json`, `assets/manifest.json`, `docs/sitemap.md`, `docs/audit.md`.
- Gate: I approve the content freeze.

### Phase 1: Strategy and plan (GSD plan mode)
- Skills: `gsd-*` (list and choose the project-init, discuss, plan and verify skills), `agency-product-manager`, `agency-sprint-prioritizer`
- Do: define goals, audience, pages, success metrics; write the phased plan with acceptance criteria.
- Output: `docs/PLAN.md` with phases, tasks, risks, open questions.
- Gate: I approve the plan and the answers to the quiz questions.

### Phase 2: Design system and motion language
- Skills: `agency-ux-architect`, `agency-ui-designer`, `agency-brand-guardian`, `antislop-ui`, `scroll-craft`
- Do: choose a design personality (3 to 5 adjectives, plus what it must NOT feel like), then define tokens: colors, type scale, spacing, radii, shadows, grid, motion durations and eases, icon family. Pick the scroll-craft page grammar and write the feeling curve per page.
- Output: `src/styles/tokens.css`, `docs/DESIGN.md`, `docs/MOTION.md`, a one-page style tile.
- Gate: I approve the style tile (render it in the browser, screenshot it).

### Phase 3: Foundation
- Skills: `agency-frontend-developer`, `gsap-react`, `gsap-plugins`, `antislop-code`
- Do: scaffold Vite + React + TypeScript, router, providers, GSAP registration, smooth scroll, motion hooks, `Icon` wrapper, layout shell, route transition, SEO helper.
- Output: running app with Navbar, Footer, one empty page, all motion primitives tested in a `/_lab` route.
- Gate: build passes, no console errors, motion lab verified.

### Phase 4: Signature page first
- Skills: `scroll-craft`, `gsap-scrolltrigger`, `gsap-timeline`, `agency-senior-developer`, `antislop`
- Do: build the home page hero (dimensional, 4-plane if it fits the brand) and its first two chapters.
- Gate: screenshots at 1440, 1024, 768, 390; scroll recording or frame captures; I approve the feel before the rest is built.

### Phase 5: Remaining pages and sections
- Skills: `agency-frontend-developer`, `gsap-core`, `gsap-utils`, `antislop-layoutmobile`
- Do: build every page from frozen content; each page gets its own structure, not a copy of the home layout.
- Gate: content diff against `content/*.json` shows zero unapproved differences.

### Phase 6: Harden
- Skills: `agency-accessibility-auditor`, `agency-performance-benchmarker`, `agency-seo-specialist`, `gsap-performance`, `agency-evidence-collector`
- Do: WCAG 2.2 AA audit, keyboard and screen-reader pass, reduced-motion pass, Lighthouse, Core Web Vitals, mobile pass, broken-link check.
- Gate: all targets in section 10 met or exceptions approved by me.

### Phase 7: Final gate and handoff
- Skills: `agency-reality-checker`, `agency-technical-writer`
- Do: independent verdict with screenshot evidence, README, content-update guide, deployment notes.
- Gate: verdict is READY, or the fix list is cleared and re-verified.

---

## 4. Tech stack baseline

| Concern | Choice | Notes |
| :--- | :--- | :--- |
| Framework | React 18+ with Vite, TypeScript | Next.js only if the brief needs SSR/SEO beyond prerendering |
| Routing | React Router | Route-level code splitting with `lazy` |
| Styling | CSS variables for tokens, plus CSS Modules or Tailwind (decide in Phase 2, never both) | Tokens are the only source of color, spacing and type values |
| Animation | GSAP via `gsap` and `@gsap/react` (`useGSAP`) | Plugins: ScrollTrigger, SplitText, DrawSVG, Flip, MorphSVG, ScrollSmoother, Draggable as needed |
| Smooth scroll | ScrollSmoother or Lenis (choose one, explain why) | Must coexist with route changes and `ScrollTrigger.refresh()` |
| Icons | `react-icons` | Rules in section 5 |
| 3D (optional) | Three.js or React Three Fiber | Only when the brief justifies it; lazy-loaded; static fallback |
| Fonts | `@fontsource` or `@fontsource-variable`, self-hosted | `font-display: swap`, preload the display font |
| Images | AVIF/WebP, responsive `srcset`, explicit width and height | Hero image preloaded, the rest lazy |
| Forms | Controlled inputs with validation (React Hook Form or native) | Accessible errors |
| Utilities | `clsx` | |

Rule: GSAP owns all timeline and scroll animation. Use plain CSS transitions only for simple hover and focus states. Do not mix GSAP with another animation library on the same elements.

---

## 5. Icons with react-icons

- Pick ONE family per project in Phase 2 (for example `react-icons/pi` Phosphor, `react-icons/lu` Lucide or `react-icons/tb` Tabler) and never mix families.
- Import from the subpackage, per icon, so the bundle stays small: `import { PiGraduationCapLight } from "react-icons/pi"`. Never import from the root `react-icons` package.
- Wrap every icon in `src/components/icons/Icon.tsx`, which sets size from tokens, matches stroke weight to the type weight and applies `aria-hidden` for decorative use. Icon-only buttons must have an `aria-label`.
- No emoji as icons. Signature icons (logo mark, brand motifs) are custom inline SVG, ideally animated with DrawSVG.
- Avoid the generic pattern of a colored circle with an icon on top, repeated in a three-column grid. If a feature set needs icons, integrate them into the typography or layout.

---

## 6. Folder architecture

```
project/
  GEMINI.md or AGENTS.md          # this file (or a pointer to it)
  docs/
    PLAN.md  DESIGN.md  MOTION.md  audit.md  sitemap.md
    evidence/                      # screenshots, Lighthouse reports, verdicts
  content/                         # frozen, verbatim content as JSON (one file per page)
  src/
    app/                           # router, providers, route config, error boundary
    styles/                        # tokens.css, base.css, typography.css, utilities.css
    motion/
      gsap.ts                      # registers plugins once
      tokens.ts                    # durations, eases, staggers
      smooth/                      # SmoothScroll provider
      hooks/                       # useReveal, useSplitText, usePin, useParallax,
                                   # useCounter, useMagnetic, useFlipFilter
      components/                  # SplitHeading, Marquee, ScrollProgress,
                                   # PageTransition, ParallaxLayer, HorizontalScroll
    components/
      ui/                          # Button, Chip, Field, Tag, Card variants
      layout/                      # Navbar, Footer, Section, Container, Grid
      icons/                       # Icon wrapper and custom SVGs
    sections/                      # page-specific sections, grouped by page
    pages/                         # Home, Courses, ... one folder per page
    lib/                           # seo, analytics, utils
    assets/                        # images, svg, fonts manifest
    _lab/                          # motion and component lab route (dev only)
  public/
```

Rules: components never hard-code copy (it comes from `content/`); components never hard-code colors, sizes or durations (they come from tokens); every GSAP animation lives inside `useGSAP` with a scoped ref.

---

## 7. Design system spec

Antigravity must produce these before building sections:

- Personality: 3 to 5 adjectives, 3 things it must not feel like, 2 reference brands or editorial styles (as inspiration, never to copy).
- Color: one ground, one ink, one primary, one accent at most, plus tints. Contrast table showing AA pass for every text and background pair. Dark and light surfaces defined per section, not per page accident.
- Typography: a display face with character, a readable body face, one small utility face for labels and numbers. Fluid scale with `clamp()`, line-height and tracking per level, a measure of 60 to 68 characters for body, tabular numerals for data. Banned as primary faces: Inter, Roboto, Arial, system-ui.
- Spacing and grid: a spacing scale, a 12-column grid with named breakpoints, section rhythm (large and small vertical spacing used deliberately).
- Shape and depth: radius and shadow rules, hairline rules, texture (grain, grid or pattern) if it fits the brand.
- Imagery: crop and mask rules (arches, tall crops, duotone), consistent treatment, alt-text conventions.
- Components: states for default, hover, focus-visible, active, disabled and loading.
- Motion tokens: see section 8.

---

## 8. Motion system

### 8.1 Tokens (`src/motion/tokens.ts`)
- Durations: micro 0.2s, UI 0.4s, reveal 0.8s, cinematic 1.2 to 1.6s.
- Eases: `power3.out` for reveals, `expo.out` for hero entrances, `power2.inOut` for scrubbed scenes, `none` for scrub-linked progress.
- Stagger: 0.06 to 0.12s per item; text lines 0.08s.
- Scrub: `scrub: 0.6` to `1` for smoothing; pinned scenes about 100 to 200vh long.

### 8.2 Required primitives (built in Phase 3, tested in `/_lab`)
- `useReveal`: fade/translate/clip-path reveal on enter, batched with `ScrollTrigger.batch()`.
- `SplitHeading`: SplitText line or word reveal with masked overflow.
- `ParallaxLayer`: depth-based `yPercent` drift for multi-plane scenes.
- `usePin` and `HorizontalScroll`: pinned chapters and horizontal sections.
- `useCounter`: number count-up with tabular numerals.
- `useMagnetic`: magnetic buttons (pointer devices only).
- `useFlipFilter`: Flip-based filter and reorder.
- `Marquee`, `ScrollProgress`, `PageTransition`, `SmoothScroll` provider.

### 8.3 Effects catalog (choose a few per project, never all)
Clip-path image reveals, masked image parallax, DrawSVG line drawing, sticky stacking cards, horizontal scroll, text scramble on key labels, spotlight or cursor-reactive glow on hover, gradient mesh or grain overlay, split-text headlines, marquee strips, scroll-progress rail, Flip-based filtering, morphing shapes with MorphSVG, subtle 3D tilt on cards, page wipes between routes.

### 8.4 Rules
- Animate `transform` and `opacity` only. Never animate layout properties (`width`, `height`, `top`, `left`, margins).
- Use `gsap.matchMedia()` for three modes: desktop full motion, mobile reduced (fewer pins, lighter parallax), and `prefers-reduced-motion` (fades only, no pinning, no parallax).
- Everything inside `useGSAP` with a scoped container ref so cleanup is automatic. No global selectors.
- Register plugins once in `src/motion/gsap.ts`. Import plugins only in routes that use them.
- Call `ScrollTrigger.refresh()` after fonts and images load, after route changes and after layout-changing state updates.
- `will-change` only on elements animating right now, removed after.
- At most one pinned scene visible at a time; no nested pins.
- Hover effects never replace focus-visible styles.

---

## 9. Anti-generic doctrine

An AI-looking site usually has: a centered hero with a gradient blob, three equal feature cards with round icon badges, a testimonial grid, identical card shadows, Inter everywhere, purple-to-blue gradients, emoji icons, and fade-up on every element. Antigravity must run the Slop Test at the end of Phase 2, Phase 4 and Phase 7 using `antislop`, `antislop-ui` and `antislop-layoutmobile`.

### Banned
- The generic hero + three-card + testimonial-grid template.
- Repeating the same card component for every section.
- Default fonts, default Tailwind palettes, default shadows.
- Emoji icons, stock-looking icon grids, mixed icon families.
- Fade-up on every element; animation with no purpose.
- Lorem ipsum, placeholder stats, fake logos.

### Required
- Each page has a distinct structure and a signature moment.
- At least one of these per site: an oversized type moment, a scroll-driven scene, an unusual layout rhythm (asymmetry, overlap, editorial numbering), a custom SVG motif.
- A visible, consistent brand device (grid lines, orbit rings, a drawn mark, a texture) that ties pages together.
- Real hierarchy: scale contrast of at least 4x between display and body.
- Mobile layouts designed on purpose, not squeezed.

### Slop Test (score each 0 to 2, fail if total below 16 of 20)
1. Could this be any other brand with the logo swapped? 2. Is the type memorable? 3. Is the palette restrained and intentional? 4. Does each section have a different shape? 5. Does motion explain something? 6. Is imagery treated consistently? 7. Are icons coherent and purposeful? 8. Does the hero have depth? 9. Does mobile feel designed? 10. Would a designer be proud of the first screen?

---

## 10. Quality gates and Definition of Done

| Area | Target |
| :--- | :--- |
| Lighthouse (mobile) | 90+ Performance, Accessibility, Best Practices, SEO |
| Core Web Vitals | LCP under 2.5s, CLS under 0.1, INP under 200ms |
| Accessibility | WCAG 2.2 AA, keyboard-only navigable, visible focus, reduced-motion respected, alt text on all images |
| Responsive | Verified at 1440, 1024, 768, 390 with screenshots |
| Motion | 60fps in scroll scenes, no layout thrash, no leaked triggers after route change |
| Content | Diff against `content/*.json` shows no unapproved change |
| Code | No console errors, no unused deps, tokens used everywhere, `antislop-code` pass |
| Slop Test | 16 of 20 or higher |
| Final | `agency-reality-checker` verdict with evidence saved in `docs/evidence/` |

Evidence required for every phase gate: screenshots from `playwright-skill`, a short list of issues found (the evidence collector should find at least a few), and the fixes applied.

---

## 11. Interaction protocol: quiz-format questions

Antigravity must ask questions as multiple-choice (A to D, plus "other") and must not proceed past an unanswered question that affects design or content. Batch up to 4 questions at a time.

Question bank (use what the brief does not already answer):
1. Visual direction: dark ground, light ground, hybrid, or brand-led palette?
2. Palette: which brand colors are fixed, and which may change?
3. Typography feel: editorial serif, bold geometric sans, condensed display, or Antigravity chooses?
4. Motion intensity: subtle, balanced, cinematic, or full scrollytelling?
5. Hero style: dimensional multi-plane, filmic pinned scene, split text-and-image, or live/interactive surface?
6. Imagery: use existing photos only, add illustration, or add generated imagery (with approval)?
7. Pages and scope: all pages, home first, or a specific list?
8. Content: verbatim reuse, light polish with approval, or rewrite?
9. Icon family: Phosphor, Lucide, Tabler, or Antigravity chooses?
10. Hosting and constraints: static hosting, SSR needed, analytics, forms backend?
11. Audience devices: mostly mobile, mostly desktop, or both?
12. Anything the site must never feel like?

---

## 12. Teaching flow: make Antigravity learn this once

### Step A: Skill discovery
Paste:
```
List every folder in ~/.gemini/config/skills/. Group them into agency-*, gsap-*, scroll-craft, gsd-*, antislop*, playwright-skill, onetake. For the gsd-* group, list all names and tell me which ones you would use for: project init, discussion/questions, phase planning, execution, verification, audit and milestone tracking. Do not guess names; only report what exists. Save the result to docs/skills-index.md.
```

### Step B: Load the manual
Paste:
```
Read ANTIGRAVITY_FRONTEND_ARCHITECTURE.md fully. Then read the SKILL.md of scroll-craft, gsap-react, gsap-scrolltrigger, gsap-plugins, gsap-performance, antislop and antislop-ui. Do not write any project code yet.
```

### Step C: Teach-back (proof of understanding)
Paste:
```
Teach it back to me in under 400 words: (1) the phases and their gates, (2) which skills run in each phase, (3) the five biggest anti-generic rules, (4) the motion rules, (5) how you will use react-icons, (6) when you must stop and ask me. Then list any conflicts or gaps you found in the manual. Do not start building.
```
Correct anything wrong before moving on.

### Step D: Calibration spike (optional but recommended, 20 minutes)
Paste:
```
In a scratch Vite + React + TypeScript project, build only /_lab: register GSAP plugins once, add SmoothScroll, SplitHeading, ParallaxLayer, useReveal and the Icon wrapper with one react-icons family. Run the doctor.mjs preflight from scroll-craft, take Playwright screenshots, and report what passed and failed. Do not build any real page.
```
This proves the toolchain works before a real project depends on it.

### Step E: Start a real project
Fill the Project Brief and paste the Kickoff prompt (section 13).

---

## 13. Project Brief and Kickoff prompt

### Project Brief (fill in)
```
PROJECT NAME:
TYPE: (marketing site / LMS front end / portfolio / e-commerce / dashboard / other)
GOAL: (what a visitor should do)
AUDIENCE:
EXISTING SITE OR CONTENT SOURCE: (URL, repo, docs)
ASSETS PROVIDED: (logo, photos, fonts, brand guide)
KEEP: (content, assets, URLs, form behavior)
CHANGE: (design, palette, typography, animation, structure)
PAGES:
PALETTE DIRECTION:
TYPOGRAPHY DIRECTION:
MOTION INTENSITY:
MUST NEVER FEEL LIKE:
STACK: React + Vite + TypeScript + GSAP + react-icons (change only if needed)
DEADLINE / CONSTRAINTS:
```

### Kickoff prompt
```
You are the lead of a NEXUS-style frontend team. Follow ANTIGRAVITY_FRONTEND_ARCHITECTURE.md exactly.

Project Brief:
[paste the filled brief]

Start with Phase 0 (discovery and content freeze) and Phase 1 (GSD plan mode). Stop after the plan, ask me the quiz-format questions you still need (max 4 at a time), and wait for approval. Do not write implementation code before I approve the plan and the style tile. Build phase by phase, show screenshot evidence at every gate, and run the Slop Test and the reality checker before calling anything done. Never invent content or assets.
```

---

## 14. Reusable follow-up prompts

- Add a section: "Add a [section] to [page]. Use content from content/[file].json only. Pick a layout that differs from the sections above and below it. Use useReveal or a pinned scene from the motion kit, check the Slop Test, and show screenshots at 1440 and 390."
- Fix generic look: "Run antislop and antislop-ui on [page]. List every generic pattern you find with screenshots, propose fixes tied to our tokens and brand device, then apply them after I approve."
- Add animation: "Propose three scroll or interaction effects for [section] from the effects catalog, each with purpose, performance cost and mobile fallback. Wait for my pick, then implement with useGSAP and matchMedia."
- Performance pass: "Run agency-performance-benchmarker and gsap-performance checks on [page]. Report LCP, CLS, INP, bundle size per route and any layout-animating tweens. Fix and re-measure."
- Final review: "Run agency-accessibility-auditor, agency-evidence-collector and agency-reality-checker. Save evidence to docs/evidence/ and give me the verdict and fix list."

