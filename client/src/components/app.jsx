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
          // link: 'https://hellometor.herokuapp.com/#/',
          title: 'Hellometer - Data Visualization',
          github: 'https://github.com/jinho6225/hello_meter',
          desc:
            'A full stack Node.js and React.js - Data visualization App',
          id: 1,
          stack: [
            'D3.js',
            'React.js',
            'React Router',
            'Node.js',
            'Express.js',            
            'HTML5',
            'CSS3',
            'Bootstrap 4',
            'Heroku',
          ],
          img: `./assets/hellometer.gif`,
        },
        {
          // link: 'https://patagogo.herokuapp.com/',
          title: 'patagogogo-sales',
          github: 'https://github.com/jinho6225/patagogogo',
          desc: `A full stack Node.js and React.js E-commerce shopping cart app for fashion brand.`,
          id: 2,
          stack: [
            'React.js',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'HTML5',
            'CSS3',
            'Bootstrap 4',
            'Heroku',
          ],
          img: `./assets/pata1.gif`,
        },
        {
          link: 'https://jinho6225.github.io/flashflash-card/',
          title: 'Flash-Card',
          github: 'https://github.com/jinho6225/flash-card',
          desc: 'A Dynamic Flash Card, responsive web App built with React.js.',
          id: 3,
          stack: [
            'React.js',
            'HTML5',
            'CSS3',
            'Bootstrap 4',
            'Sass',
            'localStorage',
          ],
          img: `./assets/flash-card.gif`,
        },
        {
          // link: 'https://gradetable.jinho6225.com',
          title: 'Student-Grade-Table',
          github: 'https://github.com/jinho6225/student-grade-table',
          desc:
            'A fullstack application where teachers can set grades with signedIn status for students. Mobile responsive',
          id: 4,
          stack: [
            'React.js',
            'Context API',
            'JWT',
            'Node.js',
            'Express.js',
            'MySQL',
            'Sequelize',
            'Crypto',
            'Cookie',
            'LocalStorage'            
          ],
          img: `./assets/sgt.gif`,
        },
        {
          // link: 'bnb.jeff-j.me',
          title: 'burgers-n-brew',
          github: 'https://github.com/jeff-jones2020/burgers-n-brew',
          desc:
            'A dynamic mobile-first web application for hungry people who want to find deals on a classic combo - burgers and beer.',
          id: 5,
          stack: [
            'React.js',
            'Node.js',
            'Express.js',
            'Passport.js',
            'React Router',
            'PostgreSQL',
            'AWS EC2',
            'bcrypt 4',
            'Webpack 4',
          ],
          img: `./assets/bnb.gif`,
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

// {
//   link: 'http://pororo-memory-match.jinho6225.com',
//   title: 'PoRoRo-Memory-match',
//   github: 'https://github.com/jinho6225/pororo-memory-match',
//   desc:
//     'A JavaScript memory matching application based on the pororo animation.',
//   id: 5,
//   stack: ['JavaScript', 'HTML5', 'CSS3', 'Flexbox'],
//   img: `dist/assets/pororo.gif`,
// },
