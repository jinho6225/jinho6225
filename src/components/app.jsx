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
          link: 'https://gradetable.jinho6225.com',
          title: 'Student-Grade-Table',
          github: 'https://github.com/jinho6225/student-grade-table',
          desc:
            'A fullstack application where teachers can set grades with signedIn status for students. Mobile responsive',
          id: 1,
          stack: [
            'React.js',
            'React Router',
            'Context API',
            'Bootstrap 4',
            'Styled Components',
            'CSS3',
            'SASS',
            'Node.js',
            'Express.js',
            'MySQL2',
            'Sequelize',
            'JWT',
            'Crypto',
            'Cookie',
            'LocalStorage',
            'AWS EC2',
          ],
          img: `dist/assets/sgt.gif`,
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
          link: 'https://flash-card.jinho6225.com',
          title: 'Flash-Card',
          github: 'https://github.com/jinho6225/flash-card',
          desc: 'A Dynamic Flash Card, responsive web App built with React.js.',
          id: 3,
          stack: [
            'React.js',
            'Bootstrap 4',
            'CSS3',
            'Sass',
            'HTML5',
            'localStorage',
          ],
          img: `dist/assets/flash-card.gif`,
        },
        {
          link: 'https://jinhomyung.pythonanywhere.com/',
          title: 'Todo App (Django Template)',
          github: 'https://github.com/jinho6225/django_todo',
          desc:
            'what Django is all about. basics of creating a simple todo app.',
          id: 4,
          stack: [
            'Variable CSS',
            'HTML5',
            'Python',
            'Django',
            'Django template',
            'Sqlite3'
          ],
          img: 'dist/assets/django_template.gif',
        },
        {
          link: 'https://jinho6225.pythonanywhere.com/',
          title: 'Todo List with Django REST api',
          github: 'https://github.com/jinho6225/todo_drf',
          desc:
            'Todo App (Django REST framework + Vanilla JavaScript)',
          id: 5,
          stack: [
            'Vanilla JavaScript',
            'Variable CSS',
            'HTML5',
            'Python',
            'Django',
            'Django REST framework',
            'Sqlite3'
          ],
          img: `dist/assets/todo.gif`,
        },
        {
          link: 'https://jhmyung.pythonanywhere.com/',
          title: 'Todo List with Django RESTful api + React.js',
          github: 'https://github.com/jinho6225/todo_drf_react',
          desc:
            'Todo App (Django REST framework + React.js) / SPA(Single Page Application)',
          id: 6,
          stack: [
            'React.js',
            'Variable CSS',
            'HTML5',
            'Python',
            'Django',
            'Django RESTful API',
            'Sqlite3'
          ],
          img: `dist/assets/django_react_todo.gif`,
        },
        {
          link: 'https://burgers-n-brew.jinho6225.com/',
          title: 'burgers-n-brew',
          github: 'https://github.com/jeff-jones2020/burgers-n-brew',
          desc:
            'A dynamic mobile-first web application for hungry people who want to find deals on a classic combo - burgers and beer.',
          id: 7,
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
