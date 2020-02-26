import React from 'react';
import Entry from './Entry.jsx'

const List = (props) => {
  const { portfolioArr } = props
    return (
      <div>
        <h3>please check links below</h3>
        <ul>
          {portfolioArr.map((el, i) => {
            return <Entry portfolio={el} key={el.id}/>
          })}
        </ul>
      </div>
    )
}

export default List;
