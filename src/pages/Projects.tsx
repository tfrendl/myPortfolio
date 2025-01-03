import React, { useEffect } from "react";
import projectsData from "../projectsData";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Talia Joy Frendl";
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {projectsData.map((project) => (
        <div className="col">
          <div className="card">
            <img src={project.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="px-auto">
                <a
                  className="btn btn-primary me-3"
                  href={`/project/${project.id}`}
                  role="button"
                >
                  View Project
                </a>
                {/* Only show the button if the project has a link */}
                {project.link && (
                  <a
                    className="btn btn-outline-primary px-auto"
                    href={project.link}
                    role="button"
                  >
                    View Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
