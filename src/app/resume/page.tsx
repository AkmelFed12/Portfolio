import DownloadResumeButton from '@/components/DownloadResumeButton';
import PrintResumeButton from '@/components/PrintResumeButton';
import ResumeInternshipCTA from '@/components/ResumeInternshipCTA';

export default function Resume() {
  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-gray-900 dark:to-black flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent animate-slide-down">
            My Resume
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Download or view my complete resume below
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Download</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Get my resume as a PDF</p>
            <DownloadResumeButton />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">View</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Read my resume here</p>
            <a
              href="#resume-content"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Scroll Down
            </a>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Print</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Print this page</p>
            <PrintResumeButton />
          </div>
        </div>
        <ResumeInternshipCTA />

        <div id="resume-content" className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-12 print:shadow-none print:p-0">
          {/* Header */}
          <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-6 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              LADJI MOUSSA OUATTARA
            </h1>
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              BS Computer Science Student | Full-Stack Learner
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong>Email:</strong> ouattaralm12@gmail.com
              </div>
              <div>
                <strong>GitHub:</strong> github.com/AkmelFed12
              </div>
              <div>
                <strong>Phone:</strong> +225 01 500 700 83
              </div>
              <div>
                <strong>LinkedIn:</strong> linkedin.com/in/ladji-moussa-ouattara-8b5778298
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              BS Computer Science student and full-stack learner with hands-on experience building production-grade web applications using modern technologies. Passionate about creating practical solutions for real-world problems. Strong proficiency in React, Next.js, TypeScript, and Tailwind CSS. In 2026, still actively learning backend development and databases while leveraging AI tools to enhance productivity and code quality.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">ASAA Portal Project - Student Developer</h3>
                <span className="text-gray-600 dark:text-gray-400">2025 - Present</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">Islamic Quiz 2026 Management Platform</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Designed and built a comprehensive membership and event management platform from scratch</li>
                <li>Implemented user authentication, pre-selection management, and member portal features</li>
                <li>Deployed to production on Vercel with 99.9% uptime</li>
                <li>Technologies: Next.js, React, TypeScript, Tailwind CSS, Firebase, Vercel</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Learning & Development</h3>
                <span className="text-gray-600 dark:text-gray-400">Ongoing</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">Computer Science Student</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Pursuing Bachelor of Science in Computer Science at University of the People</li>
                <li>Building multiple portfolio projects to solidify learning</li>
                <li>Exploring backend development, databases, and system design</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• HTML/CSS/JavaScript</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Backend</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Node.js & Express</li>
                  <li>• Firebase</li>
                  <li>• MongoDB</li>
                  <li>• PostgreSQL</li>
                  <li>• REST APIs</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tools & Platforms</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Git/GitHub</li>
                  <li>• Vercel</li>
                  <li>• VS Code</li>
                  <li>• npm/yarn</li>
                  <li>• GitHub Copilot</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Education
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                <span className="text-gray-600 dark:text-gray-400">Expected 2028</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400">University of the People</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Previous Studies</h3>
              <p className="text-blue-600 dark:text-blue-400">International University of Grand-Bassam</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Started computer science studies before stopping and applying to University of the People.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Projects
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">ASAA Portal - Islamic Quiz 2026</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Comprehensive membership and event management platform</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Stack:</strong> Next.js, React, TypeScript, Tailwind CSS, Firebase
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">MyFinance LMO</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Personal finance tracking and management application</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Stack:</strong> React, TypeScript, Tailwind CSS, Firebase
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Barakatrack by LMO</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Tracking and workflow management system</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Stack:</strong> Next.js, Node.js, MongoDB, TypeScript
              </p>
            </div>
          </section>

          {/* Interests & Goals */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Goals & Interests
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
              <li>✓ Build scalable full-stack applications</li>
              <li>✓ Develop expertise in system design</li>
              <li>✓ Create platforms serving real communities</li>
              <li>✓ Become a senior full-stack developer</li>
              <li>✓ Build my own technology company</li>
              <li>✓ Contribute positively to society through tech</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

