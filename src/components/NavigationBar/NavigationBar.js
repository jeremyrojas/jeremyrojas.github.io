import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight className="navbar-buttons">
        <NavItem eventKey={1}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to="/projects">Projects</Link>
        </NavItem>
        <NavItem eventKey={4}>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationBar
