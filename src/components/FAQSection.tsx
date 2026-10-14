type FAQSectionProps = {
  lang?: 'en' | 'fr';
};

export default function FAQSection({ lang = 'fr' }: FAQSectionProps) {
  const content =
    lang === 'fr'
      ? {
          title: 'FAQ',
          items: [
            {
              q: 'Es-tu disponible pour un stage en 2026 ?',
              a: 'Oui. Je suis disponible pour des stages ou collaborations orientes produit et apprentissage concret.',
            },
            {
              q: 'Quel est ton stack principal ?',
              a: 'Next.js, React, TypeScript, Tailwind CSS, Node.js, Firebase et PostgreSQL selon le contexte.',
            },
            {
              q: 'Comment preferes-tu collaborer ?',
              a: 'Avec objectifs clairs, communication reguliere, et iteration rapide basee sur feedback.',
            },
            {
              q: 'Ou peut-on te contacter rapidement ?',
              a: 'WhatsApp est le canal le plus rapide: +225 05 747 242 33.',
            },
          ],
        }
      : {
          title: 'FAQ',
          items: [],
        };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">{content.title}</h2>
      <div className="space-y-4">
        {content.items.map((item) => (
          <details
            key={item.q}
            className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5"
          >
            <summary className="font-semibold cursor-pointer text-gray-900 dark:text-white">
              {item.q}
            </summary>
            <p className="mt-3 text-gray-700 dark:text-slate-200">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
