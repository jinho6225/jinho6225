import React, { Component } from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import Applications from './applications.jsx';
import TechStack from './teck-stack.jsx';
import ContactMe from './contact-me.jsx';
import AboutMe from './about-me.jsx';
import NavBar from './nav-bar.jsx';
import Home from './home.jsx';

let Element = Scroll.Element;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioArr: [
        {
          link: 'http://react-flash-card.jinho6225.com',
          title: 'Flash-Card',
          github: 'https://github.com/jinho6225/react-flash-cards-pt',
          desc:
            'Aliquip sit eu amet nulla id veniam it. Elit nulla laborum aute minim aliqua eiusmod sint officia culpa incididunt labore officia et do.',
          id: 1,
          stack: ['React.js', 'Bootstrap', 'HTML', 'CSS', 'localStorage'],
          img: `https://cdn.svgporn.com/logos/javascript.svg`
        },
        {
          link: 'http://vanillaJS.jinho6225.com',
          title: 'TodoList-Clock-Weather',
          github: 'https://github.com/jinho6225/vanillaJS',
          desc: `Used local-storage to store user name and todo list, Used Open source API for openweathermap & unsplash.
            based on time, it will greet morning, afternoon, evening and based on weather condition, background image will be decided.`,
          id: 2,
          stack: [
            'JavaScript',
            'HTML5',
            'localStorage',
            'openSourceAPI',
            'CSS3'
          ],
          img: `dist/assets/todoClockWeather.gif`
        },
        {
          link: 'http://pororo-memory-match.jinho6225.com',
          title: 'PoRoRo-Memory-match',
          github: 'https://github.com/jinho6225/PororoMemoryMatch',
          desc:
            'A JavaScript memory matching application based on the pororo animation.',
          id: 3,
          stack: ['JavaScript', 'HTML5', 'CSS3', 'Flexbox'],
          img: `dist/assets/pororoMemoryMatch.png`
        },
        {
          link: 'http://gradetable.jinho6225.com',
          title: 'Student-Grade-Table',
          github: 'https://github.com/jinho6225/student-grade-table',
          desc:
            'Aliquip sitate ullamco velit. Elit nulla laborum aute minim aliqua eiusmod sint officia culpa incididunt labore officia et do.',
          id: 4,
          stack: [
            'React.js',
            'Bootstrap',
            'styledComponents',
            'Node.js',
            'Express',
            'MySQL'
          ],
          img: `https://cdn.svgporn.com/logos/javascript.svg`
        },
        {
          link: 'http://webapp.jinho6225.com',
          title: 'Simple webapp',
          github: 'https://github.com/jinho6225/webApp-node.js',
          desc:
            'Aliquip sit eu amet nulla id veniam amet ut voluptate ullamcute minim aliqua eiusmod sint officia culpa incididunt labore officia et do.',
          id: 5,
          stack: ['Node.js', 'Bootstrap'],
          img: `https://cdn.svgporn.com/logos/javascript.svg`
        }
      ]
    };
  }
  render() {
    const { portfolioArr } = this.state;
    return (
      <div>
        <Element name="Jinho">
          <NavBar />
        </Element>
        <Element name="Home">
          <Home />
        </Element>
        <Element name="Applications">
          <Applications portfolioArr={portfolioArr} />
        </Element>
        <Element name="TechStack">
          <TechStack />
        </Element>
        <Element name="About">
          <AboutMe />
        </Element>
        <Element name="Contact">
          <ContactMe />
        </Element>
      </div>
    );
  }
}

export default App;
