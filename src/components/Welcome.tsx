import React, { useContext } from "react";
import Typed from "react-typed";
import "./css/Welcome.css";

const down = require("../media/down.svg");

interface Props {
  ref_: React.MutableRefObject<null>;
  pageContext: React.Context<{
    welcome: React.MutableRefObject<null>;
    about: React.MutableRefObject<null>;
    contact: React.MutableRefObject<null>;
  }>;
}

export const Welcome: React.FC<Props> = ({ ref_, pageContext }) => {
  const pages = useContext(pageContext);

  const scrollToRef = (ref: React.MutableRefObject<null>) => {
    if (ref !== null && ref.current !== null) {
      // @ts-ignore: Object is possibly 'null'.
      window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }
  };

  return (
    <div className="welcome" ref={ref_}>
      <div>
        <h1>
          <Typed strings={["Hi, and welcome!"]} typeSpeed={60} />
        </h1>
        <p className="welcome-text">
          This is my personal website, <br /> feel free to look around.{" "}
        </p>

        <p className="about">About me</p>
        <div className="image-container">
          <img src={down} alt="down" onClick={() => scrollToRef(pages.about)} />
        </div>
      </div>
    </div>
  );
};
