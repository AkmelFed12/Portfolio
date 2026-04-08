export default function JourneyTimeline() {
  const timeline = [
    {
      year: '2026',
      title: 'BS Computer Science Student',
      description: 'Currently a BS Computer Science student and full-stack learner, improving through practical projects and continuous study.',
      achievements: ['ASAA Portal project in production', 'MyFinance LMO project developed', 'Barakatrack project developed'],
    },
    {
      year: '2025',
      title: 'Started Full Stack Development',
      description: 'Started focused full-stack learning journey with frontend and backend technologies through personal and academic projects.',
      achievements: ['React and Node.js practice projects', 'Next.js and TypeScript learning', 'Database fundamentals'],
    },
    {
      year: '2022',
      title: 'Started Computer Science Education',
      description: 'Began computer science studies at International University of Grand-Bassam before redirecting academic path.',
      achievements: ['Core programming', 'Web fundamentals', 'Problem solving'],
    },
    {
      year: '2021',
      title: 'Discovered Passion for Coding',
      description: 'First exploration into web development and programming. Found my passion in building digital solutions.',
      achievements: ['First projects', 'HTML/CSS', 'JavaScript basics'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">
          My Learning Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-800 to-blue-700" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } stagger-item-${(index % 4) + 1}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        {item.year}
                      </span>
                      {index === 0 && (
                        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-slate-200 mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-center gap-2 text-gray-700 dark:text-slate-200"
                        >
                          <span className="text-blue-600 dark:text-blue-400">✓</span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex md:flex-col items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-slate-900 to-blue-700 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
                </div>

                {/* Empty space on other side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



