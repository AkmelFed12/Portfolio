'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  description?: string;
  url?: string;
}

export default function SocialShareButtons({
  title,
  description = '',
  url = typeof window !== 'undefined' ? window.location.href : '',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${description ? description : ''} ${url}`.trim())}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700 dark:text-slate-200">Share:</span>

      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white transition transform hover:scale-110"
        title="Share on Twitter"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-15-9z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-cyan-700 hover:bg-cyan-800 text-white transition transform hover:scale-110"
        title="Share on LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white transition transform hover:scale-110"
        title="Share on Facebook"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition transform hover:scale-110"
        title="Share on WhatsApp"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.6915026,1.34623494 C15.6109464,0.0151496155 13.0946937,-0.127014957 10.8804028,0.515936532 C8.66609179,1.15878701 6.91289703,2.50048948 5.94219327,4.34893571 C4.97148951,6.19738193 4.90470944,8.35763519 5.74264621,10.2584505 C6.58058299,12.1592658 8.18188189,13.5996185 10.0963541,14.2242318 L10.0963541,23.5 C10.0963541,23.8134776 10.3251557,24 10.6104663,24 C10.895777,24 11.1245786,23.8134776 11.1245786,23.5 L11.1245786,14.2242318 C13.0388851,13.5996185 14.6401431,12.1592658 15.4780799,10.2584505 C16.3160167,8.35763519 16.2492366,6.19738193 15.2785328,4.34893571 C14.308229,2.50048948 12.5550342,1.15878701 10.3407433,0.515936532 C8.92852848,-0.0281260095 7.35819499,0.0748919916 5.88975184,0.752519017 C5.60449118,0.896190897 5.50032779,1.24187326 5.64399967,1.52713393 C5.78767155,1.8123946 6.13397627,1.91655799 6.41923693,1.77288611 C7.63155274,1.19636948 8.95524855,1.08861379 10.1675644,1.55705077 C11.8338778,2.13377741 13.2157887,3.33891145 13.9280929,4.94939996 C14.6403971,6.55988847 14.6075988,8.42265854 13.9359301,10.0066508 C13.2642615,11.590543 11.9304913,12.7386811 10.3401997,13.2677705 C9.93318747,13.4000893 9.60631778,13.6976389 9.60631778,14.1267605 L9.60631778,23.5 C9.60631778,23.5 9.60631778,23.5 9.60631778,23.5 L10.956005,23.5 C11.2413156,23.5 11.4701172,23.3134776 11.4701172,23 C11.4701172,22.6865224 11.2413156,22.5 10.956005,22.5 L10.5850364,22.5 L10.5850364,14.1267605 C10.5850364,13.6976389 10.2581667,13.4000893 9.85115449,13.2677705 C8.26086283,12.7386811 6.92709266,11.590543 6.25542401,10.0066508 C5.58375535,8.42265854 5.55095703,6.55988847 6.26326124,4.94939996 C6.97556546,3.33891145 8.35747633,2.13377741 10.0237897,1.55705077 C11.2361056,1.08861379 12.5597914,1.19636948 13.7721072,1.77288611 C14.0573679,1.91655799 14.4036726,1.8123946 14.5473445,1.52713393 C14.6910163,1.24187326 14.5868529,0.896190897 14.3015923,0.752519017 C12.8331491,-0.0281260095 11.2628156,-0.127014957 9.18225943,0.515936532" />
        </svg>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className={`p-2 rounded-full transition transform hover:scale-110 ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
        }`}
        title="Copy link"
      >
        {copied ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        )}
      </button>
    </div>
  );
}


