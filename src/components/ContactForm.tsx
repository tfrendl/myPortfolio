import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS Contact Form
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS service and template IDs
    const servieId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // EmailJS template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Talia",
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(servieId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contactForm py-5 col-md-4 mx-auto"
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Send Email
        </button>
      </form>
    </>
  );
};

export default ContactForm;
