import React, { useContext } from "react";

import "./css/Footer.css";

const githubLogo = require("../media/github-logo.svg");

interface Props {
  pageContext: React.Context<{
    welcome: React.MutableRefObject<null>;
    about: React.MutableRefObject<null>;
    contact: React.MutableRefObject<null>;
  }>;
}

export const Footer: React.FC<Props> = ({ pageContext }) => {
  const pages = useContext(pageContext);

  const scrollToRef = (ref: React.MutableRefObject<null>) => {
    if (ref !== null && ref.current !== null) {
      // @ts-ignore: Object is possibly 'null'.
      window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }
  };

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
        <p onClick={() => scrollToRef(pages.welcome)}>Welcome</p>
        <p onClick={() => scrollToRef(pages.about)}>About me</p>
        <p onClick={() => scrollToRef(pages.contact)}>Contact me</p>
      </div>
    </div>
  );
};
