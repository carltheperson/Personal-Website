import React from "react";

import "./css/About.css";

const me = require("../media/me.png");
const outline = require("../media/outline.png");
const pdfIcon = require("../media/pdf-icon.svg");

interface Props {
  ref_: React.MutableRefObject<null>;
}

export const About: React.FC<Props> = ({ ref_ }) => {
  return (
    <div className="about">
      <div className="container">
        <div className="me">
          <img src={outline} alt="outline" className="outline" />
          <img src={me} alt="me" className="me-img" />
        </div>
        <div className="description">
          <h1 ref={ref_}>About me</h1>
          <p>
            <span>
              I’m an 18-year-old programmer who is very interested in
              technology. I’m experienced in web development and things related
              to DevOps.
            </span>
            <br />
            <br />
            <span>
              To learn more about my experience and skills, you can refer to my
              CV, which you can see right here:
            </span>
          </p>
          <div
            className="download-container"
            onClick={() =>
              (window.location.href = process.env.PUBLIC_URL + "/files/cv.pdf")
            }
          >
            <img src={pdfIcon} alt="Pdf icon" className="pdf-icon" />
            <div>
              <p className="download-text">View CV (Danish)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
