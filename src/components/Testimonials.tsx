export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      title: 'Project Manager',
      company: 'Tech Solutions Inc',
      testimonial: 'Ladji Moussa delivered an exceptional web platform for our event. His attention to detail and ability to understand our requirements was impressive.',
      image: '👤',
    },
    {
      name: 'Fatima Diallo',
      title: 'Organization Lead',
      company: 'ASAA Organization',
      testimonial: 'Working with Ladji on the ASAA portal was seamless. He transformed our vision into a fully functional platform that our members love.',
      image: '👤',
    },
    {
      name: 'Ibrahim Traore',
      title: 'Team Lead',
      company: 'Digital Innovations',
      testimonial: 'Ladji is a dedicated developer who brings creative solutions to technical challenges. Highly recommended for any project.',
      image: '👤',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform stagger-item-${index + 1}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.testimonial}"
              </p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
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
