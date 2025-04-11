import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';
// import {Project} from '../components/Project';
import Project from '../components/Project';
// import Project from '../components/Project';
const ProjectList = () => (
    <Section
      title={
        <>
          Recent <GradientText>Projects</GradientText>
        </>
      }
    >
      {/* <div className='flex flex-col items-center md:flex-row justify-between flex-wrap gap-8 md:gap-4 mx-auto'> */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 items-start'>
          <Project
            name='Funkey'
            description='Learn Typing having the most fun. Explore features like lyrics typing, piano typing and practice typing with AI generated contents that sound familiar'
            link='/'
            img={{
              src: '/assets/images/browse.gif',
              alt: 'Project Web Design',
            }}
            category={
              <>
                <Tags color={ColorTags.FUCHSIA}>Bootstrap</Tags>
                <Tags color={ColorTags.LIME}>MongoDB</Tags>
                <Tags color={ColorTags.SKY}>Express</Tags>
                <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              </>
            }
          />
          <Project
            name='Project 2'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim.'
            link='/'
            img={{ src: '/assets/images/piano.gif', alt: 'Project Fire' }}
            category={
              <>
                <Tags color={ColorTags.VIOLET}>Next.js</Tags>
                <Tags color={ColorTags.EMERALD}>Blog</Tags>
                <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              </>
            }
          />
          <Project
            name='Project 3'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim.'
            link='/'
            img={{ src: '/assets/images/practice.gif', alt: 'Project Maps' }}
            category={
              <>
                <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
                <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
                <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              </>
            }
          />
        </div>
    </Section>
);

export { ProjectList };
