import React, { Component } from 'react';
import './App.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Image } from 'react-bootstrap';
import profilePic from'./profile-pic.png';
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  render() {
    return (
      <div className="App">

{/*        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="navbar-buttons">
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Projects
              </NavItem>
              <NavItem eventKey={3} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
*/}
        <Jumbotron className="jumbo">
          <Grid>
            <Image width={200} className="img-fluid" src={profilePic} circle />
          </Grid>
          <div className="jumbo-text">
            <h1 className="main-header-font">Hi, I'm Jeremy Rojas!</h1>
            <p className="main-header-subtitle-font">
              I'm a software engineer and I love to create with code.
            </p>
          </div>
          <div>
            <SocialIcon url="https://github.com/jeremyrojas" className="social-icon-left"/>
            <SocialIcon url="https://www.linkedin.com/in/jeremytrojas/jeremy_tri"/>
            <SocialIcon url="https://twitter.com/jeremy_tri"/>
            <SocialIcon url="https://www.instagram.com/jeremy_tri/"/>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
