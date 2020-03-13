import React, { Component } from "react";
import Home from "./home.jsx";
import Applications from "./applications.jsx";
import TeckStack from "./teck-stack.jsx";
import ContactMe from "./contact-me.jsx";
import AboutMe from "./about-me.jsx";
import NavBar from "./nav-bar.jsx";
import styled from "styled-components";
import Scroll from "react-scroll";

let Element = Scroll.Element;

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Element name="Home">
          <Home />
        </Element>
        <Element name="Applications">
          <Applications />
        </Element>
        <Element name="TechStack">
          <TeckStack />
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
