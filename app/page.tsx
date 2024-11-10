import React from "react";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import ContactMe from "./components/contactMe";
import Hero from "./components/hero";


function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default Home;

