import React from 'react';
import List from './List.jsx';
import styled from 'styled-components';

const ApplicationDiv = styled.div`
  width: 100%;
  height: 225vh;
  background-color: #fef7f1;
  color: #1a1a1a;
  padding: 5%;

  @media (max-width: 900px) {
    height: 350vh;
  }
  @media (max-width: 736px) {
    height: 350vh;
  }
  @media (max-width: 736px) and (orientation: landscape) {
    height: 480vh;
  }
  @media (max-width: 640px) {
    height: 525vh;
  }
  @media (max-width: 540px) {
    height: 525vh;
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
