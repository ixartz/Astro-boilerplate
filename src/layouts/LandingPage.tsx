import { Section } from '@/components/Section';
import projectWebDesign from '@/images/project-web-design.png';

import { Hero } from './Hero';
import { Navbar } from './Navbar';

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />

    <Section title="Recent Projects">
      <div className="flex items-center gap-8">
        <div className="shrink-0">
          <img
            className="h-56 w-56"
            src={projectWebDesign}
            alt="Project Web Design"
          />
        </div>

        <div>
          <div className="text-xl font-semibold">Project 1</div>

          <p className="mt-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
        </div>
      </div>
    </Section>
  </>
);

export { LandingPage };
