import { Link } from "react-router-dom";

export const Projects = ({ projects }) => {
  const projectList = projects.map((project) => {
    return (
      <div className="projects__row" key={project.id}>
        <div className="projects__row-img-cont">
          <img
            src={project.image}
            alt="Software Screenshot"
            className="projects__row-img"
            loading="lazy"
          />
        </div>
        <div className="projects__row-content">
          <h3 className="projects__row-content-title">{project.title}</h3>
          <p className="projects__row-content-desc">{project.description}</p>
          <Link
            to={`/project?id=${project.id}`}
            className="btn btn--med btn--theme dynamicBgClr"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div className="projects__content">{projectList}</div>
      </div>
    </section>
  );
};
