# Quality report

## Checks completed in this rebuild

- `npm run lint` — passed after the final application changes.
- `npm run build` — passed with Next.js 16.2.2; type checking passed and Next generated the localized route output.
- Production HTTP smoke checks on an isolated local port — passed for `/`, `/en`, `/fr`, `/en/projects`, `/fr/projects`, `/en/projects/asaa-officiel`, `/fr/projects/asaa-officiel`, `/fr/not-a-route`, `/en/not-a-route`, `/sitemap.xml`, and `/robots.txt`. Valid routes returned 200; unknown routes returned 404. Additional route checks covered `/en/projects/lmo-quran-learning`, `/fr/about`, and `/en/contact`.
- Locale and metadata checks — checked French and English document `lang` values and localized page titles. Checked the French ASAA canonical URL and reciprocal `hreflang` links. Checked sitemap `hreflang` entries.
- Unknown route — `/fr/not-a-route` returned 404 with French document language. An earlier check revealed the global 404 still used English; that fallback was localized, rebuilt, and checked.
- Project link targets were compared with the checked-in URLs; external availability was not comprehensively checked. The ASAA public page and Quran Learning landing page were available for content inspection.

## Issues found and corrected

- The broad proxy matcher compiled into a pattern that skipped locale paths. It now explicitly matches locale and legacy routes; HTTP checks confirm `/fr` pages are server-rendered with `lang="fr"`.
- The global unknown-route fallback displayed English content on French URLs. It now reads the locale from the proxy request header and uses the localized dictionary.
- The project-level not-found page assumed route params were supplied. It now reads the locale from the request header.
- The ASAA project reference was missing from the portfolio. Added it using only sections visible on the accessible public page; no screenshot, repository, or technology claims were added.
- Project preview placeholders now use the current locale.
- Vercel dashboard URLs had been presented as repository links for three projects. Those false repository links were removed.
- Canonical and Open Graph origin helpers now read `NEXT_PUBLIC_SITE_URL` so an independent deployment can use its own domain. Sitemap URLs also include language alternates.

## Not measured or unavailable

- No visual browser automation was available for responsive checks at 320, 375, 390, 430, 768, 1024, 1280, and 1440 pixels; mobile menu, focus flow, reduced-motion behavior, and visual contrast therefore remain unverified in a rendered browser.
- The package has no unit-test script or browser-test dependency configured; those suites were not run.
- No Lighthouse run or performance score was collected.
- No automated accessibility scanner or external-link availability sweep was run. The web reader could not access the original portfolio or LMO Academy, and some reference pages exposed only static/loading content.
- Contact actions are email, phone/WhatsApp, and LinkedIn links; no contact form or delivery backend is present.
- `npm audit` was not rerun during this review.

## Vercel preview status

The workspace's GitHub push triggered a preview deployment in the intended `portfolio` Vercel project. The user-authorized production promotion completed as deployment `dpl_2xZMYHmfQW3LWMvSYHSW7rHyyEDj` from commit `153dc34a644980cc94820efaf349c6b7a4a72bb7`; Vercel reports `READY` and assigns `lmoportfolio.vercel.app` to it. On the public domain, `/` redirects to `/en`; `/en`, `/fr`, `/en/projects`, `/fr/projects/asaa-officiel`, `/sitemap.xml`, and `/robots.txt` returned 200. The French page renders with `lang="fr"`, portfolio content, and canonical and English alternate URLs pointing to `lmoportfolio.vercel.app`. No DNS or domain configuration was changed. The first upload to `portfolio_repo` was a separate project and was not used for this release.

## Deployment requirement

Production now serves the bilingual rebuild at `https://lmoportfolio.vercel.app`. The previous production deployment was superseded by the user-authorized promotion above.
