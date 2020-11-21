import React from "react";
import ContactContent from "./contact-components/ContactContent";
import ContactForm from "./contact-components/ContactForm";
import GoogleMap from "./contact-components/GoogleMap";
import "./scss/main.css";
const Contact = () => {
  return (
    <>
      <GoogleMap />
      <ContactContent />
      <ContactForm />
    </>
  );
};

export default Contact;
