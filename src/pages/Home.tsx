import "../App.css";

const Home = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-8">
        <h2 className="fw-bold">Hi there!</h2>
        <p className="display-3">
          I'm <span className="font-color-blue">Talia Frendl</span>,
        </p>
        <h3>a Junior Fullstack Developer</h3>
        <button type="button" className="resume-button">
          View Resume
        </button>
      </div>
      <div className="col-lg-3 d-flex justify-content-center align-items-center">
        <img
          src="/images/homePhoto.png"
          alt="Profile Photo"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Home;
