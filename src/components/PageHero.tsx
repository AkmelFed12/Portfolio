import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, action }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.13),_transparent_32%),radial-gradient(circle_at_85%_20%,_rgba(15,124,140,0.10),_transparent_26%)]" />
      <div className="relative mx-auto flex min-h-[300px] max-w-6xl items-end px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            {description}
          </p>
          {action && <div className="mt-7">{action}</div>}
        </div>
      </div>
    </section>
  );
}
