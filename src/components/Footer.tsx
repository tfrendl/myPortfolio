import "@fortawesome/fontawesome-free/css/all.min.css"; // For icons
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-white py-3 mt-auto fixed-bottom">
      <hr />
      {/* Grid container */}
      <div className="container d-flex justify-content-between align-items-center">
        <div className="footer-icons d-flex justify-content-center w-100">
          {/* LinkedIn Icon */}
          <a
            className="btn btn-link btn-floating m-1 fs-4"
            href="https://www.linkedin.com/in/talia-frendl/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* GitHub Icon */}
          <a
            className="btn btn-link btn-floating m-1 fs-4"
            href="https://github.com/tfrendl"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mb-3">© 2025 | Talia Frendl</div>
    </footer>
  );
};

export default Footer;
