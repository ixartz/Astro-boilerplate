import { ColorTags, Section } from 'astro-boilerplate-components';
import React from 'react';

import Project from '../components/Project';

// Custom Tag component with better styling
const Tag = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  const colorClasses = {
    [ColorTags.FUCHSIA]:
      'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20',
    [ColorTags.LIME]: 'bg-lime-500/10 text-lime-300 border-lime-500/20',
    [ColorTags.SKY]: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    [ColorTags.ROSE]: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    [ColorTags.VIOLET]: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    [ColorTags.EMERALD]:
      'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    [ColorTags.YELLOW]: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    [ColorTags.INDIGO]: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${
        colorClasses[color] || 'bg-neutral-700 text-neutral-300'
      }`}
    >
      {children}
    </span>
  );
};

const ProjectList = () => (
  <div
    className="flex min-h-screen flex-col justify-center px-4 sm:px-6 lg:px-8"
    id="projects-section"
  >
    <Section>
      <div className="mb-8">
        <h2 className="text-center text-2xl font-bold sm:text-left sm:text-3xl">
          Recent{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <Project
          name="Funkey"
          description="Learn Typing having the most fun. Explore features like lyrics typing, piano typing and practice typing with AI generated contents that sound familiar."
          link="/"
          repoLink="https://github.com/yourusername/funkey"
          detailLink="/projects/funkey"
          img={{
            src: '/assets/images/browse.gif',
            alt: 'Project Web Design',
          }}
          category={
            <>
              <Tag color={ColorTags.FUCHSIA}>Bootstrap</Tag>
              <Tag color={ColorTags.LIME}>MongoDB</Tag>
              <Tag color={ColorTags.SKY}>Express</Tag>
              <Tag color={ColorTags.ROSE}>TypeScript</Tag>
            </>
          }
        />
        <Project
          name="E-Commerce Platform"
          description="A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard."
          link="/"
          repoLink="https://github.com/yourusername/ecommerce"
          detailLink="/projects/ecommerce"
          img={{ src: '/assets/images/piano.gif', alt: 'E-Commerce Platform' }}
          category={
            <>
              <Tag color={ColorTags.VIOLET}>Next.js</Tag>
              <Tag color={ColorTags.EMERALD}>Stripe</Tag>
              <Tag color={ColorTags.YELLOW}>JavaScript</Tag>
            </>
          }
        />
        <Project
          name="AI Chat Assistant"
          description="An intelligent chat assistant powered by machine learning that can understand context and provide relevant responses."
          link="/"
          repoLink="https://github.com/yourusername/ai-chat"
          detailLink="/projects/ai-chat"
          img={{ src: '/assets/images/practice.gif', alt: 'AI Chat Assistant' }}
          category={
            <>
              <Tag color={ColorTags.FUCHSIA}>Python</Tag>
              <Tag color={ColorTags.INDIGO}>TensorFlow</Tag>
              <Tag color={ColorTags.ROSE}>React</Tag>
            </>
          }
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            const footer = document.querySelector('footer');
            if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="rounded-full border border-neutral-700/50 bg-neutral-800/50 p-2 transition-all duration-200 hover:border-emerald-700/50 hover:bg-neutral-700/50"
          aria-label="Scroll to footer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-neutral-400 hover:text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </Section>
  </div>
);

export { ProjectList };
