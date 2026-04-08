import type { Testimonial } from '@/data/testimonials';

interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {

  return (
    <section className="bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform stagger-item-${index + 1}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👤</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-slate-300">
                    {testimonial.title}
                    {testimonial.company ? ` at ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-slate-200 italic">
                "{testimonial.testimonial}"
              </p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


