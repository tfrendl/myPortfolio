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
          <div className="d-flex w-100 justify-content-center align-items-center mb-3">
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
        </div>
        <p className="fst-italic">
          Or email me directly at taliafrendl@gmail.com
        </p>
      </div>
    </>
  );
};

export default Contact;
