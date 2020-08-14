import React from "react";

import "./css/Footer.css";

const githubLogo = require("../media/github-logo.svg");

export default () => {
  return (
    <div className="footer">
      <a href="https://github.com/carlriis" className="github-link">
        Check out my GitHub
      </a>
      <br />
      <img
        src={githubLogo}
        alt="GitHub Logo"
        onClick={() => (window.location.href = "https://github.com/carlriis")}
      />
      <div>
        <a href="">Welcome</a>
        <a href="">About me</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};
