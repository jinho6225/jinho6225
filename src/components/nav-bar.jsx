import React, { Component } from "react";
import Scroll from "react-scroll";
import styled from "styled-components";

const NavDiv = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #17253a;
  color: #f4fdfb;
`;

let Link = Scroll.Link;

class NavBar extends Component {
  render() {
    return (
      <NavDiv className="row d-flex justify-content-between align-items-center fixed-top m-0 px-5">
        <div
          className="d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center
        col col-12 order-1 col-lg-4 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1"
        >
          <Link
            activeClass="active"
            className="navbar-brand"
            to="Home"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={500}
            delay={500}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Jinho
          </Link>
        </div>
        <div
          className="d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center
        col col-12 order-2 col-lg-8 order-lg-2 col-md-12 order-md-2 col-sm-12 order-sm-1"
        >
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="navbar-brand"
                to="Home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={20}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                Home
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
                offset={20}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="navbar-brand"
                to="TechStack"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={20}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                TechStack
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
                offset={20}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                About
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
                offset={20}
                duration={500}
                delay={500}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </NavDiv>
    );
  }
}

export default NavBar;
