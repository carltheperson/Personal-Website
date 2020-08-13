import React, { useState } from "react";
import "./css/Header.css";

const burger = require("../media/burger.svg");

export default () => {
  const [looking, setLooking] = useState<boolean>();
  const [locked, setLocked] = useState<boolean>();

  const getMenuClass = () => {
    if (looking === undefined) return "hidden";
    return looking || locked ? "active" : "inactive";
  };

  return (
    <div className="header">
      <h1 className="logo">Carl Riis</h1>
      <ul
        className="menu"
        onMouseEnter={() => setLooking(true)}
        onMouseLeave={() => setLooking(false)}
      >
        <li>
          <img
            className="burger"
            src={burger}
            alt="burger menu"
            onClick={() => setLocked(!locked)}
          />
        </li>
        <li className={getMenuClass()}>
          <a>Welcome</a>
        </li>
        <li className={getMenuClass()}>
          <a>About me</a>
        </li>
        <li className={getMenuClass()}>
          <a>Contact me</a>
        </li>
      </ul>
    </div>
  );
};
