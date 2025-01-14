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
        <div className="mb-5">
          <h1>Contact Me</h1>
          <p>I'll be glad to answer your questions!</p>
          <ContactForm />
        </div>
        <div>
          <p className="fst-italic">
            Or email me directly at taliafrendl@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
