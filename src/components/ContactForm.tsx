import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS Contact Form
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

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
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contactForm mb-5 col-md-4 mx-auto needs-validation"
      >
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="form-control"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
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
