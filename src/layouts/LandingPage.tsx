import { Project } from '@/components/Project';
import { Section } from '@/components/Section';
import projectFire from '@/images/project-fire.png';
import projectMaps from '@/images/project-maps.png';
import projectWebDesign from '@/images/project-web-design.png';

import { Hero } from './Hero';
import { Navbar } from './Navbar';

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />

    <Section title="Recent Projects">
      <Project
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        img={{ src: projectWebDesign, alt: 'Project Web Design' }}
        category={
          <div className="rounded-md bg-lime-400 px-2 py-1 text-xs font-semibold text-lime-900">
            Web Design
          </div>
        }
      />
      <Project
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        img={{ src: projectFire, alt: 'Project Fire' }}
        category="Next.js"
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        img={{ src: projectMaps, alt: 'Project Maps' }}
        category="Node.js"
      />
    </Section>
  </>
);

export { LandingPage };
