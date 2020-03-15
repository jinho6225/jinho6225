import React, { Component } from "react";
import Scroll from "react-scroll";
import styled from "styled-components";

let Link = Scroll.Link;

const NavDiv = styled.div`
  width: 100%;
  background-color: #17253a;
  color: #f4fdfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  position: fixed;
  top: 0;
  @media (max-width: 576px) {
    padding: 1% 5%;
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  margin: 1%;
  width: 50%;
  @media (max-width: 576px) {
    width: 100%;
    margin-left: 2%;
    padding: 1%;
  }
`;
const NavList = styled.div`
  font-size: 1rem;
  margin: 1%;
  width: 50%;
  @media (max-width: 576px) {
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
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Litag = styled.li`
  margin: 0 2%;
  @media (max-width: 576px) {
    margin: 0.5% 2%;
  }
`;
const H4 = styled.h4`
  font-weight: 900;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px pink, 0 0 5px yellow;
  margin: 0;
`;
const Span = styled.span`
  font-size: 1rem;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px pink;
`;

class NavBar extends Component {
  render() {
    return (
      <NavDiv>
        <Title>
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={10}
            duration={500}
            delay={500}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            <H4>Jinho Myung🔥</H4>
          </Link>
        </Title>
        <NavList>
          <Ultag>
            <Litag>
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={10}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>Home</Span>
              </Link>
            </Litag>
            <Litag>
              <Link
                activeClass="active"
                to="Applications"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={10}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>Applications</Span>
              </Link>
            </Litag>
            <Litag>
              <Link
                activeClass="active"
                to="TechSkill"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={10}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>TechSkill</Span>
              </Link>
            </Litag>
            <Litag>
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={10}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>About</Span>
              </Link>
            </Litag>
            <Litag>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={10}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                <Span>Contact</Span>
              </Link>
            </Litag>
          </Ultag>
        </NavList>
      </NavDiv>
    );
  }
}

export default NavBar;
