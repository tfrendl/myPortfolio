import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Talia Joy Frendl";
  }, []);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="/images/WebsitePhoto.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Paws & Found - Website</h5>
              <p className="card-text">
                A user-friendly platform dedicated to connecting individuals
                with adoptable cats and dogs from animal shelters. The website
                offers comprehensive listings of various cat and dog breeds,
                allowing users to explore and find their ideal companion. By
                providing detailed information and search functionalities, Paws
                & Found facilitates the adoption process, helping animals find
                their forever homes.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/images/trailBlitz.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">TrailBlitz - Phone App</h5>
              <p className="card-text">
                Effortlessly manage and shop for hiking and camping gear. Admins
                handle inventory, pricing, and users, while customers enjoy easy
                sign-up, cart checkout, order history, and account updates.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/images/travelWebsite.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">triplify - Website</h5>
              <p className="card-text">
                Triplify is a web application that streamlines trip planning.
                Users can create custom trips, filter activities, manage saved
                itineraries, and get personalized recommendations with an AI
                assistant.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/images/chicken.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
