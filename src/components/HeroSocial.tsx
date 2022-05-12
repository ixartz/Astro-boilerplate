type IHeroSocialProps = {
  src: string;
  alt: string;
};

const HeroSocial = (props: IHeroSocialProps) => (
  <img className="h-12 w-12" src={props.src} alt={props.alt} />
);

export { HeroSocial };
