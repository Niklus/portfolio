export const Hero = () => {
  return (
    <section id="hero" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, My name is Nicholas</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente solutions for
            complex problems
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">
            Projects
          </a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="#" className="home-hero__social-icon-link">
            <img
              src="/assets/png/linkedin-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="#" className="home-hero__social-icon-link">
            <img
              src="/assets/png/github-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
};
