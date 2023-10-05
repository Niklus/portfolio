export const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hey! It's
                <strong>Nicholas Otieno</strong>
                and I'm a <strong> Web Developer </strong> located in Sweden.
                Open for
                <strong> remote </strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora explicabo quae quod deserunt eius sapiente
                solutions for complex problems
                <strong>digital products </strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora
              </p>
            </div>
            <a
              href="./#contact"
              className="btn btn--med btn--theme dynamicBgClr"
            >
              Contact
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Responsive Design</div>
              <div className="skills__skill">Nodejs</div>
              <div className="skills__skill">GIT</div>
              <div className="skills__skill">Express</div>
              <div className="skills__skill">Mongodb</div>
              <div className="skills__skill">Firebase</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">RESTful API's</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
