import { HashLink } from "react-router-hash-link";

export const Hero = () => {
  return (
    <section id="hero" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hi there, I'm Nicholas</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I am a Full Stack JavaScript Developer with expertise spanning both
            front-end and back-end development.
          </p>
        </div>
        <div className="home-hero__cta">
          <HashLink to="#projects" className="btn btn--bg">
            Projects
          </HashLink>
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
          <a
            href="https://github.com/niklus"
            className="home-hero__social-icon-link"
          >
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
