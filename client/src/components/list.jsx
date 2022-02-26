import React from 'react';
import Entry from './entry.jsx';
import styled from 'styled-components';

const ApplicationRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const List = props => {
  const { portfolioArr } = props;
  return (
    <ApplicationRow>
      {portfolioArr.map((portfolio, i) => {
        return <Entry portfolio={portfolio} key={i} />;
      })}
    </ApplicationRow>
  );
};

export default List;
