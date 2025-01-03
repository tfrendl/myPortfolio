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
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
        <h1 className="d-flex justify-content-center mb-5">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%" }}
        />

        <p className="mt-4">{project.description}</p>

        {/* display techstack */}
        <div>
          {project.stack.map((stack, index) => (
            <span
              key={index}
              className="badge bg-secondary"
              style={{ margin: "4px" }}
            >
              {stack}
            </span>
          ))}
        </div>

        {/* <div>
          {project.icons.map((icon, index) => (
            <i
              key={index}
              className={`${icon} fa-2x`}
              style={{ margin: "8px" }}
              data-mdb-ripple-color="dark"
            ></i>
          ))}
        </div> */}
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
