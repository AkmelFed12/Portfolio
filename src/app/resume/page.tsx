import DownloadResumeButton from '@/components/DownloadResumeButton';
import PrintResumeButton from '@/components/PrintResumeButton';
import ResumeInternshipCTA from '@/components/ResumeInternshipCTA';

export default function Resume() {
  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100 animate-slide-down">
            Mon CV
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-200">
            Telechargez ou consultez mon CV complet ci-dessous
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-cyan-600 dark:text-cyan-400">Telecharger</h3>
            <p className="text-gray-700 dark:text-slate-200 mb-4">Obtenir mon CV au format PDF</p>
            <DownloadResumeButton />
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-cyan-600 dark:text-cyan-400">Consulter</h3>
            <p className="text-gray-700 dark:text-slate-200 mb-4">Lire mon CV sur cette page</p>
            <a
              href="#resume-content"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Voir le contenu
            </a>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-cyan-600 dark:text-cyan-400">Imprimer</h3>
            <p className="text-gray-700 dark:text-slate-200 mb-4">Imprimer cette page</p>
            <PrintResumeButton />
          </div>
        </div>
        <ResumeInternshipCTA />

        <div id="resume-content" className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-12 print:shadow-none print:p-0">
          {/* Header */}
          <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-6 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              LADJI MOUSSA OUATTARA
            </h1>
            <p className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
              Etudiant en informatique | Developpeur Full-Stack
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-slate-200">
              <div>
                <strong>Email:</strong> ouattaralm12@gmail.com
              </div>
              <div>
                <strong>Telephone :</strong> +225 01 500 700 83
              </div>
              <div>
                <strong>LinkedIn:</strong> linkedin.com/in/ladji-moussa-ouattara-8b5778298
              </div>
            </div>
          </div>

          {/* Resume professionnel */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Resume professionnel
            </h2>
            <p className="text-gray-700 dark:text-slate-200 leading-relaxed">
              Etudiant en informatique et developpeur full-stack avec une experience pratique dans la creation d applications web modernes. Passionne par les solutions utiles, je maitrise React, Next.js, TypeScript et Tailwind CSS, tout en continuant a progresser en backend et en bases de donnees.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Projets personnels - Developpeur Full-Stack</h3>
                <span className="text-gray-600 dark:text-slate-300">2025 - Aujourd hui</span>
              </div>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">Applications de commerce, networking et productivite</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-slate-200">
                <li>Conception et developpement d applications full-stack de bout en bout</li>
                <li>Mise en place d interfaces responsives, d authentification et de workflows metier</li>
                <li>Deploiement en production et amelioration continue de l ergonomie et des performances</li>
                <li>Technologies : Next.js, React, TypeScript, Tailwind CSS, Node.js, Supabase, Vercel</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Apprentissage et developpement</h3>
                <span className="text-gray-600 dark:text-slate-300">En cours</span>
              </div>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">Etudiant en informatique</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-slate-200">
                <li>Preparation d un Bachelor of Science in Computer Science a University of the People</li>
                <li>Creation de projets pour consolider mes apprentissages</li>
                <li>Exploration du backend, des bases de donnees et de la conception systeme</li>
              </ul>
            </div>
          </section>

          {/* Competences */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Competences techniques
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <ul className="text-sm text-gray-700 dark:text-slate-200 space-y-1">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• HTML/CSS/JavaScript</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Backend</h4>
                <ul className="text-sm text-gray-700 dark:text-slate-200 space-y-1">
                  <li>• Node.js & Express</li>
                  <li>• Firebase</li>
                  <li>• MongoDB</li>
                  <li>• PostgreSQL</li>
                  <li>• REST APIs</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Outils et plateformes</h4>
                <ul className="text-sm text-gray-700 dark:text-slate-200 space-y-1">
                  <li>• Git/GitHub</li>
                  <li>• Vercel</li>
                  <li>• VS Code</li>
                  <li>• npm/yarn</li>
                  <li>• GitHub Copilot</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Formation
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                <span className="text-gray-600 dark:text-slate-300">Prevu pour 2028</span>
              </div>
              <p className="text-cyan-600 dark:text-cyan-400">University of the People</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Etudes precedentes</h3>
              <p className="text-cyan-600 dark:text-cyan-400">International University of Grand-Bassam</p>
              <p className="text-gray-700 dark:text-slate-200 mt-2">
                Debut d etudes en informatique avant une nouvelle orientation vers University of the People.
              </p>
            </div>
          </section>

          {/* Projets */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Projets
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">LMO Shop Services</h3>
              <p className="text-gray-700 dark:text-slate-200 mb-2">Plateforme e-commerce full-stack avec administration et analytics</p>
              <p className="text-sm text-gray-600 dark:text-slate-300">
                <strong>Stack :</strong> JavaScript, Node.js, Serverless API, Vercel
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">AfroPulse</h3>
              <p className="text-gray-700 dark:text-slate-200 mb-2">Reseau professionnel pour les talents africains et la diaspora</p>
              <p className="text-sm text-gray-600 dark:text-slate-300">
                <strong>Stack :</strong> HTML, Tailwind CSS, JavaScript, Supabase, PWA
              </p>
            </div>
          </section>

          {/* Objectifs et centres d interet */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Objectifs et centres d interet
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-slate-200">
              <li>✓ Construire des applications full-stack evolutives</li>
              <li>✓ Developper mon expertise en conception systeme</li>
              <li>✓ Creer des plateformes utiles aux communautes</li>
              <li>✓ Devenir developpeur full-stack senior</li>
              <li>✓ Creer ma propre entreprise technologique</li>
              <li>✓ Contribuer positivement a la societe par la technologie</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
