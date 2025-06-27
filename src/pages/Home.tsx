import { useEffect } from "react";
import "../App.css";
import DownloadButton from "../components/DownloadButton";
import ContactForm from "../components/ContactForm.jsx";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Talia Joy Frendl";
  }, []);
  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div
          className="row w-100"
          style={{ maxWidth: "1600px", minHeight: "80vh" }}
        >
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center mb-4">
            <h1 className="fw-bold mb-3">Hi there!</h1>
            <h1 className="display-4 mb-5">
              <span className="fs-1">I'm</span>
              <span className="font-color-blue"> Talia Frendl</span>,
            </h1>
            <h2 className="mb-4">a Junior Fullstack Developer</h2>
            <DownloadButton />
          </div>
          <div className="col-lg-5 d-flex justify-content-center align-items-center position-relative">
            <img
              src="/images/homePhoto.png"
              alt="Profile Photo"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <hr className="my-4 border-light" />
        {/* Section 1: Photo Left, Text Right */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="/images/amalfi.jpeg"
              alt="About Me - Section 1"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", width: "auto" }}
            />
          </div>
          <div className="col-lg-6 lh-lg mt-5">
            <h2>Hi!</h2>
            <p>
              I'm Talia Frendl, a junior fullstack developer with a passion for
              building applications that help{" "}
              <span className="fw-bold">
                people, animals, and the environment thrive
              </span>
              . I love solving puzzles, writing clean and efficient code, and
              collaborating with teams to bring meaningful ideas to life.
            </p>
            <p>
              During my <span className="fw-bold">internship at NASA</span>,
              I've had the incredible opportunity to shadow a software
              development team. I actively participate in daily Scrum meetings,
              observe the Agile process and project lifecycle in action, and
              contribute by writing{" "}
              <span className="fw-bold">user stories</span> to help define
              features. This experience has given me valuable insights into
              real-world technical solutions and the importance of effective{" "}
              <span className="fw-bold">team collaboration</span>.
            </p>
          </div>
        </div>
        <hr className="my-4 border-light" />

        {/* Section 2: Photo Right, Text Left */}
        <div className="row align-items-center lh-lg d-flex">
          <div className="col-lg-6 order-lg-2 d-flex justify-content-end">
            <img
              src="/images/rome.jpeg"
              alt="About Me - Section 2"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", width: "auto" }}
            />
          </div>
          <div className="col-lg-6 mt-5">
            <h4 className="fw-bold mb-3">Skills & Technologies</h4>

            <p>
              <ul>
                {" "}
                <li>
                  Python, Java, JavaScript, Express.js, Bootstrap, Django,
                  React, NumPy, Node.js, MySQL, PostgreSQL
                </li>{" "}
                <br></br>
                <li>
                  Git, VSCode, Linux Terminal, Adobe XD, Adobe Illustrator, API
                  Integration, User Sessions, Agile/Scrum, Responsive Design
                </li>{" "}
              </ul>
            </p>
          </div>
        </div>
        <hr className="my-4 border-light" />
        {/* Section 3: Text Right, Photo Left */}
        <div className="row align-items-center lh-lg">
          <div className="col-lg-6">
            <img
              src="/images/japan.jpeg"
              alt="About Me - Section 2"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", width: "auto" }}
            />
          </div>
          <div className="col-lg-6 order-lg-1 mt-5">
            <h4 className="fw-bold mb-3">My Journey</h4>
            <p>
              My love for problem-solving and caring for all living things
              shaped my path into software development. Early dreams of becoming
              a veterinarian or studying math evolved into a passion for
              programming.
            </p>
            <p>
              I'm currently finishing up my senior year studying{" "}
              <span className="fw-bold">computer science </span>
              with an emphasis on{" "}
              <span className="fw-bold"> software development</span> at{" "}
              <span className="fw-bold">
                California State University, Monterey Bay
              </span>
              .
            </p>

            <p>
              Over the past few years, I've worked on projects that sharpened my
              <span className="fw-bold">
                {" "}
                technical and collaborative skills
              </span>
              . Whether I'm coding as part of a team, identifying bugs in code,
              or documenting processes, I love seeing projects come together and
              finding solutions that make life easier.
            </p>
          </div>
        </div>
        <hr className="my-4 border-light" />

        {/* Section 4: Photo Right, Text Left */}
        <div className="row align-items-center lh-lg">
          <div className="col-lg-6 order-lg-2 d-flex justify-content-end">
            <img
              src="/images/austriaflower.jpeg"
              alt="About Me - Section 4"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", width: "auto" }}
            />
          </div>
          <div className="col-lg-6 mt-5">
            <h4 className="fw-bold mb-3">Collaboration & Leadership</h4>
            <p>
              I thrive in team-based environments and have experience using
              tools like <span className="fw-bold">GitHub</span> and{" "}
              <span className="fw-bold">GitLab</span> to keep projects
              organized. As a former{" "}
              <span className="fw-bold">Scrum Master</span> and{" "}
              <span className="fw-bold">Product Owner</span>, I enjoy keeping
              teams on track and staying focused on the bigger picture.{" "}
            </p>
          </div>
        </div>
        <hr className="my-4 border-light" />

        {/* Section 6: Text Right, Photo Left */}
        <div className="row align-items-center lh-lg">
          <div className="col-lg-6">
            <img
              src="/images/austria4.jpeg"
              alt="About Me - Section 2"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", width: "auto" }}
            />
          </div>
          <div className="col-lg-6 order-lg-1 mt-5">
            <h4 className="fw-bold mb-3">Beyond Coding</h4>
            <p>
              When I'm not coding, you'll often find me:
              <ul>
                {" "}
                <li>
                  {" "}
                  Hiking trails, exploring cozy coffee shops, or tending to my
                  garden{" "}
                </li>{" "}
                <li>
                  {" "}
                  Cuddling with my two cats or spending quality time with my
                  family and friends{" "}
                </li>{" "}
                <li>
                  {" "}
                  Travelling internationally with my husband. Over the past few
                  years, we've explored <span className="fw-bold">England</span>
                  , <span className="fw-bold">Austria</span>,{" "}
                  <span className="fw-bold">Italy</span>, and{" "}
                  <span className="fw-bold">Japan</span>.{" "}
                  <span className="fw-bold">Hungary</span> is next on the list!{" "}
                </li>{" "}
              </ul>{" "}
            </p>
          </div>
        </div>
        <hr className="my-4 border-light" />
      </div>

      <div className="Contact container-fluid d-flex justify-content-center align-items-center row text-center">
        <div>
          <h1 className="mb-4">Contact Me</h1>
          <ContactForm />
        </div>
        <div>
          <div className="d-flex w-100 justify-content-center align-items-center mb-3">
            {/* LinkedIn Icon */}
            <a
              className="btn btn-link "
              href="https://www.linkedin.com/in/talia-frendl/"
              target="_blank"
              rel="noopener noreferrer"
              data-mdb-ripple-color="dark"
            >
              <img
                className="img-fluid"
                src="/images/linkedIn.png"
                alt="LinkedIn Icon"
                style={{ width: "auto", height: "30px" }}
              ></img>
            </a>
            {/* GitHub Icon */}
            <a
              className="btn btn-link"
              href="https://github.com/tfrendl"
              target="_blank"
              rel="noopener noreferrer"
              data-mdb-ripple-color="dark"
            >
              <img
                className="img-fluid"
                src="/images/github.png"
                alt="GitHub Icon"
                style={{ width: "auto", height: "30px" }}
              ></img>
            </a>
          </div>
        </div>
        <p className="fst-italic">
          Or email me directly at taliafrendl@gmail.com
        </p>
      </div>
    </>
  );
};

export default Home;
