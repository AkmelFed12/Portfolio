export default function JourneyTimeline() {
  const timeline = [
    {
      year: '2024',
      title: 'Full Stack Developer',
      description: 'Building the ASAA Portal and developing multiple projects with modern web technologies.',
      achievements: ['ASAA Portal launched', 'MyFinance LMO created', 'Barakatrack developed'],
    },
    {
      year: '2023',
      title: 'Learning Full Stack Development',
      description: 'Started serious journey into full-stack web development with React and Node.js.',
      achievements: ['Learned Next.js', 'Mastered TypeScript', 'Database design'],
    },
    {
      year: '2022',
      title: 'Started Computer Science Education',
      description: 'Began studies at International University of Grand-Bassam, focusing on computer science fundamentals.',
      achievements: ['Core programming', 'Web basics', 'Problem solving'],
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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600" />

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
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      {index === 0 && (
                        <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                          🎯 Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
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
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
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
