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
