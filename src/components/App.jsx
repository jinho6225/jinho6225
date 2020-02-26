import React, { Component } from 'react';
import List from './List.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioArr: [
        {link: "http://memory-match.jinho6225.com", title: "Memory-match", id: 1},
        {link: "http://vanillaJS.jinho6225.com", title: "TodoList-Clock-Weather", id: 2},
        {link: "http://webapp.jinho6225.com", title: "Simple webapp", id: 3},
        {link: "http://gradetable.jinho6225.com", title: "Student-Grade-Table", id: 4},
        {link: "http://pororo-memory-match.jinho6225.com", title: "PoRoRo-Memory-match", id: 5},
        {link: "http://jinho6225.github.io", title: "Jinho's blog", id: 6}
      ]
    }
  }
  render() {
    const { portfolioArr } = this.state;
    return (
      <div>
        <List portfolioArr={portfolioArr} />
      </div>
    )
  }
}

export default App;
