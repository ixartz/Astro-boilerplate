import { Section } from 'astro-boilerplate-components';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface EducationDetails {
  id: number;
  institution: string;
  degree: string;
  period: string;
  status: string;
  achievements?: string[];
  coursework?: string[];
  description?: string;
  color: string;
}

const TimeLine: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const educationData: EducationDetails[] = [
    {
      id: 1,
      institution: 'University of Dubai',
      degree: 'BSc in Computer Engineering',
      period: 'Aug 2023 - June 2027',
      status: 'Currently Learning',
      achievements: [
        'Received full scholarship for academic excellence',
        'Member of the Computer Science Club',
        'Participating in AI research projects',
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Computer Architecture',
        'Artificial Intelligence',
        'Database Systems',
        'Software Engineering',
      ],
      description:
        'Pursuing a comprehensive degree in Computer Engineering with a focus on AI and software development. The program combines theoretical knowledge with practical experience through projects and internships.',
      color: 'yellow',
    },
    {
      id: 2,
      institution: 'ALX SWE',
      degree: 'Software Engineering | Backend',
      period: 'Nov 8, 2022 - July 30, 2024',
      status: 'Completed',
      achievements: [
        'Graduated with distinction',
        'Completed 5+ real-world projects',
        'Mentored junior developers',
      ],
      coursework: [
        'Backend Development with Python',
        'DevOps & Cloud Computing',
        'System Design',
        'Microservices Architecture',
        'API Development',
      ],
      description:
        'Intensive 12-month software engineering program focused on backend development and modern tech practices. Gained hands-on experience with real-world projects and industry best practices.',
      color: 'emerald',
    },
    {
      id: 3,
      institution: 'Addis Ababa University',
      degree: 'BSc in Computer Science',
      period: 'Jan 2022 -',
      status: 'Stopped when I got scholarship at the university of Dubai',
      achievements: [
        'Top 5% of class in first semester',
        'Successfully completed 2 semesters',
      ],
      coursework: [
        'Introduction to Programming',
        'Calculus',
        'Physics',
        'Computer Fundamentals',
      ],
      description:
        'Started my journey in Computer Science before receiving a full scholarship opportunity at the University of Dubai. The foundation built here was instrumental in my academic growth.',
      color: 'slate',
    },
  ];

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'yellow':
        return 'hover:border-yellow-500/50 sm:before:bg-yellow-600';
      case 'emerald':
        return 'hover:border-emerald-500/50 sm:before:bg-emerald-600';
      case 'slate':
        return 'hover:border-slate-500/50 sm:before:bg-slate-600';
      default:
        return 'hover:border-neutral-500/50 sm:before:bg-neutral-600';
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col justify-center px-4 sm:px-6 lg:px-8"
      id="education-section"
    >
      <Section>
        <section className="my-8">
          <div className="container mx-auto max-w-5xl">
            <div className="mx-0 grid gap-4 sm:mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="mb-8 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md before:bg-yellow-600 sm:mb-14 sm:text-left sm:before:mx-0">
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    Education
                  </h3>
                  <span className="pt-2 text-sm font-bold uppercase tracking-wider text-gray-400">
                    {new Date().toLocaleDateString('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 space-y-6 px-0 sm:col-span-9 sm:px-4">
                <div className="relative col-span-12 space-y-12 px-0 transition-all before:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:px-4 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5">
                  {educationData.map((edu) => (
                    <div
                      key={edu.id}
                      className={`flex flex-col rounded-lg border border-neutral-700/50 bg-neutral-800/50 p-4 transition-all duration-300 ${getColorClasses(
                        edu.color
                      )} sm:relative sm:before:absolute sm:before:left-[-36px] sm:before:top-1 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="grow">
                          <h3 className="text-lg font-semibold tracking-wide sm:text-xl">
                            {edu.institution}
                          </h3>
                          <time className="pt-1 text-xs uppercase tracking-wide text-gray-400">
                            {edu.period}
                          </time>
                          <p className="mt-3">
                            {edu.degree}
                            <br />
                            <i>{edu.status}</i>
                          </p>
                        </div>
                        <button
                          className="rounded-full p-2 text-gray-400 transition-colors hover:bg-neutral-700/50 hover:text-white"
                          onClick={() => handleToggle(edu.id)}
                          aria-label={
                            expandedId === edu.id
                              ? 'Collapse details'
                              : 'Expand details'
                          }
                        >
                          {expandedId === edu.id ? (
                            <FaChevronUp className="h-4 w-4" />
                          ) : (
                            <FaChevronDown className="h-4 w-4" />
                          )}
                        </button>
                      </div>

                      {expandedId === edu.id && (
                        <div className="mt-4 space-y-4 border-t border-neutral-700/50 pt-4">
                          {edu.description && (
                            <p className="text-sm text-gray-300">
                              {edu.description}
                            </p>
                          )}

                          {edu.achievements && edu.achievements.length > 0 && (
                            <div>
                              <h4 className="mb-2 text-sm font-semibold text-gray-200">
                                Achievements:
                              </h4>
                              <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
                                {edu.achievements.map((achievement, index) => (
                                  <li key={index}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {edu.coursework && edu.coursework.length > 0 && (
                            <div>
                              <h4 className="mb-2 text-sm font-semibold text-gray-200">
                                Key Coursework:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.coursework.map((course, index) => (
                                  <span
                                    key={index}
                                    className="rounded-full bg-neutral-700/50 px-2 py-1 text-xs text-gray-300"
                                  >
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2  animate-bounce md:flex">
          <button
            onClick={() => {
              const footer = document.querySelector('#projects-section');
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
};

export { TimeLine };
