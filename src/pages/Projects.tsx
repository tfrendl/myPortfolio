import React, { useEffect } from "react";
import projectsData from "../projectsData";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Talia Joy Frendl";
  }, []);
  return (
    <>
      <h1 className=" mx-auto d-flex justify-content-center mb-5">
        My Projects
      </h1>
      <div className="row row-cols-1 row-cols-md-2 mx-auto">
        {projectsData.map((project) => (
          <div className="col">
            <div className="card mb-4">
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.summary}</p>
                <div className="px-auto">
                  <a
                    className="btn btn-primary m-3"
                    href={`/myPortfolio/project/${project.id}`}
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
    </>
  );
};

export default Projects;
