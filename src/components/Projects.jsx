import { ProjectItem } from "./ProjectItem.jsx";

export const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Check out my recent projects! Here's a glimpse of what I've been up
            to.
          </span>
        </h2>
        <div className="projects__content">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
