import { useEffect } from "react";
import "../App.css";
import DownloadButton from "../components/DownloadButton";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Talia Joy Frendl";
  }, []);
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row w-100" style={{ maxWidth: "1600px" }}>
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
    </>
  );
};

export default Home;
