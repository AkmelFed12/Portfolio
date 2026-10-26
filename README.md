# Ladji Moussa OUATTARA — Portfolio

Independent bilingual portfolio rebuild using Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Local development

Install dependencies with `npm install`, then run `npm run dev`. Open `http://localhost:3000/en` or `http://localhost:3000/fr`.

The root path redirects to `/en`. English and French pages use the same route structure, including project details. The language control keeps the equivalent page when it exists and falls back to that language's home page for unknown paths.

## Validation

- `npm run lint`
- `npm run build`

The quality report records HTTP smoke checks and work that still needs browser-based verification.

## Environment

No secret keys are needed for the public portfolio.

| Variable | Required for deployment | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public origin used to generate canonical links, Open Graph URLs, sitemap entries, and robots metadata. |

Set this variable to the new independent portfolio's public URL in Vercel before deploying. Do not point it at `https://lmoportfolio.vercel.app` unless that domain has been intentionally reassigned after review: the default fallback is the existing portfolio URL. Do not attach this rebuild to or replace the existing site's Vercel project.

For local development, leave the variable unset or use your local origin. `.env.example` contains a placeholder only; it is not a production value.

## Vercel deployment

1. Import this repository as a **new Vercel project**; keep the existing portfolio project untouched.
2. Use the default Next.js build settings. The build command is `npm run build`.
3. Set `NEXT_PUBLIC_SITE_URL` to the new project's production URL in its Production environment.
4. Deploy a Preview and check `/en`, `/fr`, localized project pages, `/sitemap.xml`, and `/robots.txt`.
5. Review the site and its canonical domain before assigning any custom domain. No production deployment or DNS change was made as part of this work.

## Content and QA

- `docs/content-audit.md` records repository content, live-source observations, and verification limits.
- `docs/quality-report.md` records checks performed, corrections, and remaining QA work.

The original live portfolio was inaccessible to the available web reader during the audit. Confirm the listed education, contact details, CV, and project descriptions against current source materials before public launch.
