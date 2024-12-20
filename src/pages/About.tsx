import React from "react";

const About = () => {
  return (
    <div className="d-flex row">
      <div className="col-lg-6">
        <h1 className="fw-medium">Hi!</h1>
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
          During my <span className="fw-bold">internship at NASA</span>, I've
          had the incredible opportunity to shadow a software development team.
          I actively participate in daily Scrum meetings, observe the Agile
          process and project lifecycle in action, and contribute by writing{" "}
          <span className="fw-bold">user stories</span> to help define features.
          This experience has given me valuable insights into real-world
          technical solutions and the importance of effective{" "}
          <span className="fw-bold">team collaboration</span>.
        </p>
        <h5 className="fw-bold">My Journey</h5>
        <p>
          My love for problem-solving and caring for all living things shaped my
          path into software development. Early dreams of becoming a
          veterinarian or studying math evolved into a passion for programming.
        </p>
        <p>
          I'm currently finishing up my senior year studying{" "}
          <span className="fw-bold">computer science </span>
          with an emphasis on{" "}
          <span className="fw-bold">software development</span> at{" "}
          <span className="fw-bold">
            California State University, Monterey Bay
          </span>
          .
        </p>
        <p>
          Over the past few years, I've worked on projects that sharpened my
          <span className="fw-bold"> technical and collaborative skills</span>.
          Whether I'm coding as part of a team, identifying bugs in code, or
          documenting processes, I love seeing projects come together and
          finding solutions that make life easier.
        </p>
        <h5 className="fw-bold">Skills & Technologies</h5>
        <p>
          <ul>
            <li>
              <span className="fw-medium">Languages</span>: JavaScript, Python,
              Java
            </li>
            <li>
              <span className="fw-medium">Frameworks & Libraries</span>:
              Node.js, Express.js, Bootstrap, React.js, Django
            </li>
            <li>
              <span className="fw-medium">Databases</span>: MySQL, PostgreSQL
            </li>
            <li>
              <span className="fw-medium">Tools</span>: Git, VSCode, Linux
              Terminal
            </li>
            <li>
              <span className="fw-medium">Concepts</span>: API Integration, User
              Sessions, Agile/Scrum
            </li>
          </ul>
        </p>
        <h5 className="fw-bold">Collaboration & Leadership</h5>
        <p>
          I thrive in team-based environments and have experience using tools
          like <span className="fw-bold">GitHub</span> and{" "}
          <span className="fw-bold">GitLab</span> to keep projects organized. As
          a former <span className="fw-bold">Scrum Master</span> and{" "}
          <span className="fw-bold">Product Owner</span>, I enjoy keeping teams
          on track and staying focused on the bigger picture.
        </p>
        <h5 className="fw-bold">Beyond Coding</h5>
        <p>
          When I'm not coding, you'll often find me:
          <ul>
            <li>
              Hiking trails, exploring cozy coffee shops, or tending to my
              garden
            </li>
            <li>
              Cuddling with my two cats or spending quality time with my family
              and friends
            </li>
            <li>
              Travelling internationally with my husband. Over the past few
              years, we've explored <span className="fw-bold">England</span>,{" "}
              <span className="fw-bold">Austria</span>,{" "}
              <span className="fw-bold">Italy</span>, and{" "}
              <span className="fw-bold">Japan</span>.{" "}
              <span className="fw-bold">Hungary</span> is next on the list!
            </li>
          </ul>
        </p>
      </div>
      <div className="col-lg-6 overflow-hidden" style={{ height: "100%" }}>
        Photos go here
      </div>
    </div>
  );
};

export default About;
