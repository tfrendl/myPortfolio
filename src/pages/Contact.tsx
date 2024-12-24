import { useEffect } from "react";
import ContactForm from "../components/ContactForm.jsx";
import "../App.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Talia Joy Frendl";
  }, []);
  return (
    <div className="Contact container text-center row justify-content-center">
      <h1>Contact Me</h1>
      <p>I'll be glad to answer your questions!</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
