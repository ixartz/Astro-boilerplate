import { HeroAvatar } from '@/components/HeroAvatar';
import { HeroSocial } from '@/components/HeroSocial';
import { Section } from '@/components/Section';

const Hero = () => (
  <Section>
    <HeroAvatar
      title="Hi there, I'm Ixartz 👋"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore."
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
