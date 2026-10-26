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

The workspace is linked to the existing `portfolio` Vercel project, which owns `lmoportfolio.vercel.app`. After explicit authorization to use the separate `portfolio_repo` project, the current workspace was uploaded there with a preview target. Deployment ID: `dpl_CBW6jwe4ukAYVvxifYJ8Jw6SbDpc`; preview URL: `https://portfoliorepo-iirwgc03t-ladji-moussa-ouattaras-projects.vercel.app`. Vercel reports the deployment state as `BLOCKED` (team configuration troubleshooting link), and authenticated requests returned a “Deployment is building” page, not the portfolio app. The Vercel CLI's initial response said “ready,” so the API status and hosted response were used as the final verification. No project settings, domain alias, or DNS record was changed. The preview is not verified as serving this workspace.

## Deployment requirement

Set `NEXT_PUBLIC_SITE_URL` to the independent preview origin in the `portfolio_repo` project's Preview environment before a subsequent deployment. The fallback in source content is the existing portfolio URL, so an unset value would generate canonicals/sitemap links for the old site. Resolve the Vercel `BLOCKED` team configuration status and redeploy the preview before treating it as reviewable. Do not promote it to production without an explicit production deployment request.
