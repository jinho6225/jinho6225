import React from 'react';

const Entry = (props) => {
  const { portfolio } = props
    return (
      <div>
          <li key={portfolio.id}><a href={portfolio.link}>{portfolio.title}</a></li>
      </div>
    )
}

export default Entry;
