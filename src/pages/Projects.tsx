import React, { useEffect } from "react";
import projectsData from "../projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Talia Joy Frendl";
  }, []);
  return (
    <>
      <h1 className="mx-auto d-flex justify-content-center mb-5 text-decoration-underline">
        My Projects
      </h1>
      <div className="row row-cols-1 row-cols-md-2 g-5 mx-auto">
        {projectsData.map((project) => (
          <div className="col mb-4">
            <div className="card project-card">
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.summary}</p>
                <div className="d-flex gap-4 align-items-center">
                  <Link
                    to={`/project/${project.id}`}
                    className="resume-button-md my-3"
                    role="button"
                  >
                    View Project
                  </Link>
                  {/* Only show the button if the project has link */}
                  {project.link && (
                    <a
                      className="resume-button-md-inverse"
                      href={project.link}
                      role="button"
                    >
                      {project.linkDescription}
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
