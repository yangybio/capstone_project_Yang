import React from "react";
import "./Contact.scss";
import ContactIcon from "../../assets/icons/contact.svg";

const Contact = () => {
  return (
    <div className="contact">
      <img src={ContactIcon} alt="Contact" className="contact__image" />
      <div className="contact__content">
        <h1 className="contact__title">
          Contact us to <span className="contact__highlight">learn more</span>
        </h1>
        <button className="contact__button">Contact Us</button>
      </div>
    </div>
  );
};

export default Contact;
