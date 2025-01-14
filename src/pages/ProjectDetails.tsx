import { useParams } from "react-router-dom";
import projectsData from "../projectsData";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    // project template
    <>
      {" "}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px" }}>
        {/* back button */}
        <button
          className="btn mb-1"
          role="button"
          onClick={() => window.history.back()}
        >
          <i className="bi bi-arrow-left-square fs-2"></i>
        </button>

        {/* project icon */}
        {project.logo && (
          <div className="d-flex justify-content-center rounded-circle">
            <img
              className="rounded-circle m-3"
              src={project.logo}
              alt="Project Logo"
              style={{
                maxWidth: "10%",
              }}
            />
          </div>
        )}

        {/* title */}
        <h1 className="display-3 d-flex justify-content-center text-center mb-5 fw-bold">
          {project.title}
        </h1>
        {/* techstack */}
        <h2 className="d-flex justify-content-center mb-3">Tech Stack</h2>
        <div className="d-flex justify-content-center mb-5">
          <p className="text-center">
            {project.stack.map((stack, index) => (
              <span
                key={index}
                className="badge bg-secondary fs-6 fw-light"
                style={{ margin: "5px" }}
              >
                {stack}
              </span>
            ))}
          </p>
        </div>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%" }}
          className="img-thumbnail mt-3"
        />

        {/* description */}
        <div className="mt-5 mb-5 fs-5">
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* check if there is a link, if so, display */}
        {project.link && (
          <a
            href={project.link}
            className="resume-button mb-5 d-flex justify-content-center"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            {project.linkDescription}
          </a>
        )}

        {/* view notes prompt */}

        {/* display pdf */}
        {project.documentation && (
          <>
            <div>
              <h3 className="text-center mb-4">
                <i className="bi bi-arrow-down-short"></i>Check out my notes
                <i className="bi bi-arrow-down-short"></i>
              </h3>
            </div>
            <div className="pdf-container">
              <object
                data={project.documentation}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href={project.documentation}>to the PDF!</a>
                </p>
              </object>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
