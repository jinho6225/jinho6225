import React, { Component } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const HomeDiv = styled.div`
  width: 100%;
  height: 99vh;
  background-color: #0d1522;
  color: #f4fdfb;
  margin: 0.5rem;
  position: relative;
`;
const H4 = styled.h4`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Home extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "am Full Stack Developer👨🏻‍💻",
        "am Software Engineer🚀",
        "am still learing🙇🏻‍♂️",
        "like to learn new thing😍"
        "won't stop to learning!👊🏻"
      ],
      typeSpeed: 150,
      startDelay: 500,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <HomeDiv>
        <H3 className="page-2-h4">
          <p>
            <strong>Jinho Myung</strong>
          </p>
          I &nbsp;
          <strong
            id="typed"
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          ></strong>
        </H3>
      </HomeDiv>
    );
  }
}

export default Home;
