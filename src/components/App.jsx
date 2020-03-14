import React, { Component } from "react";
import styled from "styled-components";
import Scroll from "react-scroll";
import Applications from "./applications.jsx";
import TechSkill from "./teck-stack.jsx";
import ContactMe from "./contact-me.jsx";
import AboutMe from "./about-me.jsx";
import NavBar from "./nav-bar.jsx";
import Home from "./home.jsx";

let Element = Scroll.Element;

class App extends Component {
  render() {
    return (
      <div>
        <Element name="Jinho">
          <NavBar />
        </Element>
        <Element name="Home">
          <Home />
        </Element>
        <Element name="Applications">
          <Applications />
        </Element>
        <Element name="TechSkill">
          <TechSkill />
        </Element>
        <Element name="About">
          <AboutMe />
        </Element>
        <Element name="Contact">
          <ContactMe />
        </Element>
      </div>
    );
  }
}

export default App;
