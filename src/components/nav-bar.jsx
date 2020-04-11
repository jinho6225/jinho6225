import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';

let Link = Scroll.Link;

const NavDiv = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  color: #fef7f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  position: fixed;
  top: 0;
  z-index: 1;
  @media (max-width: 640px) {
    padding: 1% 5%;
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  margin: 1%;
  width: 50%;
  @media (max-width: 640px) {
    width: 100%;
    margin-left: 2%;
    padding: 1%;
  }
`;
const NavList = styled.div`
  font-size: 1rem;
  margin: 1%;
  width: 50%;
  @media (max-width: 640px) {
    width: 100%;
    margin-left: 2%;
    padding: 1%;
  }
`;
const Ultag = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
  cursor: pointer;
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Litag = styled.li`
  margin: 0 2%;
  @media (max-width: 640px) {
    margin: 0.5% 2%;
  }
`;
const H4 = styled.h4`
  font-weight: 900;
  color: 3c3c3c;
  text-shadow: 1px 1px 2px black, 0 0 25px pink, 0 0 5px yellow;
  margin: 0;
  transition: font-size 0.3s;
  &:hover {
    font-size: 1.8rem;
  }
`;
const Span = styled.span`
  font-size: 1.1rem;
  color: 3c3c3c;
  text-shadow: 1px 1px 2px black, 0 0 25px pink;
  transition: font-size 0.3s;
  &:hover {
    font-size: 1.3rem;
    text-decoration: underline;
  }
`;
const A = styled(Link)`
  cursor: pointer;
`;

class NavBar extends Component {
  render() {
    return (
      <NavDiv>
        <Title>
          <A
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={5}
            duration={500}
            delay={500}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            <H4>Jinho Myung🔥</H4>
          </A>
        </Title>
        <NavList>
          <Ultag>
            {/* <Litag>
              <A
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={5}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>Home</Span>
              </A>
            </Litag> */}
            <Litag>
              <A
                activeClass="active"
                to="Applications"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={5}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>Applications</Span>
              </A>
            </Litag>
            <Litag>
              <A
                activeClass="active"
                to="TechStack"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={5}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>TechStacks</Span>
              </A>
            </Litag>
            <Litag>
              <A
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={5}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>About</Span>
              </A>
            </Litag>
            <Litag>
              <A
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={5}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>Contact</Span>
              </A>
            </Litag>
          </Ultag>
        </NavList>
      </NavDiv>
    );
  }
}

export default NavBar;
