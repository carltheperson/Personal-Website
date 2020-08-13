import React from "react";
import "./css/Welcome.css";

const down = require("../media/down.svg");

export default () => {
  return (
    <div className="welcome">
      <div>
        <h1>Hi, and welcome!</h1>
        <p className="welcome-text">
          This is my personal website, <br /> feel free to look around.
        </p>

        <p className="about">About me</p>
        <div className="image-container">
          <img src={down} alt="down" />
        </div>
      </div>
    </div>
  );
};
