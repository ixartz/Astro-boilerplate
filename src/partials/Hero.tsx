import { Section } from 'astro-boilerplate-components';
import React from 'react';

const Hero = () => {
  const skills = [
    { name: 'Node.js', icon: '🌐' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
  ];

  const scrollToEducation = () => {
    const educationSection = document.getElementById('education-section');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="flex min-h-screen items-center px-4 pt-16 sm:px-6 lg:px-8"
      id="hero-section"
    >
      <Section>
        <div className="flex flex-col items-center gap-4 space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {/* Content section */}
          <div className="w-full text-center md:w-2/3 md:text-left">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Hi there, I'm{' '}
              <span
                style={{ textShadow: '1px 1px 2px #10b98199' }}
                className="bg-gradient-to-r from-emerald-600 to-emerald-600 bg-clip-text font-extrabold text-transparent"
              >
                Binyam
              </span>{' '}
            </h1>

            <div className="text-base leading-7 text-gray-300 sm:text-lg">
              <p>
                <b>Backend Developer</b> certified by{' '}
                <a
                  className="text-emerald-400 transition-all duration-200 hover:underline"
                  href="/"
                >
                  ALX SWE
                </a>{' '}
                , currently learning <b>Computer Engineering</b> at the{' '}
                <a
                  className="text-emerald-400 transition-all duration-200 hover:underline"
                  href="/"
                >
                  University of Dubai
                </a>{' '}
                , passionate about integrating AI into our day to day life.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold text-gray-300 sm:text-xl">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-start">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-neutral-700/50 bg-neutral-800/50 px-3 py-1.5 text-xs text-gray-300 transition-all duration-200 hover:bg-neutral-700/50 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <span className="mr-1 sm:mr-2">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="/assets/cv.pdf"
                download
                className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm text-white transition-all duration-200 hover:bg-emerald-700 sm:px-6 sm:py-3 sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex justify-center space-x-4 md:justify-start">
              <a
                href="/"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src="/assets/images/twitter-icon.png"
                  alt="Twitter icon"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a
                href="/"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src="/assets/images/facebook-icon.png"
                  alt="Facebook icon"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a
                href="/"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src="/assets/images/linkedin-icon.png"
                  alt="Linkedin icon"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a
                href="/"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src="/assets/images/youtube-icon.png"
                  alt="Youtube icon"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
            </div>
          </div>

          {/* Avatar section */}
          <div className="hidden w-full justify-center md:flex md:w-1/3">
            <img
              className="h-48 rounded-full border border-neutral-800 opacity-75 ring-1 ring-neutral-700 transition-opacity duration-300 hover:opacity-100 sm:h-64 md:h-80 md:border-0 md:ring-0"
              src="/assets/images/portrait_nobg.png"
              alt="Avatar image"
              loading="lazy"
            />
          </div>
        </div>

        {/* Scroll down button */}
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce md:flex">
          <button
            onClick={scrollToEducation}
            className="rounded-full border border-neutral-700/50 bg-neutral-800/50 p-2 transition-all duration-200 hover:border-emerald-700/50 hover:bg-neutral-700/50"
            aria-label="Scroll to next section"
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
};

export { Hero };
