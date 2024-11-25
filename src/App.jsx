import React from "react"

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contect from "./components/Contect/Contect";

const Details = {
  name: "Arya Shewde",
  title: ["Web Developer", "Full Stack Developer", "ReactJs Developer", "FrontEnd Developer"],
  email: "aryashewde2@example.com",
  gitHub: "aryashewde",
  instagram: "",
  linkedIn: "arya-shewde-63805825a",
  twitter: "",
  youTube: "",
};

function App() {

  return (
    <div id="main">
      <Header />
      <Home name={Details.name} title={Details.title} />
      <About />
      <Portfolio />
      <Contect/>
      <Footer {...Details}/>
    </div>
  )
}

export default App
