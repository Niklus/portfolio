import { HashLink } from "react-router-hash-link";

export const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            I'm a <strong> Web Developer </strong> located in Sweden. I have a
            passion for building digital products that are both beautiful and
            functional.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                I love working with both front-end and back-end technologies,
                and I'm always looking for opportunities to learn and grow as a
                developer. My tech toolkit includes the latest in JavaScript
                frameworks and tools.
              </p>
              <p className="about__content-details-para">
                When I'm not immersed in code, you can find me exploring the
                latest tech innovations or honing my skills through continuous
                learning.
              </p>
            </div>
            <HashLink
              to="#contact"
              className="btn btn--med btn--theme dynamicBgClr"
            >
              Contact
            </HashLink>
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
