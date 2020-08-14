import React from "react";

import "./css/Contact.css";

const emailIcon = require("../media/email-icon.svg");
const phoneIcon = require("../media/phone-icon.svg");

interface Props {
  ref_: React.MutableRefObject<null>;
}

export const Contact: React.FC<Props> = ({ ref_ }) => {
  return (
    <div className="contact" ref={ref_}>
      <h1>Contact</h1>
      <div className="text-container">
        <p>
          Let’s talk! You are welcome to contact my using the following ways:
        </p>
      </div>
      <div className="contact-options">
        <div className="contact-container">
          <img src={emailIcon} alt="email icon" />{" "}
          <a href="mailto: carltheperson@protonmail.com">
            carltheperson@protonmail.com
          </a>
        </div>
        <br />
        <div className="contact-container">
          <img src={phoneIcon} alt="phone icon" />{" "}
          <a href="tel:44772730">44772730</a>
        </div>
      </div>
    </div>
  );
};
