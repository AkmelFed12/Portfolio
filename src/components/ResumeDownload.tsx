'use client';

export default function ResumeDownload() {
  const handleDownload = async () => {
    // Try to download actual PDF first
    try {
      const response = await fetch('/CV_LADJI_MOUSSA_OUATTARA.pdf');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV_LADJI_MOUSSA_OUATTARA.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        return;
      }
    } catch {
      console.log('PDF not available, falling back to text format');
    }

    // Fallback: Create a text resume
    const resumeContent = `LADJI MOUSSA OUATTARA
Developpeur Full-Stack Junior

COORDONNEES
Emails : ouattaralm12@gmail.com, ouattaral2@student.iugb.edu.ci
Telephone : +225 01 500 700 83 / +225 05 747 242 33 / +225 07 055 830 82
Localisation : Cote d'Ivoire, Abidjan, Treichville, Avenue 4 Rue 13

PROFIL PROFESSIONNEL
Developpeur junior motive, passionne par la creation de solutions numeriques pratiques et utiles.
J associe les fondamentaux de la programmation aux outils d intelligence artificielle pour progresser plus efficacement.
Je m interesse particulierement aux plateformes au service de communautes et de projets porteurs de sens.

EXPERIENCE
Developpeur Full-Stack - Projets personnels (2025 - Aujourd hui)
- Conception et evolution d applications web pour le commerce, le networking et la productivite
- Creation d interfaces responsives connectees a des services backend et des workflows de donnees
- Amelioration des projets grace aux tests, au deploiement et au raffinement continu

FORMATION
Bachelor of Science en informatique
University of the People (en cours)

Etudes precedentes
International University of Grand-Bassam

COMPETENCES TECHNIQUES
Developpement Frontend : React, Next.js, TypeScript, Tailwind CSS, HTML, CSS, JavaScript
Developpement Backend : Node.js, Express.js, PostgreSQL, MongoDB, API REST, Firebase
Outils et technologies : Git/GitHub, Docker, VS Code, Vercel, npm/yarn, outils d IA

REALISATIONS CLES
- Livraison de plusieurs projets, de l idee au deploiement
- Bonne maitrise des technologies et frameworks web modernes
- Experience en developpement full-stack et design responsive
- Engagement dans l apprentissage continu et l innovation

OBJECTIFS
- Devenir ingenieur en informatique
- Evoluer vers un profil de developpeur full-stack senior
- Creer ma propre entreprise technologique
- Contribuer positivement a la societe par la technologie

CENTRES D INTERET
Creation de solutions numeriques pour les communautes
Technologie et innovation
Developpement web et experience utilisateur
Intelligence artificielle et automatisation`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ladji_Moussa_OUATTARA_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Telecharger le CV
    </button>
  );
}
