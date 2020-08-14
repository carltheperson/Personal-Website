import React, { useState, useContext } from "react";
import "./css/Header.css";

const burger = require("../media/burger.svg");

interface Props {
  pageContext: React.Context<{
    welcome: React.MutableRefObject<null>;
    about: React.MutableRefObject<null>;
    contact: React.MutableRefObject<null>;
  }>;
}

export const Header: React.FC<Props> = ({ pageContext }) => {
  const [looking, setLooking] = useState<boolean>();
  const [locked, setLocked] = useState<boolean>();

  const getMenuClass = () => {
    if (looking === undefined) return "hidden";
    return looking || locked ? "active" : "inactive";
  };

  const scrollToRef = (ref: React.MutableRefObject<null>) => {
    if (ref !== null && ref.current !== null) {
      // @ts-ignore: Object is possibly 'null'.
      window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }
  };

  const pages = useContext(pageContext);

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
          <p onClick={() => scrollToRef(pages.welcome)}>Welcome</p>
        </li>
        <li className={getMenuClass()}>
          <p onClick={() => scrollToRef(pages.about)}>About me</p>
        </li>
        <li className={getMenuClass()}>
          <p onClick={() => scrollToRef(pages.contact)}>Contact me</p>
        </li>
      </ul>
    </div>
  );
};
