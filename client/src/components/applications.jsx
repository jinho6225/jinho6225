import React from 'react';
import List from './list.jsx';
import styled from 'styled-components';

const ApplicationDiv = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  color: #fef7f1;
  padding: 5%;

  @media (max-width: 900px) {
  }
  @media (max-width: 736px) {
  }
  @media (max-width: 736px) and (orientation: landscape) {
  }
  @media (max-width: 640px) {
  }
  @media (max-width: 540px) {
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
