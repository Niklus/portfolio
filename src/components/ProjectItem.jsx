import { Link } from "react-router-dom";

export const ProjectItem = ({ project }) => (
  <div className="projects__row">
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
