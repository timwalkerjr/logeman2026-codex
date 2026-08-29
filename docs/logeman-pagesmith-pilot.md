# Logeman PageSmith pilot

## Contract

- PageSmith project: `881ce63c-4e57-4d8d-8eb2-873170c0396f`
- PageSmith production test site: `https://logeman.newsitebuild.dev`
- PageSmith preview after the pilot import: `https://881ce63c-b7cf2f9-preview.buildsites.xyz`
- GitHub source: `timwalkerjr/logeman2026-codex`, branch `main`
- Webflow source site: `693446872c5f1ab9965b1a98`
- Webflow production site: `https://www.logeman.com`
- Hard boundary: Webflow is read-only. PageSmith may be edited and published.

## Practice-area collection

- Collection entries: `src/content/practice-areas/*.mdx`
- Shared route: `src/pages/practice-area/[slug].astro`
- Shared presentation: the restored Car Accidents component stack (`ArticleHero`, `ArticleContent`, `ArticleFAQ`, testimonials, contact form, and map)
- Shared content layout: live-site two-column article/FAQ grid with the attorney team image and Awards and Honors sidebar; it stacks to one column on smaller screens.
- Sidebar navigation: an automatic “On This Page” table of contents is generated from each rendered practice-area page's `h2` and `h3` headings, including the FAQ section, with stable anchor targets and no editor-maintained link list.
- Sidebar CTA: each practice-area item's CTA fields render as a branded navy case-review panel immediately below the table of contents and link to the Contact Us form section.
- Route coverage: all 19 existing `/practice-area/*` URLs
- Per-item fields: document title, description, hero content, responsive PageSmith image set, live-site canonical, CTA headline/text/button label/button link, FAQ items, and MDX article body
- The former one-file-per-route Astro pages were removed after their body content and FAQ data were migrated into the collection.

## Baseline

- PageSmith MCP project/file/history/media/deploy/publish access works.
- PageSmith MCP full-project pull returned an internal server error twice.
- GitHub export and sync provide the durable source-edit path.
- Export commit: `4bff190` (`Export from Pagesmith: Logeman & Iafrate, P.C.`)
- Untouched Astro build: successful, 191 static pages.
- Untouched Astro check: 3 pre-existing type errors in `BlogLayout.astro` and `DocsLayout.astro`; the pilot files have no diagnostics.
- Baseline build warnings: PageSmith-hosted font URLs are runtime-only; empty content collection directories are referenced.

## Webflow field mapping

| Webflow field | PageSmith destination |
| --- | --- |
| `name` | visible hero H1 |
| `practice-area-excerpt` | hero introduction |
| `practice-area-featured-image` | hero image and Open Graph image |
| `practice-area-seo-title` | document title |
| `practice-area-seo-meta-description` | meta description |
| `practice-area-content` | main article content |
| `practice-area-faqs` | FAQ component |
| `content-findlaw` | expanded article section |

## Baseline defects on Car Accidents

- `ArticleHero` receives no title, producing a second logo and no H1.
- Hero eyebrow, introduction, featured image, and CTAs are omitted.
- Expanded source content is omitted.
- Generic statistics are inserted without a traced source in the inspected Webflow record/template.
- PageSmith retains the main article and FAQ content.

## Acceptance checks

- Exactly one H1 with the Webflow page title.
- Hero restores source eyebrow, introduction, featured image, and both CTAs.
- Main and expanded source content are present.
- Unverified statistics do not appear on this route.
- Canonicals remain on `https://www.logeman.com`, all PageSmith test pages emit `noindex, nofollow`, and `robots.txt` disallows crawling. `SITE.isStaging` must change only as part of an authorized production cutover.
- Astro build/check pass.
- Desktop and mobile PageSmith renders are reviewed against Webflow.
- PageSmith production test route is published and verified.

## Collection verification

- Astro build: successful, 191 static pages, including all 19 practice-area routes.
- Astro check: no new diagnostics; the same 3 pre-existing type errors remain in `BlogLayout.astro` and `DocsLayout.astro`.
- Every rendered practice-area page has exactly one H1, its production Webflow canonical, `noindex, nofollow`, an FAQ section, and a PageSmith CDN hero image.
- The shared dynamic route does not import the unverified `StatsBar` or `ArticleStats` components.

## Static-page hero restoration

- Restored the live Webflow hero content and presentation on 14 site-level pages, beginning with About Us.
- The shared `ArticleHero` now supports the three live-site hero families: split image, full-background image with the navy diagonal overlay, and solid navy editorial.
- Page-specific hero copy and images were mapped from the corresponding live Webflow pages; the existing body-section headings were demoted where necessary so every route retains exactly one H1.
- Desktop and mobile checks cover representative pages from all three hero families.
- Verification: Astro build succeeds for all 191 routes; all 14 restored routes have exactly one H1, their matching `https://www.logeman.com/.../` canonical, and `noindex, nofollow`.
- The same 3 pre-existing type errors remain in `BlogLayout.astro` and `DocsLayout.astro`; no new type-check diagnostics were introduced.

## Articles collection

- Collection entries: `src/content/articles/*.md`
- Shared route: `src/pages/articles/[slug].astro`
- Route coverage: all 47 existing `/articles/*` URLs; the overall build remains 191 static pages.
- Per-item fields: document title, description, hero content, responsive PageSmith hero image set, live-site canonical, card excerpt/image/order, FAQ items, preserved presentation variants, and article body.
- The shared route preserves each source page's statistics, form, testimonials, and map choices while standardizing the article hero on the approved About Us Lady Justice treatment.
- `src/pages/articles-posts.astro` now reads the Articles collection and maps all 47 entries. The 9 existing featured card images and excerpts retain their original priority; remaining entries use their collection fallback image and excerpt.
- The former 47 one-file-per-route Astro pages were removed after migration. `scripts/migrate-articles-to-collection.mjs` documents and reproduces the extraction and normalization logic from a clean pre-migration checkout.
- Verification: all 47 rendered articles have exactly one H1, the corresponding `https://www.logeman.com/articles/.../` canonical, `noindex, nofollow`, and an FAQ section; all 247 FAQ items are preserved. No article renders literal or encoded HTML as a code block.
- Astro build succeeds for all 191 routes. The same 3 pre-existing type errors remain in `BlogLayout.astro` and `DocsLayout.astro`; no new type-check errors were introduced.
