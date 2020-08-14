import React from "react";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
