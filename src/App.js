import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Image, Col, Row } from 'react-bootstrap';
import profilePic from'./profile-pic2.jpg';
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Projects
          </NavItem>
          <NavItem eventKey={2} href="#">
            About
          </NavItem>
          <NavItem eventKey={3} href="#">
            Contact
          </NavItem>
        </Nav>
      </Navbar>
      <Jumbotron>
        <h1 class="main-header-font">Hi, I'm Jeremy Rojas!</h1>
        <p class="main-header-subtitle-font">
          I'm a software engineer and I love to create.
        </p>
        <div>
          <SocialIcon url="https://www.linkedin.com/in/jeremytrojas/jeremy_tri"/>
          <SocialIcon url="https://github.com/jeremytrojas"/>
          <SocialIcon url="https://twitter.com/jeremy_tri"/>
          <SocialIcon url="https://www.instagram.com/jeremy_tri/"/>
          <SocialIcon url="https://www.youtube.com/user/jr0fosho/"/>
          <SocialIcon url="http://jeremytri.com/"/>
          // <a href="https://dev.to/jeremyrojas">
          //   <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Jeremy Rojas's DEV Profile" height="30" width="30" />
          // </a>
        </div>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
