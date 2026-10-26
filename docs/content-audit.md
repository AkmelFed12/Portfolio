# Content audit

## Verified information preserved

- Name: Ladji Moussa OUATTARA.
- Positioning: BS Computer Science student and full-stack learner.
- Education: University of the People, Bachelor of Science in Computer Science, expected 2028.
- Previous studies: International University of Grand-Bassam.
- Contact: `ouattaralm12@gmail.com`, `+225 05 747 242 33`, WhatsApp, and the LinkedIn profile linked in the source portfolio.
- Portfolio assets: profile image, CV PDF, and project preview assets in `public/images`.
- Projects and source links: LMO Quran Learning, LMO Digital Academy, LMO Services - Admission Canada & France, LMO SHOP SERVICES, and AfroPulse.
- Technologies displayed for projects are taken from `src/data/projects.ts`.
- External verification added where accessible: LMO Quran Learning describes Arabic, tajwid, recitation, memorisation and revision; LMO Digital Academy describes French mobile-first courses, exercises, Wave/Djamo payments, Premium access, dashboards and certificates.

## Source limitations

The deployed portfolio and reference URLs were not used as authoritative runtime dependencies. The rebuild uses repository content and checked-in assets so it can deploy independently. The accessible pages were inspected for factual project context; unavailable pages and unverified claims were intentionally excluded. No metrics, clients, certifications, or employment claims were added.

## Content decisions

- The new public architecture is `/en` and `/fr`, with equivalent paths for home, projects, project details, about, and contact.
- No fake contact form or success state was added. Email, WhatsApp, and LinkedIn links use the verified channels already present in the repository.
- Existing legacy routes remain in the repository for compatibility, but the root route now directs visitors to the rebuilt English experience.
- Legacy public routes redirect into the new localized experience so visitors do not land on the previous untranslated interface.
