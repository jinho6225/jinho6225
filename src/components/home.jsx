import React, { Component } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const HomeDiv = styled.div`
  width: 100%;
  height: 99vh;
  background-color: #0d1522;
  color: #f4fdfb;
`;
const H4 = styled.h4`
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Home extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "HTML5",
        "CSS3",
        "JavaScript(ES6)",
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "how to work with team"
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
        <H4>
          <p>
            <strong>Jinho Myung🏋🏻‍♀️</strong>
          </p>
          <p>
            I know &nbsp;
            <strong
              id="typed"
              style={{ whiteSpace: "pre" }}
              ref={el => {
                this.el = el;
              }}
            ></strong>
            👨🏻‍💻
          </p>
          <p>
            <strong>Full Stack Developer🚀</strong>
          </p>
        </H4>
      </HomeDiv>
    );
  }
}

export default Home;
