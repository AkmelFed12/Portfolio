'use client';

import Link from 'next/link';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';

export default function ResumeInternshipCTA() {
  return (
    <div className="mt-10 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/40 p-6">
      <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
        Available for Internship 2026
      </h2>
      <p className="text-green-900 dark:text-green-200 mb-4">
        If your team is looking for a disciplined full-stack learner, I would be glad to discuss.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Contact Form
        </Link>
        <TrackedWhatsAppButton
          label="WhatsApp Direct"
          source="resume_internship_cta"
          className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
        />
      </div>
    </div>
  );
}
