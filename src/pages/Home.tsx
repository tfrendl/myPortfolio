import { useEffect } from "react";
import "../App.css";
import Footer from "../components/Footer";
import DownloadButton from "../components/DownloadButton";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Talia Joy Frendl";
  }, []);
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row w-100" style={{ maxWidth: "1600px" }}>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="fw-bold mb-3">Hi there!</h2>
            <p className="display-4 mb-3">
              I'm <span className="font-color-blue">Talia Frendl</span>,
            </p>
            <h3 className="mb-4">a Junior Fullstack Developer</h3>
            <DownloadButton />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative">
            <img
              src="https://tfrendl.github.io/myPortfolio/images/homePhoto.png"
              alt="Profile Photo"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
