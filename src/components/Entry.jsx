import React from "react";
import styled from "styled-components";

const ApplicationCol = styled.div`
  width: 26%;
  border: 1px solid #d5d5d5;
  border-radius: 16px;
  margin: 1% 0.5%;
  padding: 0.5rem 0.5rem;
  @media (max-width: 1200px) {
    width: 35%;
    height: 35%;
    margin: 2% auto;
  }
  @media (max-width: 900px) {
    width: 51%;
    height: 51%;
    margin: 2% auto;
  }
  @media (max-width: 640px) {
    width: 65%;
    height: 65%;
    margin: 2% auto;
  }
  @media (max-width: 540px) {
    width: 80%;
    height: 80%;
    margin: 2% auto;
  }
`;
const TechDiv = styled.div`
  padding: 1% 1%;
  margin: 1% 0.5%;
`;
const InsideTitle = styled.div`
  padding: 0.2rem 1rem;
`;
const InsideDesc = styled.div`
  padding: 0.2rem 0.2rem;
`;
const InsideStack = styled.div`
  margin: 0.1rem;
  display: flex;
  flex-wrap: wrap;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
const P1 = styled.p`
  font-size: 1.2rem;
  text-align: center;
  text-shadow: 1px 1px 2px black, 0 0 25px pink;
  margin: 5px 0;
`;
const P2 = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 1px 1px;
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
  color: #787878;
  font-size: 1.1rem;
  border: 1px solid #d5d5d5;
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin: 0.2rem;
  transition: font-size 0.3s;
  &:hover {
    font-size: 1.3rem;
  }
`;
const Span = styled.span`
  font-size: 0.9rem;
  color: #fefbf8;
  transition: font-size 0.3s;
  padding: 0.1rem 0.25rem;
  margin: 0.1rem;
  border-radius: 0.25rem;
  background-color: #f7b7cd;
  &:hover {
  }
`;
const Entry = props => {
  const { portfolio } = props;
  const stackArr = portfolio.stack;
  const stacks = stackArr.map((stack, i) => {
    return <Span key={i}>{stack}</Span>;
  });
  return (
    <ApplicationCol>
      <TechDiv>
        <Img src="https://cdn.svgporn.com/logos/javascript.svg" id="js" />
        <InsideTitle>
          <P1>{portfolio.title}</P1>
        </InsideTitle>
        <InsideDesc>
          <P2>{portfolio.desc}</P2>
        </InsideDesc>
        <InsideStack>{stacks}</InsideStack>
        <Litag key={portfolio.id}>
          <A href={portfolio.link}>
            <i className="fas fa-link"></i>
            &nbsp;Live
          </A>
          <A href={portfolio.github}>
            <i className="fab fa-github"></i>
            &nbsp;Github
          </A>
        </Litag>
      </TechDiv>
    </ApplicationCol>
  );
};

export default Entry;
