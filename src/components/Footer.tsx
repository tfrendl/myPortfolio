import "@fortawesome/fontawesome-free/css/all.min.css"; // For icons

const Footer = () => {
  return (
    <footer className="container-fluid text-center text-white">
      {/* Grid container */}
      <div className="container-fluid d-flex justify-content-between">
        <div className="footer-icons w-100 d-flex justify-content-start">
          {/* LinkedIn Icon */}
          <a
            className="btn btn-link"
            href="https://www.linkedin.com/in/talia-frendl/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* GitHub Icon */}
          <a
            className="btn btn-link"
            href="https://github.com/tfrendl"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
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
