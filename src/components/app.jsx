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
          link: 'https://flash-card.jinho6225.com',
          title: 'Flash-Card',
          github: 'https://github.com/jinho6225/flash-card',
          desc: 'A Dynamic Flash Card, responsive web App built with React.js.',
          id: 1,
          stack: [
            'React.js',
            'Bootstrap4',
            'CSS3',
            'Sass',
            'HTML5',
            'localStorage',
          ],
          img: `dist/assets/flash-card.gif`,
        },
        {
          link: 'https://patagogogo.jinho6225.com/',
          title: 'patagogogo-sales',
          github: 'https://github.com/jinho6225/patagogogo',
          desc: `A full stack Node.js and React.js E-commerce shopping cart app for fashion brand.`,
          id: 2,
          stack: [
            'React.js',
            'Bootstrap 4',
            'CSS3',
            'Webpack 4',
            'PostgreSQL',
            'HTML5',
            'Node.js',
            'Express.js',
            'AWS EC2',
          ],
          img: `dist/assets/pata1.gif`,
        },
        {
          link: 'https://bnb.jeff-j.me',
          title: 'burgers-n-brew',
          github: 'https://github.com/jeff-jones2020/burgers-n-brew.git',
          desc:
            'A dynamic mobile-first web application for hungry people who want to find deals on a classic combo - burgers and beer.',
          id: 3,
          stack: [
            'React.js',
            'SASS',
            'Node.js',
            'Express.js',
            'Passport.js',
            'React Router',
            'PostgreSQL',
            'Bootstrap 4',
            'AWS EC2',
            'bcrypt 4',
            'Webpack 4',
          ],
          img: `dist/assets/bnb.gif`,
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
            'MySQL',
          ],
          img: `https://cdn.svgporn.com/logos/javascript.svg`,
        },
        {
          link: 'http://pororo-memory-match.jinho6225.com',
          title: 'PoRoRo-Memory-match',
          github: 'https://github.com/jinho6225/PororoMemoryMatch',
          desc:
            'A JavaScript memory matching application based on the pororo animation.',
          id: 5,
          stack: ['JavaScript', 'HTML5', 'CSS3', 'Flexbox'],
          img: `dist/assets/pororo.gif`,
        },
      ],
    };
  }
  render() {
    const { portfolioArr } = this.state;
    return (
      <div>
        <Element name="Title">
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
