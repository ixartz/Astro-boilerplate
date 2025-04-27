export const AppConfig = {
  // Site information
  site_name: 'Binyam Mamo',
  title: 'Binyam Mamo | Backend Developer',
  description:
    'Personal portfolio website of Binyam Mamo, a Backend Developer passionate about AI integration',
  author: 'Binyam Mamo',
  locale_region: 'en-us',
  locale: 'en',

  // Social media links
  social: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    youtube: 'https://youtube.com/@yourusername',
  },

  // Projects configuration
  // Add your projects here to make it easier to update
  projects: [
    {
      name: 'Funkey',
      description:
        'Learn Typing having the most fun. Explore features like lyrics typing, piano typing and practice typing with AI generated contents that sound familiar',
      link: '/',
      repoLink: 'https://github.com/yourusername/funkey',
      img: {
        src: '/assets/images/browse.gif',
        alt: 'Funkey typing project',
      },
      tags: ['Bootstrap', 'MongoDB', 'Express', 'TypeScript'],
    },
    {
      name: 'Project 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
      link: '/',
      repoLink: 'https://github.com/yourusername/project2',
      img: {
        src: '/assets/images/piano.gif',
        alt: 'Project 2',
      },
      tags: ['Next.js', 'Blog', 'JavaScript'],
    },
    {
      name: 'Project 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
      link: '/',
      repoLink: 'https://github.com/yourusername/project3',
      img: {
        src: '/assets/images/practice.gif',
        alt: 'Project 3',
      },
      tags: ['Astro.js', 'Bootstrap', 'TypeScript'],
    },
  ],

  // Education timeline
  education: [
    {
      institution: 'University of Dubai',
      degree: 'BSc in Computer Engineering',
      period: 'Aug 2023 - June 2027',
      status: 'Currently Learning',
    },
    {
      institution: 'ALX SWE',
      degree: 'Software Engineering | Backend',
      period: 'Nov 8, 2022 - July 30, 2024',
      status: 'Completed',
    },
    {
      institution: 'Addis Ababa University',
      degree: 'BSc in Computer Science',
      period: 'Jan 2022 - ',
      status: 'Stopped when I got scholarship at the university of Dubai',
    },
  ],
};
