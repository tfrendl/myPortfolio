import "@fortawesome/fontawesome-free/css/all.min.css"; // For icons

const Footer = () => {
  return (
    <footer className="container-fluid text-center text-white">
      {/* Grid container */}
      <div className="container-fluid d-flex justify-content-between">
        <div className="footer-icons w-100 d-flex justify-content-start gap-3">
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
        <div className="footer-text w-100 d-flex align-items-center justify-content-end">
          <small>{/* Copyright */}© 2025 | Talia Frendl </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
