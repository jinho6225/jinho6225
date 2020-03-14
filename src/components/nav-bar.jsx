import React, { Component } from "react";
import Scroll from "react-scroll";
import styled from "styled-components";
import Responsive from "react-responsive";

let Link = Scroll.Link;

const Ultag = styled.ul`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const NavDiv = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #17253a;
  color: #f4fdfb;
  @media (max-width: 767px) {
    height: 35vh;
  }
`;
const H4 = styled.h4`
  font-weight: 900;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px pink, 0 0 5px yellow;
  margin: 0;
`;
const Span = styled.span`
  font-size: 1.2rem;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px pink;
`;

class NavBar extends Component {
  render() {
    return (
      <NavDiv className="row d-flex justify-content-between align-items-center fixed-top m-0 px-5">
        <div
          className="d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center
        col col-lg-4 order-lg-1 col-md-4 order-md-1 col-sm-12 order-sm-1 col-12 order-1 w-40"
        >
          <Link
            activeClass="active"
            className="navbar-brand"
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
            <H4>Jinho Myung</H4>
          </Link>
        </div>
        <div
          className="d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center
        col col-lg-4 order-lg-1 col-md-8 order-md-1 col-sm-12 order-sm-1 col-12 order-1"
        >
          <Ultag className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="navbar-brand"
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
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="navbar-brand"
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
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="navbar-brand"
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
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="navbar-brand"
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
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="navbar-brand"
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
            </li>
          </Ultag>
        </div>
      </NavDiv>
    );
  }
}

export default NavBar;
