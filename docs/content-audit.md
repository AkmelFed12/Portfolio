# Content audit

## Sources and verification scope

- Primary portfolio: <https://lmoportfolio.vercel.app>. It was not accessible through the available web reader during this review. The audit therefore uses checked-in portfolio content and assets as the available record; it does not claim that those items were independently reverified against the live portfolio.
- ASAA reference: <https://asaaofficiel.vercel.app>. The accessible page identifies the Association des Serviteurs d’Allah Azawajal and shows information and announcement areas, Islamic Quiz 2026 registration and waiting-list sections, public documents, events, and donation information. Dynamic data showed loading/placeholder content, so no changing counts, current registration status, or operation claims are included.
- LMO Academy reference: <https://lmo-academy.vercel.app>. It was not accessible through the available web reader. Its checked-in project record and preview assets are retained, but live features were not independently confirmed in this review.
- LMO Quran Learning reference: <https://lmo-quran-learning.vercel.app>. The accessible page describes Arabic learning, Quran reading with tajwid, recitation, memorisation, revision, and responsible learning guidance. Its authenticated learning area showed a loading state, so no account functionality was inferred from that page.

## Repository claims retained

These details are present in the existing checked-in portfolio content. They should be confirmed against the primary website/CV before publication if they have changed:

- Name and professional identity: Ladji Moussa OUATTARA; computer science student and full-stack learner.
- Education: University of the People, Bachelor of Science in Computer Science, expected 2028; previous computer science studies at International University of Grand-Bassam. No completed-degree claim is made.
- Contact channels displayed by the rebuild: `ouattaralm12@gmail.com`, `+225 05 747 242 33` (phone/WhatsApp), and [the LinkedIn profile](https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298). These values come from checked-in portfolio content and need confirmation before launch.
- Skill labels on project entries are copied from `src/data/projects.ts` and describe project stacks, not proficiency ratings.
- CV download and project preview files are drawn from the checked-in `public` directory.

## Project inventory

| Project | Public link | Content shown | Evidence / limits |
|---|---|---|---|
| ASAA Officiel | https://asaaofficiel.vercel.app | Official association website; visible quiz, announcements, events, documents, waiting-list and donation sections | Live page inspected; dynamic content is not asserted; no technology stack or repository link claimed |
| LMO Quran Learning | https://lmo-quran-learning.vercel.app | Arabic and Quran learning, tajwid, recitation and revision | Public page inspected; the authenticated area was loading; stack and preview from checked-in project record |
| LMO Digital Academy | https://lmo-academy.vercel.app | French-language digital-skills learning project | Public page inaccessible in this review; description and stack retained from checked-in project record |
| LMO Services - Admission Canada & France | https://lmoservices-canada.vercel.app | Admissions service website | Description and stack retained from checked-in project record; live project not independently inspected here |
| LMO SHOP SERVICES | https://new-pro-ecommerce-demo.vercel.app | E-commerce project | Description and stack retained from checked-in project record; only the actual GitHub repository is linked |
| AfroPulse | https://afro-pulse.netlify.app | Professional network for African talent and the diaspora | Description and stack retained from checked-in project record; only the actual GitHub repository is linked |

Repository URLs shown only where the checked-in data contains a GitHub repository: LMO SHOP SERVICES and AfroPulse. Vercel dashboard URLs previously stored in the project data were removed from the repository-link field because they are not GitHub repositories.

## Assets

- Portrait: `public/images/ladji-moussa-profile.jpeg`
- Project previews: checked-in desktop/mobile images for LMO Quran Learning, LMO Digital Academy, LMO Services, LMO SHOP SERVICES, and AfroPulse.
- ASAA has no checked-in screenshot; its project page uses the localized graceful preview fallback.
- CV PDF: `public/CV_LADJI_MOUSSA_OUATTARA.pdf` (confirm current accuracy before publishing).

## Missing or requiring confirmation

- Access to the original portfolio page and its complete content inventory.
- Current education status and expected completion date, previous-study wording, and CV accuracy.
- Current preferred public contact number and email.
- Current status/features and real screenshots for Academy, Services, SHOP SERVICES, and AfroPulse.
- Whether any additional public repository URLs exist for Quran Learning, Academy, or Services.
- Whether ASAA project work should be described with a specific role, technologies, or a supplied screenshot; none are claimed here.
- No certifications, employment history, client relationships, testimonials, metrics, or proficiency ratings were added.
