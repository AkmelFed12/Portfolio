'use client';

import ResumeDownload from '@/components/ResumeDownload';
import JourneyTimeline from '@/components/JourneyTimeline';

export default function About() {
  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-down">
            About Ladji Moussa
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Learn more about my background and experience
          </p>
          <ResumeDownload />
        </div>
      </section>

      <JourneyTimeline />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose dark:prose-invert max-w-none animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Hello! I'm Ladji Moussa OUATTARA, a motivated junior developer with a strong passion for building practical and impactful digital solutions. I'm currently pursuing a Bachelor of Science in Computer Science at the University of the People, after beginning my studies at the International University of Grand-Bassam.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            As a beginner in full-stack development, I'm actively developing my skills by combining programming fundamentals with the power of artificial intelligence tools to enhance my coding efficiency and problem-solving approach. I'm particularly interested in creating platforms that serve real communities and meaningful causes.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            My long-term goal is to become a Computer Science Engineer, grow into a senior full-stack developer, and eventually build my own technology company. Driven by curiosity and continuous learning, I'm passionate about technology, innovation, and using my skills to contribute positively to society.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">ASAA Portal Project</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Full Stack Developer | 2024 - Present</p>
              <p className="text-gray-700 dark:text-gray-300">
                Built a comprehensive web platform for managing pre-selections, member spaces, and organization management for Islamic Quiz 2026. Handles real user needs and demonstrates ability to turn ideas into functional systems.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Learning & Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Computer Science Student | Ongoing</p>
              <p className="text-gray-700 dark:text-gray-300">
                Pursuing BS in Computer Science at University of the People. Actively developing full-stack skills through practical projects and leveraging AI tools to enhance coding efficiency.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Education</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-4">
            <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">University of the People | Expected Graduation</p>
            <p className="text-gray-700 dark:text-gray-300">
              Building strong foundations in computer science principles and practical applications.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Previous Studies</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">International University of Grand-Bassam</p>
            <p className="text-gray-700 dark:text-gray-300">
              Started computer science studies before transferring to University of the People.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">What I Love</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
            <li>💡 Creating practical and impactful digital solutions</li>
            <li>🚀 Building web platforms that serve real communities</li>
            <li>📚 Continuous learning using modern technologies and AI tools</li>
            <li>🤝 Collaborating on meaningful projects with purpose</li>
            <li>🎯 Turning ideas into functional, user-focused systems</li>
            <li>🌍 Contributing positively to society through technology</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
