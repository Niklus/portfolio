const Project = ({ projects }) => {
  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const project = projects.find((project) => project.id === id);

  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{project.title}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{project.description}</p>
          </div>
          <div className="project-cs-hero__cta">
            <a
              href={`${project.visit}`}
              className="btn btn--bg"
              target="_blank"
            >
              Live Link
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
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={project.image}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  Project Overview
                </h3>
                <p className="project-details__desc-para">{project.details}</p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="skills__skill">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href={`${project.visit}`}
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  href={`${project.source}`}
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
