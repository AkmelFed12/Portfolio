import type { Locale } from '@/content/portfolio';
import type { Testimonial } from '@/data/testimonials';
import { dictionary } from '@/content/dictionary';

const englishVersions: Record<number, { title: string; text: string }> = {
  1: {
    title: 'Project Manager',
    text: 'Ladji Moussa delivered an excellent web platform for our event. His attention to detail and understanding of our needs were remarkable.',
  },
  2: {
    title: 'Team Lead',
    text: 'Ladji is a committed developer who brings creative solutions to technical challenges. I recommend him for any project.',
  },
};

export default function Testimonials({ items, locale }: { items: Testimonial[]; locale: Locale }) {
  const copy = dictionary[locale].testimonials;

  return (
    <section className="section section-tinted testimonials-section" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 id="testimonials-title">{copy.title}</h2>
          </div>
          <p className="testimonials-subtitle">{copy.subtitle}</p>
        </div>
        <div className="testimonials-grid">
          {items.map((item) => {
            const translated = englishVersions[item.id];
            const title = locale === 'en' && translated ? translated.title : item.title;
            const quote = locale === 'en' && translated ? translated.text : item.testimonial;

            return (
              <figure className="testimonial-card" key={item.id}>
                <span className="testimonial-quote-mark" aria-hidden="true">“</span>
                <blockquote>{quote}</blockquote>
                <figcaption>
                  <span className="testimonial-avatar" aria-hidden="true">{item.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2)}</span>
                  <span className="testimonial-attribution">
                    <strong>{item.name}</strong>
                    <span>{title}{item.company ? ` · ${item.company}` : ''}</span>
                  </span>
                  <span className="testimonial-rating" aria-hidden="true">{'★'.repeat(Math.max(0, Math.min(5, item.rating)))}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
