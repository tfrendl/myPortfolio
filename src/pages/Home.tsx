import React from "react";

const Home = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-md-6 text-content">
          <h1>Hi there!</h1>
          <h2>I'm Talia Frendl,</h2>
          <p>a full-stack developer.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/images/homePhoto.png" alt="Profile Photo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
