'use client';

import { FormEvent, useState } from 'react';
import ResumeDownload from '@/components/ResumeDownload';
import AvailabilityQuickSlots from '@/components/AvailabilityQuickSlots';
import { trackEvent } from '@/lib/analytics';

type Lang = 'en' | 'fr';

const SERVICE_OPTIONS = [
  { value: 'web_app', en: 'Web Application', fr: 'Application Web' },
  { value: 'portfolio', en: 'Portfolio Website', fr: 'Site Portfolio' },
  { value: 'landing', en: 'Landing Page', fr: "Page d'atterrissage" },
  { value: 'bug_fix', en: 'Bug Fix / Optimization', fr: 'Correction Bug / Optimisation' },
];

const STAGE_OPTIONS = [
  { value: 'idea', en: 'New project idea', fr: 'Nouvelle idee de projet' },
  { value: 'design_ready', en: 'Design ready', fr: 'Design deja pret' },
  { value: 'in_progress', en: 'Development in progress', fr: 'Developpement en cours' },
  { value: 'maintenance', en: 'Need maintenance/support', fr: 'Besoin de maintenance/support' },
];

const BUDGET_OPTIONS = [
  { value: 'discuss', en: 'To be discussed', fr: 'A discuter' },
  { value: 'under_200', en: 'Under $200', fr: 'Moins de 200$' },
  { value: '200_500', en: '$200 - $500', fr: '200$ - 500$' },
  { value: '500_1000', en: '$500 - $1000', fr: '500$ - 1000$' },
  { value: 'above_1000', en: 'Above $1000', fr: 'Plus de 1000$' },
];

const TIMELINE_OPTIONS = [
  { value: '2_4_weeks', en: '2-4 weeks', fr: '2-4 semaines' },
  { value: '1_week', en: '1 week (urgent)', fr: '1 semaine (urgent)' },
  { value: '1_2_months', en: '1-2 months', fr: '1-2 mois' },
  { value: 'flexible', en: 'Flexible timeline', fr: 'Delai flexible' },
];

const CONTACT_PREF_OPTIONS = [
  { value: 'whatsapp', en: 'WhatsApp', fr: 'WhatsApp' },
  { value: 'email', en: 'Email', fr: 'Email' },
  { value: 'phone', en: 'Phone Call', fr: 'Appel telephonique' },
];

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  return new URLSearchParams(window.location.search).get('lang') === 'fr' ? 'fr' : 'en';
}

function optionLabel(
  list: Array<{ value: string; en: string; fr: string }>,
  value: string,
  lang: Lang
) {
  return list.find((item) => item.value === value)?.[lang] || value;
}

export default function Contact() {
  const [lang] = useState<Lang>(() => detectLang());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web_app',
    stage: 'idea',
    budget: 'discuss',
    timeline: '2_4_weeks',
    contactPreference: 'whatsapp',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const t =
    lang === 'fr'
      ? {
          heroTitle: 'Contactez-Moi',
          heroSub: "Vous avez un projet ? Discutons-en ensemble.",
          heroNote: 'Canal prefere: WhatsApp. Reponse habituelle en moins de 24h.',
          socialProof1: 'Temps de reponse',
          socialProof1v: 'Moins de 24h',
          socialProof1d: 'Premiere reponse habituelle sur WhatsApp.',
          socialProof2: 'Style de livraison',
          socialProof2v: 'Jalons clairs',
          socialProof2d: 'Checkpoints courts et avancement transparent.',
          socialProof3: 'Collaboration',
          socialProof3v: 'Perimetre flexible',
          socialProof3d: 'Stage, freelance et projets etudiants acceptes.',
          processTitle: 'Comment On Travaille (3 Etapes)',
          p1t: '1. Brief',
          p1d: 'Vous envoyez votre besoin, delai et budget via ce formulaire.',
          p2t: '2. Alignement',
          p2d: 'On valide le perimetre, les priorites et le canal de communication.',
          p3t: '3. Execution',
          p3d: 'Lancement avec jalons clairs et mises a jour pratiques.',
          infoTitle: 'Informations de Contact',
          emails: 'Emails',
          phones: 'Numeros de Telephone',
          location: 'Localisation',
          social: 'Liens Sociaux',
          briefTitle: 'Demarrer Votre Brief Projet',
          briefDesc: 'Remplissez ce formulaire et vous serez redirige vers WhatsApp avec un brief pre-rempli.',
          briefFallback: "Si WhatsApp ne s'ouvre pas, utilisez le bouton email en dessous.",
          success: 'Redirection vers WhatsApp reussie. Merci pour votre message.',
          name: 'Votre Nom',
          email: 'Votre Email (optionnel)',
          service: 'Service Souhaite',
          stage: 'Etat du Projet',
          budget: 'Budget Estime',
          timeline: 'Delai Souhaite',
          contactPref: 'Canal de Contact Prefere',
          message: 'Details du Projet',
          messagePh: 'Objectifs, pages/fonctionnalites, references et contraintes...',
          submit: 'Envoyer sur WhatsApp',
          fallback: 'Alternative: Envoyer par Email',
          faqTitle: 'FAQ Rapide',
          faq1q: 'Travaillez-vous sur de petits projets ?',
          faq1a: 'Oui. Les projets etudiants, startups et communautaires sont bienvenus.',
          faq2q: 'Peut-on commencer directement sur WhatsApp ?',
          faq2a: 'Absolument. WhatsApp est le moyen le plus rapide pour demarrer.',
          faq3q: 'Donnez-vous des mises a jour pendant le travail ?',
          faq3a: 'Oui, avec des jalons reguliers et une communication transparente.',
          mailSub: 'Demande depuis portfolio',
        }
      : {
          heroTitle: 'Get In Touch',
          heroSub: "Have a project in mind? Let's discuss it.",
          heroNote: 'Preferred channel: WhatsApp. Typical reply within 24h.',
          socialProof1: 'Response Time',
          socialProof1v: 'Under 24h',
          socialProof1d: 'Typical first reply on WhatsApp.',
          socialProof2: 'Delivery Style',
          socialProof2v: 'Clear Milestones',
          socialProof2d: 'Short checkpoints and transparent progress.',
          socialProof3: 'Collaboration',
          socialProof3v: 'Flexible Scope',
          socialProof3d: 'Internship, freelance, and student-friendly projects.',
          processTitle: 'How We Work (3 Steps)',
          p1t: '1. Brief',
          p1d: 'You send your idea, timeline, and budget through this form.',
          p2t: '2. Alignment',
          p2d: 'We confirm scope, priorities, and communication channel.',
          p3t: '3. Execution',
          p3d: 'Work starts with clear milestones and practical updates.',
          infoTitle: 'Contact Information',
          emails: 'Emails',
          phones: 'Phone Numbers',
          location: 'Location',
          social: 'Social Links',
          briefTitle: 'Start Your Project Brief',
          briefDesc: 'Fill this form and you will be redirected to WhatsApp with a complete, prefilled project brief.',
          briefFallback: 'If WhatsApp does not open, use the fallback email button below.',
          success: 'Redirected to WhatsApp successfully. Thank you for your message.',
          name: 'Your Name',
          email: 'Your Email (optional)',
          service: 'Service Needed',
          stage: 'Project Stage',
          budget: 'Estimated Budget',
          timeline: 'Preferred Timeline',
          contactPref: 'Preferred Contact Method',
          message: 'Project Details',
          messagePh: 'Goals, pages/features, references, and constraints...',
          submit: 'Send on WhatsApp',
          fallback: 'Fallback: Send by Email',
          faqTitle: 'Quick FAQ',
          faq1q: 'Do you work with small projects?',
          faq1a: 'Yes. Student, startup, and community projects are welcome.',
          faq2q: 'Can we start on WhatsApp first?',
          faq2a: 'Absolutely. WhatsApp is the fastest way to begin.',
          faq3q: 'Do you provide updates during work?',
          faq3a: 'Yes, with regular milestones and transparent communication.',
          mailSub: 'Portfolio Contact Request',
        };

  const openEmailFallback = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent(t.mailSub);
    const body = encodeURIComponent(
      `Hello Ladji,\n\nName: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message || 'No message'}`
    );
    window.location.href = `mailto:ouattaralm12@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValue = formData.email.trim() ? formData.email : 'Not provided';
    const serviceLabel = optionLabel(SERVICE_OPTIONS, formData.service, lang);
    const stageLabel = optionLabel(STAGE_OPTIONS, formData.stage, lang);
    const budgetLabel = optionLabel(BUDGET_OPTIONS, formData.budget, lang);
    const timelineLabel = optionLabel(TIMELINE_OPTIONS, formData.timeline, lang);
    const contactPrefLabel = optionLabel(CONTACT_PREF_OPTIONS, formData.contactPreference, lang);

    const whatsappMessage = [
      'Hello, I am contacting you from your portfolio.',
      '',
      `Name: ${formData.name}`,
      `Email: ${emailValue}`,
      `Service Needed: ${serviceLabel}`,
      `Project Stage: ${stageLabel}`,
      `Estimated Budget: ${budgetLabel}`,
      `Preferred Timeline: ${timelineLabel}`,
      `Preferred Contact Method: ${contactPrefLabel}`,
      '',
      `Project Details: ${formData.message}`,
    ].join('\n');

    trackEvent('contact_form_submit_whatsapp', {
      source: 'contact_page',
      lang,
      has_email: Boolean(formData.email),
      service: formData.service,
      stage: formData.stage,
      budget: formData.budget,
      timeline: formData.timeline,
      contact_preference: formData.contactPreference,
    });

    const popup = window.open(
      `https://wa.me/2250574724233?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
    if (!popup) openEmailFallback(formData.name, emailValue, formData.message);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: '',
      email: '',
      service: 'web_app',
      stage: 'idea',
      budget: 'discuss',
      timeline: '2_4_weeks',
      contactPreference: 'whatsapp',
      message: '',
    });
  };

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100 animate-slide-down">{t.heroTitle}</h1>
          <p className="text-xl text-gray-700 dark:text-slate-200 mb-8">{t.heroSub}</p>
          <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-8 font-semibold">{t.heroNote}</p>
          <ResumeDownload />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AvailabilityQuickSlots lang={lang} />

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <div className="surface-card-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300 mb-1">{t.socialProof1}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{t.socialProof1v}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t.socialProof1d}</p>
          </div>
          <div className="surface-card-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300 mb-1">{t.socialProof2}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{t.socialProof2v}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t.socialProof2d}</p>
          </div>
          <div className="surface-card-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300 mb-1">{t.socialProof3}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{t.socialProof3v}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t.socialProof3d}</p>
          </div>
        </div>

        <div className="surface-card p-5 sm:p-6 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t.processTitle}</h2>
          <ol className="grid gap-3 sm:grid-cols-3">
            <li className="surface-card-soft p-4 text-sm text-slate-700 dark:text-slate-200">
              <span className="block text-cyan-700 dark:text-cyan-300 font-semibold mb-1">{t.p1t}</span>
              {t.p1d}
            </li>
            <li className="surface-card-soft p-4 text-sm text-slate-700 dark:text-slate-200">
              <span className="block text-cyan-700 dark:text-cyan-300 font-semibold mb-1">{t.p2t}</span>
              {t.p2d}
            </li>
            <li className="surface-card-soft p-4 text-sm text-slate-700 dark:text-slate-200">
              <span className="block text-cyan-700 dark:text-cyan-300 font-semibold mb-1">{t.p3t}</span>
              {t.p3d}
            </li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-left">
            <h2 className="text-3xl font-bold mb-8">{t.infoTitle}</h2>
            <div className="space-y-6">
              <div className="stagger-item-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{t.emails}</h3>
                <div className="space-y-1">
                  <a href="mailto:ouattaralm12@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline block transition">ouattaralm12@gmail.com</a>
                  <a href="mailto:ouattaral2@student.iugb.edu.ci" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline block transition">ouattaral2@student.iugb.edu.ci</a>
                </div>
              </div>
              <div className="stagger-item-2">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{t.phones}</h3>
                <div className="space-y-1">
                  <a href="tel:+2250150070083" className="text-cyan-600 dark:text-cyan-400 hover:underline block transition">+225 01 500 700 83</a>
                  <a href="tel:+2250574724233" className="text-cyan-600 dark:text-cyan-400 hover:underline block transition">+225 05 747 242 33</a>
                  <a href="tel:+2250705583082" className="text-cyan-600 dark:text-cyan-400 hover:underline block transition">+225 07 055 830 82</a>
                </div>
              </div>
              <div className="stagger-item-3">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{t.location}</h3>
                <p className="text-gray-700 dark:text-slate-200">Cote d&apos;Ivoire, Abidjan, Treichville<br />Avenue 4 Rue 13</p>
              </div>
              <div className="stagger-item-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t.social}</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/AkmelFed12" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition transform hover:scale-110">GitHub</a>
                  <a href="https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition transform hover:scale-110">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold mb-8">{t.briefTitle}</h2>
            <p className="text-sm text-gray-600 dark:text-slate-300 mb-6">{t.briefDesc}</p>
            <p className="text-xs text-gray-500 dark:text-slate-300 mb-4">{t.briefFallback}</p>
            {submitted && <div className="mb-6 p-4 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-lg animate-scale-in border border-cyan-400 dark:border-cyan-700">{t.success}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.name}</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.email}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.service}</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition">
                  {SERVICE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o[lang]}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="stage" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.stage}</label>
                <select id="stage" name="stage" value={formData.stage} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition">
                  {STAGE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o[lang]}</option>)}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.budget}</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition">
                    {BUDGET_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o[lang]}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.timeline}</label>
                  <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition">
                    {TIMELINE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o[lang]}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="contactPreference" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.contactPref}</label>
                <select id="contactPreference" name="contactPreference" value={formData.contactPreference} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition">
                  {CONTACT_PREF_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o[lang]}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t.message}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition resize-none" placeholder={t.messagePh} />
              </div>
              <button type="submit" className="w-full px-6 py-3 font-semibold rounded-lg transition transform shadow-lg bg-cyan-700 hover:bg-cyan-800 hover:scale-105 text-white">{t.submit}</button>
              <button type="button" onClick={() => openEmailFallback(formData.name, formData.email, formData.message)} className="w-full px-6 py-3 font-semibold rounded-lg border border-cyan-600 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition">{t.fallback}</button>
            </form>
          </div>
        </div>

        <div className="surface-card p-5 sm:p-6 mt-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t.faqTitle}</h2>
          <div className="space-y-3 text-sm">
            <div className="surface-card-soft p-4"><p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{t.faq1q}</p><p className="text-slate-600 dark:text-slate-300">{t.faq1a}</p></div>
            <div className="surface-card-soft p-4"><p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{t.faq2q}</p><p className="text-slate-600 dark:text-slate-300">{t.faq2a}</p></div>
            <div className="surface-card-soft p-4"><p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{t.faq3q}</p><p className="text-slate-600 dark:text-slate-300">{t.faq3a}</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}

