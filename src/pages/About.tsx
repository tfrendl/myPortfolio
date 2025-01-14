import React, { useEffect } from "react";
import tripsData from "../tripsData";

const About = () => {
  useEffect(() => {
    document.title = "About | Talia Joy Frendl";
  }, []);

  return (
    <>
      <h1 className=" mx-auto d-flex justify-content-center mb-4 text-decoration-underline">
        About Me
      </h1>
      <h4 className="text-center">
        A glimpse into my journey as a developer, shaped by my meaningful work
        and international experiences.
      </h4>

      <div className="container my-5">
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
            <h4 className="fw-bold">Skills & Technologies</h4>

            <p>
              <ul>
                {" "}
                <li>
                  <span className="fw-medium">Languages</span>: Python, Java,
                  JavaScript
                </li>{" "}
                <li>
                  <span className="fw-medium">Frameworks</span>: Express.js,
                  Bootstrap, Django, React Router
                </li>{" "}
                <li>
                  <span className="fw-medium">Libraries</span>: React.js, NumPy
                </li>{" "}
                <li>
                  <span className="fw-medium">Runtime Environments</span>:
                  Node.js
                </li>{" "}
                <li>
                  <span className="fw-medium">Databases</span>: MySQL,
                  PostgreSQL
                </li>{" "}
                <li>
                  <span className="fw-medium">Tools</span>: Git, VSCode, Linux
                  Terminal, Adobe XD, Adobe Illustrator
                </li>{" "}
                <li>
                  <span className="fw-medium">Concepts</span>: API Integration,
                  User Sessions, Agile/Scrum, Responsive Design
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
              style={{ height: "400px", width: "auto" }}
            />
          </div>
          <div className="col-lg-6 order-lg-1 mt-5">
            <h4 className="fw-bold">My Journey</h4>
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
            <h4 className="fw-bold">Collaboration & Leadership</h4>
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
            <h4 className="fw-bold">Beyond Coding</h4>
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
    </>
  );
};

export default About;
//   return (
//     <>
//       <div className="row d-flex justify-content-center mx-auto">
//         <div className="col-lg-6">
//           <h1 className="fw-medium">Hi!</h1>
//           <p className="mt-3">
//             I'm Talia Frendl, a junior fullstack developer with a passion for
//             building applications that help{" "}
//             <span className="fw-bold">
//               people, animals, and the environment thrive
//             </span>
//             . I love solving puzzles, writing clean and efficient code, and
//             collaborating with teams to bring meaningful ideas to life.
//           </p>
//           <p>
//             During my <span className="fw-bold">internship at NASA</span>, I've
//             had the incredible opportunity to shadow a software development
//             team. I actively participate in daily Scrum meetings, observe the
//             Agile process and project lifecycle in action, and contribute by
//             writing <span className="fw-bold">user stories</span> to help define
//             features. This experience has given me valuable insights into
//             real-world technical solutions and the importance of effective{" "}
//             <span className="fw-bold">team collaboration</span>.
//           </p>
//           <h5 className="fw-bold">My Journey</h5>
//           <p>
//             My love for problem-solving and caring for all living things shaped
//             my path into software development. Early dreams of becoming a
//             veterinarian or studying math evolved into a passion for
//             programming.
//           </p>
//           <p>
//             I'm currently finishing up my senior year studying{" "}
//             <span className="fw-bold">computer science </span>
//             with an emphasis on{" "}
//             <span className="fw-bold">software development</span> at{" "}
//             <span className="fw-bold">
//               California State University, Monterey Bay
//             </span>
//             .
//           </p>
//           <p>
//             Over the past few years, I've worked on projects that sharpened my
//             <span className="fw-bold"> technical and collaborative skills</span>
//             . Whether I'm coding as part of a team, identifying bugs in code, or
//             documenting processes, I love seeing projects come together and
//             finding solutions that make life easier.
//           </p>
//           <h5 className="fw-bold">Skills & Technologies</h5>
//           <p>
//             <ul>
//               <li>
//                 <span className="fw-medium">Languages</span>: JavaScript,
//                 Python, Java
//               </li>
//               <li>
//                 <span className="fw-medium">Frameworks & Libraries</span>:
//                 Node.js, Express.js, Bootstrap, React.js, Django
//               </li>
//               <li>
//                 <span className="fw-medium">Databases</span>: MySQL, PostgreSQL
//               </li>
//               <li>
//                 <span className="fw-medium">Tools</span>: Git, VSCode, Linux
//                 Terminal
//               </li>
//               <li>
//                 <span className="fw-medium">Concepts</span>: API Integration,
//                 User Sessions, Agile/Scrum
//               </li>
//             </ul>
//           </p>
//           <h5 className="fw-bold">Collaboration & Leadership</h5>
//           <p>
//             I thrive in team-based environments and have experience using tools
//             like <span className="fw-bold">GitHub</span> and{" "}
//             <span className="fw-bold">GitLab</span> to keep projects organized.
//             As a former <span className="fw-bold">Scrum Master</span> and{" "}
//             <span className="fw-bold">Product Owner</span>, I enjoy keeping
//             teams on track and staying focused on the bigger picture.
//           </p>
//           <h5 className="fw-bold">Beyond Coding</h5>
//           <p>
//             When I'm not coding, you'll often find me:
//             <ul>
//               <li>
//                 Hiking trails, exploring cozy coffee shops, or tending to my
//                 garden
//               </li>
//               <li>
//                 Cuddling with my two cats or spending quality time with my
//                 family and friends
//               </li>
//               <li>
//                 Travelling internationally with my husband. Over the past few
//                 years, we've explored <span className="fw-bold">England</span>,{" "}
//                 <span className="fw-bold">Austria</span>,{" "}
//                 <span className="fw-bold">Italy</span>, and{" "}
//                 <span className="fw-bold">Japan</span>.{" "}
//                 <span className="fw-bold">Hungary</span> is next on the list!
//               </li>
//             </ul>
//           </p>
//         </div>
//         <div className="col-lg-4 d-flex justify-content-center align-items-start">
//           <div className="content">
//             <h4 className="d-flex justify-content-center text-center">
//               Snapshots of My International Adventures
//             </h4>
//             <div id="carouselExampleIndicators" className="carousel slide mt-3">
//               <div className="carousel-indicators">
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="0"
//                   className="active"
//                   aria-current="true"
//                   aria-label="Slide 1"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="1"
//                   aria-label="Slide 2"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="2"
//                   aria-label="Slide 3"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="3"
//                   aria-label="Slide 4"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="4"
//                   aria-label="Slide 5"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="5"
//                   aria-label="Slide 6"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="6"
//                   aria-label="Slide 7"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="7"
//                   aria-label="Slide 8"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="8"
//                   aria-label="Slide 9"
//                 ></button>
//                 <button
//                   type="button"
//                   data-bs-target="#carouselExampleIndicators"
//                   data-bs-slide-to="9"
//                   aria-label="Slide 10"
//                 ></button>
//               </div>
//               {/* images */}
//               <div className="carousel-inner">
//                 {tripsData.map((trip, index) => (
//                   <div className={`carousel-item ${index === 0 && "active"}`}>
//                     <img
//                       src={trip.image}
//                       className="d-block w-100 img-fluid"
//                       alt={trip.title}
//                     />
//                     <div className="carousel-caption d-none d-md-block">
//                       <h5>{trip.title}</h5>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
