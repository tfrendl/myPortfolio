import { useParams } from "react-router-dom";
import projectsData from "../projectsData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === Number(id));

  const [showPDF, setShowPDF] = useState(false);

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
        <h1 className="display-3 d-flex justify-content-center text-center fw-bold">
          {project.title}
        </h1>

        {/* overview */}
        <div className="d-flex justify-content-center text-center mb-5">
          <p>{project.summary}</p>
        </div>

        <Container fluid>
          {/* row 1 */}
          <Row className="mb-5">
            <Col xs={12} md={6} className="mb-5">
              {" "}
              {/* project image */}
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%" }}
                className="project-img-container img-fluid"
              />
            </Col>
            <Col xs={12} md={6}>
              {/* features */}
              {project.keyFeatures.length > 0 && (
                <>
                  <h2 className="d-flex justify-content-center mb-3">
                    Features
                  </h2>

                  <div className="d-flex justify-content-center">
                    <ul>
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index} className="mb-4">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={6}>
              {" "}
              {/* my role */}
              {project.myContributions.length > 0 && (
                <>
                  <h2 className="d-flex justify-content-center mb-3">
                    My Role
                  </h2>
                  <div className="d-flex justify-content-center mb-5">
                    <ul>
                      {project.myContributions.map((point, index) => (
                        <li key={index} className="mb-4">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </Col>
            <Col xs={12} md={6}>
              {" "}
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
              <Row className="d-flex justify-content-center">
                {project.link && (
                  <Col xs={12} md={6} className="mb-2">
                    {/* flex button link */}
                    <div className="d-flex justify-content-center">
                      <a
                        href={project.link}
                        className="resume-button mb-5 "
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.linkDescription}
                      </a>
                    </div>
                  </Col>
                )}
                {project.gitHubRepo && (
                  <Col xs={12} md={6}>
                    {/* github repo button link */}
                    <div className="d-flex justify-content-center">
                      <a
                        href={project.gitHubRepo}
                        className="resume-button-inverse mb-5 "
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repository
                      </a>
                    </div>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center"></Col>
            <Col xs={12} md={6}>
              {/* documentation pdf */}
              {project.documentation && (
                <>
                  <h2 className="text-center mb-3">Documentation</h2>
                  <div className="d-flex justify-content-center">
                    {" "}
                    <button
                      onClick={() => setShowPDF(!showPDF)}
                      className="resume-button mb-3"
                    >
                      {showPDF ? "Hide PDF" : "View Final Report"}
                    </button>
                  </div>
                  {showPDF && (
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
                  )}
                </>
              )}
            </Col>
          </Row>
        </Container>

        {/* screenshots */}
        {/* <h2 className="d-flex justify-content-center mb-3">Screenshots</h2>
        <div className="d-flex mb-5">
          <p></p>
        </div> */}

        {/*Live Demo and Code */}
        {/* <h2 className="d-flex justify-content-center mb-3">Live Demo & Code</h2>
        <div className="d-flex mb-5">
          <p></p>
        </div> */}

        {/* description */}
        <div className="mt-5 mb-5 fs-5">
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
};

export default ProjectDetails;
