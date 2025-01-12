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
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
        <button
          className="btn"
          role="button"
          onClick={() => window.history.back()}
        >
          <i className="bi bi-arrow-left-square fs-2"></i>
        </button>
        <h1 className="d-flex justify-content-center mb-5">{project.title}</h1>
        {/* display techstack */}
        <h3 className="d-flex justify-content-center mb-3 fw-bold">
          Tech Stack
        </h3>
        <div className="d-flex justify-content-center mb-5">
          <p>
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
        />
        <p className="mt-4">{project.description}</p>

        {/* display pdf */}
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

        {/* check if there is a link, if so, display */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#007BFF",
              textDecoration: "none",
              marginTop: "16px",
              display: "inline-block",
            }}
          >
            View Website
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
