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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px " }}>
      <img src={project.image} alt={project.title} style={{ width: "100%" }} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
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
        View Project
      </a>
    </div>
  );
};

export default ProjectDetails;
