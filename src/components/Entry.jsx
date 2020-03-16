import React from "react";
import styled from "styled-components";

const ApplicationCol = styled.div`
  width: 29%;
  border: 1px solid black;
  margin: 1%;
  padding: 1%;
  @media (max-width: 640px) {
    width: 60%;
    height: 60%;
    margin: 2% auto;
  }
`;
const Tech = styled.div`
  padding: 1% 1%;
  margin: 1% 0.5%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 5px 0;
`;
const Litag = styled.li`
  margin: 0 2%;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  list-style-type: none;
  cursor: pointer;
  @media (max-width: 640px) {
    margin: 0.5% 2%;
  }
`;
const A = styled.a`
  cursor: pointer;
  color: #1a1a1a;
  font-size: 1.1rem;
  border: 1px solid gray;
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin: 0.2rem;
  transition: font-size 0.3s;
  &:hover {
    font-size: 1.3rem;
  }
`;

const Entry = props => {
  const { portfolio } = props;
  return (
    <ApplicationCol>
      <Tech>
        <Img src="https://cdn.svgporn.com/logos/javascript.svg" id="js" />
        <P>{portfolio.title}</P>
        <Litag key={portfolio.id}>
          <A href={portfolio.link}>
            <i class="fas fa-link"></i>
            &nbsp;Live
          </A>
          <A href={portfolio.github}>
            <i className="fab fa-github"></i>
            &nbsp;Github
          </A>
        </Litag>
      </Tech>
    </ApplicationCol>
  );
};

export default Entry;
