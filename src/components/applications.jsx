import React from "react";
import List from "./list.jsx";
import styled from "styled-components";

const ApplicationDiv = styled.div`
  width: 100%;
  height: 200vh;
  background-color: #fef7f1;
  color: #1a1a1a;
  padding: 5%;
  @media (max-width: 1200px) {
    height: 260vh;
  }
  @media (max-width: 900px) {
    height: 400vh;
  }
  @media (max-width: 640px) {
    height: 370vh;
  }
  @media (max-width: 540px) {
    height: 370vh;
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ApplicationContainer = styled.div`
  width: 100%;
  margin: 2% auto;
  height: 100%;
`;

class Applications extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { portfolioArr } = this.props;

    return (
      <ApplicationDiv>
        <Title>
          <h1>Applications</h1>
        </Title>
        <ApplicationContainer>
          <List portfolioArr={portfolioArr} />
        </ApplicationContainer>
      </ApplicationDiv>
    );
  }
}

export default Applications;
