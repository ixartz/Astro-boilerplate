type IHeroSocialProps = {
  src: string;
  alt: string;
};

const HeroSocial = (props: IHeroSocialProps) => (
  <img
    className="h-12 w-12 hover:translate-y-1"
    src={props.src}
    alt={props.alt}
    loading="lazy"
  />
);

export { HeroSocial };
