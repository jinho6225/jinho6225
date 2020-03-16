import React, { Component } from "react";
import styled from "styled-components";
import Scroll from "react-scroll";
import Applications from "./applications.jsx";
import TechStack from "./teck-stack.jsx";
import ContactMe from "./contact-me.jsx";
import AboutMe from "./about-me.jsx";
import NavBar from "./nav-bar.jsx";
import Home from "./home.jsx";

let Element = Scroll.Element;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioArr: [
        {
          link: "http://react-flash-card.jinho6225.com",
          title: "Flash-Card",
          github: "https://github.com/jinho6225/react-flash-cards-pt",
          id: 1
        },
        {
          link: "http://vanillaJS.jinho6225.com",
          title: "TodoList-Clock-Weather",
          github: "https://github.com/jinho6225/vanillaJS",
          id: 2
        },
        {
          link: "http://pororo-memory-match.jinho6225.com",
          title: "PoRoRo-Memory-match",
          github: "https://github.com/jinho6225/PororoMemoryMatch",
          id: 3
        },
        {
          link: "http://gradetable.jinho6225.com",
          title: "Student-Grade-Table",
          github: "https://github.com/jinho6225/student-grade-table",
          id: 4
        },
        {
          link: "http://webapp.jinho6225.com",
          title: "Simple webapp",
          github: "https://github.com/jinho6225/webApp-node.js",
          id: 5
        }
      ]
    };
  }
  render() {
    const { portfolioArr } = this.state;
    return (
      <div>
        <Element name="Jinho">
          <NavBar />
        </Element>
        <Element name="Home">
          <Home />
        </Element>
        <Element name="Applications">
          <Applications portfolioArr={portfolioArr} />
        </Element>
        <Element name="TechStack">
          <TechStack />
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
