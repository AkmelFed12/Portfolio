# Ladji Moussa OUATTARA — portfolio

An independent bilingual portfolio rebuild using Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The public experience is available in English and French with locale-aware URLs:

- `/en`
- `/fr`
- `/en/projects` and `/fr/projects`
- `/en/about` and `/fr/about`
- `/en/contact` and `/fr/contact`

The root route redirects to `/en`. The language switcher preserves the equivalent route where it exists.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en`.

## Validate

```bash
npm run lint
npm run build
```

## Deployment

Import the repository into Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final public URL, for example `https://portfolio.example.com`, so canonical metadata and the sitemap use the deployment domain. No secrets are required by the rebuilt public experience. Existing optional integrations in legacy routes may require their own environment variables if those routes are reactivated.

## Content and quality documentation

- [`docs/content-audit.md`](docs/content-audit.md) records the verified facts and source limitations.
- [`docs/quality-report.md`](docs/quality-report.md) records validation results and checks that were unavailable.
