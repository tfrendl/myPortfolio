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
    const serviceId = import.meta.env.VITE_SERVICE_ID;
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
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent!", response);
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contactForm py-5 col-md-4 mx-auto"
      >
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
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
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button className="resume-button-md" type="submit" role="button">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
