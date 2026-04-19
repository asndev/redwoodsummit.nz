# redwoodsummit.nz

Marketing website for **Redwood Summit** — a premium short-term rental lodge in Rotorua, New Zealand, next to the Whakarewarewa Redwoods trail network. Opening 2027.

## Stack

- [Astro 5](https://astro.build) — static site generator with zero-JS-by-default output (fastest possible marketing site)
- [Tailwind CSS v4](https://tailwindcss.com) via the Vite plugin (CSS-first theming)
- React islands where interactive components are needed
- `@astrojs/sitemap` for automatic sitemap generation
- Deployed to [GitHub Pages](https://pages.github.com) with a custom domain (`redwoodsummit.nz`)

## Local development

```bash
npm install
npm run dev        # start dev server at http://localhost:4321
npm run build      # build production site into ./dist
npm run preview    # preview the built site
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Astro and publishes to GitHub Pages via the modern `actions/deploy-pages` flow. The custom domain is enforced by `public/CNAME`.

**GitHub repo settings required (one-time):**
1. Settings → Pages → Source: **GitHub Actions**
2. Settings → Pages → Custom domain: `redwoodsummit.nz` (already set — `CNAME` file reinforces it)
3. Settings → Pages → Enforce HTTPS: on

## Structure

```
src/
  consts.ts              # SITE config (name, domain, mailto, opening year, GA ID)
  images.ts              # Centralized image URLs — swap placeholders here
  layouts/BaseLayout.astro
  components/
    SEO.astro            # meta tags + JSON-LD LodgingBusiness
    Header.astro  Footer.astro  Logo.astro
    Hero.astro           # homepage hero
    Intro.astro          # "the story" section
    PropertiesOverview.astro
    Amenities.astro      # 6-grid with icons
    Location.astro       # trails/forest stats section
    Gallery.astro        # image mosaic
    FAQ.astro            # with FAQPage schema
    RegisterInterest.astro # mailto CTA
    PageHero.astro       # reusable subpage hero
  pages/
    index.astro          # /
    lodge.astro          # /lodge — premium residence
    cottage.astro        # /cottage — family residence
    trails.astro         # /trails — Redwoods/MTB story (SEO)
public/
  CNAME                  # redwoodsummit.nz
  robots.txt             # + sitemap reference
  llms.txt               # AI-agent-friendly site summary
  favicon.svg
.github/workflows/deploy.yml
```

## TODOs before launch

- Replace Unsplash placeholder URLs in `src/images.ts` with real property photography / renders
- Set real `gaMeasurementId` in `src/consts.ts` (currently `G-XXXXXXXXXX`; GA script is gated off while this is the placeholder)
- Confirm real email at `hello@redwoodsummit.nz` forwards somewhere (currently used in every CTA)
- Generate a real `/og-default.jpg` (1200×630) — referenced by SEO but not yet committed
- Fill in bedroom/bathroom/guest specs in `consts.ts` + `pages/lodge.astro` + `pages/cottage.astro` as designs finalize
- Update approximate geo coordinates in `consts.ts` once the property location is surveyed
- Add `/privacy` and `/terms` pages before commercial launch
