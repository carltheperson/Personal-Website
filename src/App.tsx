import React, { useRef } from "react";

import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const pageRefs = {
    welcome: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const pagesContext = React.createContext(pageRefs);

  return (
    <div>
      <Header pageContext={pagesContext} />
      <Welcome ref_={pageRefs.welcome} pageContext={pagesContext} />
      <About ref_={pageRefs.about} />
      <Contact ref_={pageRefs.contact} />
      <Footer pageContext={pagesContext} />
    </div>
  );
}

export default App;
