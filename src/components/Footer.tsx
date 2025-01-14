import "@fortawesome/fontawesome-free/css/all.min.css"; // For icons
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white py-3">
        <hr />
        {/* <!-- Grid container --> */}
        <div className="d-flex justify-content-between align-items-center px-4">
          <div>
            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating m-1"
              href="https://www.linkedin.com/in/talia-frendl/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating m-1"
              href="https://github.com/tfrendl"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Copyright --> */}
          <div className="text-center mb-3">
            <small>© 2025 | Talia Frendl</small>
          </div>
        </div>

        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};

export default Footer;
