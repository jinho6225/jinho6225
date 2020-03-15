import React, { Component } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const HomeDiv = styled.div`
  width: 100%;
  height: 99vh;
  background-color: #fefbf8;
  color: #1a1a1a;
`;
const H4 = styled.h4`
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const A = styled.a`
  display: inline-block;
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid gray;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

class Home extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "HTML5",
        "CSS3",
        "React.js",
        "JavaScript",
        "ES6",
        "jQuery",
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
            <strong>Full Stack Software Engineer</strong>
          </p>
          <p>
            <A
              href="https://github.com/jinho6225"
              role="button"
              target="_blank"
            >
              <i className="fab fa-github"></i>
              &nbsp; Github
            </A>
            <A
              href="https://www.linkedin.com/in/jinho6225"
              role="button"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
              &nbsp; Linkedin
            </A>
            <A
              href="https://jinho6225.github.io/"
              role="button"
              target="_blank"
            >
              <i className="fas fa-rocket"></i>
              &nbsp; Blog
            </A>
          </p>
        </H4>
      </HomeDiv>
    );
  }
}

export default Home;
