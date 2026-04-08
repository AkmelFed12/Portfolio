export default function SkillsGallery() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 70 },
        { name: 'Next.js', level: 70 },
        { name: 'TypeScript', level: 65 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'Express.js', level: 55 },
        { name: 'PostgreSQL', level: 50 },
        { name: 'MongoDB', level: 60 },
        { name: 'REST APIs', level: 65 },
        { name: 'Firebase', level: 70 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
          Skills & Proficiency
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`stagger-item-${categoryIndex + 1}`}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-700 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


