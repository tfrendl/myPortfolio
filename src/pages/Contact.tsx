import { useEffect } from "react";
import ContactForm from "../components/ContactForm.jsx";
import "../App.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Talia Joy Frendl";
  }, []);
  return (
    <>
      <div className="Contact container-fluid d-flex justify-content-center align-items-center row text-center">
        <div className="mb-2">
          <h1>Contact Me</h1>
          <p>I'll be glad to answer your questions!</p>
          <ContactForm />
        </div>
        <div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating m-1 fs-3"
              href="https://www.linkedin.com/in/talia-frendl/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating m-1 fs-3"
              href="https://github.com/tfrendl"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p className="fst-italic">
          Or email me directly at taliafrendl@gmail.com
        </p>
      </div>
    </>
  );
};

export default Contact;
