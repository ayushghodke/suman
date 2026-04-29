# Suman Enterprises — Website

Production-ready, trust-led website for **Suman Enterprises** — a 15-year-old, government-licensed electrical & civil engineering contractor based in Dhankawadi, Pune.

This is **Session 1** of a five-session build (per the build brief in `Assets/Suman_Enterprises_Website_Content.md` §13). Session 1 ships:

- Project scaffold — Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- Full design system (palette, typography, spacing) wired through Tailwind v4 `@theme` tokens
- All 20 brand SVGs in place under `public/assets/`
- Site-wide layout: `UtilityBar`, `Header` (sticky + JS-free mobile menu), `Footer`, `WhatsAppFloat`, `SkipToContent`
- Homepage at `/` with hero, credentials strip, services grid, "How we work" diagram, projects teaser, and the tender CTA banner
- SEO foundation — `Organization` and `LocalBusiness` JSON-LD on every page, per-route metadata, dynamic `sitemap.xml` and `robots.txt`
- Stub lead-capture API at `/api/submit-lead`
- 404 page

Sessions 2–5 (Contact / About / Tenders / individual service pages / case studies / AMC / legal / blog) will build on this foundation.

---

## Run locally

```bash
cd Website
npm install
npm run dev          # → http://localhost:3000
```

Build for production and run:

```bash
npm run build
npm start
```

`npm run build` also runs `next-sitemap` afterwards (postbuild) to emit `public/sitemap*.xml` and `public/robots.txt`.

---

## Deploy

### Vercel (recommended, one-click)

1. Push the repo to GitHub.
2. Import the repo at https://vercel.com/new — Vercel auto-detects Next.js.
3. **Environment variables** (Vercel → Project Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` — `https://www.sumanenterprises.in` (or final domain)
   - Any form-handler keys you wire in later (see "Forms" below).
4. Deploy. Subsequent pushes to `main` trigger production deploys; PRs get preview URLs.

### Static-only host (S3 + CloudFront, Netlify static, GitHub Pages, etc.)

The current build expects Node at runtime (for `/api/submit-lead`). For a true static export:

1. Edit `next.config.ts`, add `output: "export"`.
2. Delete `src/app/api/` (or skip — `output: "export"` ignores route handlers anyway).
3. Wire forms to a third-party endpoint (Formspree / Web3Forms / Formspark) — see "Forms" below.
4. `npm run build` → upload the `out/` directory to your static host.

---

## Editing content

**All editable text lives in `src/content/`** — no need to touch JSX:

| File | What lives here |
|---|---|
| `site.ts` | Company name, tagline, phones, email, address, statutory IDs (GSTIN, licence numbers, ISO certificate, MSME / Udyam, founder name) |
| `nav.ts` | Primary nav, footer column groups, legal nav |
| `services.ts` | The ten service pillars — slug, title, icon file, summary, SEO meta. Titles are confirmed; bodies and meta tags currently TODO. |
| `projects.ts` | Seven case studies — currently all TODO until project list is supplied |
| `badges.ts` | Six trust badges and their alt-text labels |
| `home.ts` | Every string on the homepage (hero, intro, services lead-in, process explainer, projects lead-in, tender CTA) |

### Content strategy — TODO markers

The build brief said all copy should come verbatim from a content document, but the document supplied was the brief itself with no per-page copy. To keep Session 1 visually testable while honouring the "do not invent" rule, every unconfirmed string is wrapped in `todo("description")` (see `src/lib/copy.ts`). These render as `[TODO: description]` on the page with an **amber dashed outline** marking each one — a deliberate visual signal so a reviewer can scan the homepage and immediately see what still needs the client's words.

To produce the inventory of every TODO across the codebase:

```bash
grep -r "\\[TODO:" src/
```

When a TODO is filled in, change the value from `todo("...")` to a regular string and remove the `data-todo` flag where applicable.

---

## Design system

Tokens live in `src/app/globals.css` inside the `@theme` block:

| Token | Hex | Use |
|---|---|---|
| `--color-navy` | `#0B2A4A` | Primary brand, headings, nav |
| `--color-blue` | `#1F4E8C` | Links, secondary headers |
| `--color-steel` | `#5A6A7A` | Body sub-text, borders |
| `--color-cloud` | `#F7F9FC` | Page backgrounds |
| `--color-amber` | `#E89B1C` | CTAs, credential ribbons (sparingly) |
| `--color-green` | `#2E7D4F` | Verified / passed indicators, WhatsApp |

Tailwind v4 turns these into utility classes automatically (`bg-navy`, `text-amber`, etc.). Edit one hex value, the whole site updates.

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` — Inter (display), Source Sans 3 (body), Roboto Mono (kV/KVA tables only).

---

## Forms

Session 1 ships only the API stub. The four form variants (Contact, Quote, AMC, Tender) ship in Session 2. The lead-capture endpoint at `src/app/api/submit-lead/route.ts` currently just `console.log`s the submission. To wire a real provider:

**Option 1 — Formspree (no backend changes needed):**
- Sign up at https://formspree.io and create a form, copy the `FORM_ID`.
- Set `FORMSPREE_FORM_ID=<your-id>` in `.env.local`.
- Replace the `console.log` in `route.ts` with a `fetch` to `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`.

**Option 2 — Resend (transactional email):**
- Install: `npm i resend`
- Set `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL` in `.env.local`.
- Use `await resend.emails.send({ from, to, subject, text })` inside `route.ts`.

**Option 3 — Web3Forms (free, no signup-required):**
- Get an access key at https://web3forms.com.
- POST from the form directly to `https://api.web3forms.com/submit` — no API route needed.

For a no-JS fallback, every form will also ship a `mailto:` button that pre-fills a draft email — works offline, works with JS disabled.

---

## SEO

- **Metadata** is set in `src/app/layout.tsx` (defaults) and overridden per route via `export const metadata = buildMetadata({...})` (`src/lib/seo.ts`).
- **JSON-LD**: `Organization` + `LocalBusiness` (Electrician sub-type) are emitted globally from the root layout. Service detail pages, case studies, and FAQ pages add their own schemas via `<JsonLd>` (`src/components/seo/JsonLd.tsx`). The schema builder in `src/lib/schema.ts` strips any field whose value is still a `[TODO: ...]` placeholder, so structured data never publishes placeholder text.
- **Sitemap** is dynamically generated at `/sitemap.xml` (Next.js App Router `sitemap.ts`). The `next-sitemap` postbuild step also writes a static `public/sitemap*.xml` and `public/robots.txt` for hosts that prefer those.
- **Robots** at `/robots.ts` allows everything except `/api/`.

---

## Accessibility

- Skip-to-content link in the header
- All interactive elements have a visible blue focus ring (`:focus-visible` in `globals.css`)
- All images have descriptive `alt`; decorative SVGs use `alt=""` + `role="presentation"`
- Mobile menu uses `<details>`/`<summary>` so it functions with JavaScript disabled
- Tap targets are ≥ 44×44 px on mobile
- Indian English (`en-IN`) declared on `<html>`

---

## Outstanding TODOs (for the client)

Anything in `src/content/` returned by `todo("...")` needs the client's words. Group A is structural (block-launch); Group B is content quality.

**Group A — Statutory facts and contact details (block launch):**
- Full street address line + PIN code (`site.ts`)
- Primary contact email; careers email (`site.ts`)
- Government electrical contractor licence number (`site.ts`)
- ISO 9001:2015 certificate number (`site.ts`)
- MSME / Udyam registration number (`site.ts`)
- GSTIN (`site.ts`)
- Founder / proprietor name and title (`site.ts`)
- LinkedIn page URL (`site.ts`)

**Group B — Marketing copy (can launch as TODO; replace incrementally):**
- All `todo(...)` strings in `home.ts` (hero, intro, services lead-in, projects lead-in, tender CTA)
- Service summaries, meta titles and meta descriptions in `services.ts`
- All seven case studies in `projects.ts` (titles, slugs, scope summaries, clients, meta tags)
- Homepage `<title>` and meta description in `home.ts`

**Group C — Visual assets:**
- Real logo file (currently using a text wordmark)
- 1200×630 Open Graph image (currently defaulting to `01_hero_homepage.svg`)
- Real photographs for case studies (currently navy placeholders with camera icon)

Run `grep -r "\\[TODO:" src/` to enumerate exactly what's outstanding at any time.

---

## File map (Session 1)

```
Website/
├── public/
│   └── assets/                  # 20 SVGs
├── src/
│   ├── app/
│   │   ├── layout.tsx           # fonts, layout shell, global JSON-LD
│   │   ├── page.tsx             # homepage
│   │   ├── not-found.tsx        # 404
│   │   ├── globals.css          # Tailwind v4 @theme + base styles
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── api/submit-lead/route.ts
│   ├── components/
│   │   ├── layout/              # UtilityBar, Header, Footer, WhatsAppFloat
│   │   ├── sections/            # CredentialsStrip, CTASection, ProcessDiagram
│   │   ├── cards/               # ServiceCard, ProjectCard, TrustBadge
│   │   ├── seo/                 # JsonLd
│   │   └── a11y/                # SkipToContent
│   ├── content/                 # site.ts, nav.ts, services.ts, projects.ts, badges.ts, home.ts
│   └── lib/                     # copy.ts (todo helper), schema.ts, seo.ts
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── next-sitemap.config.cjs
├── package.json
├── .env.example
└── README.md
```
