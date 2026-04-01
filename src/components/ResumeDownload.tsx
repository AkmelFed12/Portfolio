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
    } catch (err) {
      console.log('PDF not available, falling back to text format');
    }

    // Fallback: Create a text resume
    const resumeContent = `LADJI MOUSSA OUATTARA
Beginner Full Stack Developer

CONTACT INFORMATION
Emails: ouattaralm12@gmail.com, ouattaral2@student.iugb.edu.ci
Phone: +225 01 500 700 83 / +225 05 747 242 33 / +225 07 055 830 82
Location: Côte d'Ivoire, Abidjan, Treichville, Avenue 4 Rue 13

PROFESSIONAL SUMMARY
Motivated junior developer with a strong passion for building practical and impactful digital solutions. 
Combining programming fundamentals with artificial intelligence tools to enhance coding efficiency and problem-solving approach. 
Particularly interested in creating platforms that serve real communities and meaningful causes.

EXPERIENCE
ASAA Portal Project - Full Stack Developer (2024 - Present)
- Built a comprehensive web platform for managing pre-selections for the Islamic Quiz 2026
- Managed dedicated member space and organization management
- Implemented a complete membership and event management system

EDUCATION
Bachelor of Science in Computer Science
University of the People (Ongoing)

Previous Studies
International University of Grand-Bassam

TECHNICAL SKILLS
Frontend Development: React, Next.js, TypeScript, Tailwind CSS, HTML, CSS, JavaScript
Backend Development: Node.js, Express.js, PostgreSQL, MongoDB, REST APIs, Firebase
Tools & Technologies: Git/GitHub, Docker, VS Code, Vercel, npm/yarn, AI Tools

KEY ACHIEVEMENTS
- Successfully delivered ASAA Portal project demonstrating ability to turn ideas into functional systems
- Strong proficiency in modern web technologies and frameworks
- Experience with full-stack development and responsive design
- Commitment to continuous learning and innovation

GOALS
- Become a Computer Science Engineer
- Grow into a senior full-stack developer
- Build my own technology company
- Contribute positively to society through technology

INTERESTS
Creating digital solutions for real communities
Technology and innovation
Web development and user experience
Artificial intelligence and automation`;

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
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
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
      Download Resume
    </button>
  );
}
