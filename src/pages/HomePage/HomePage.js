import React from 'react'
import { Grid, Jumbotron, Image } from 'react-bootstrap';
import profilePic from'./../../profile-pic.png';
import { SocialIcon } from 'react-social-icons';
// import { Switch, Route } from 'react-router-dom'
// import Home from './Home'
// import AboutPage from './pages/AboutPage'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const HomePage = () => (
  <Jumbotron className="jumbo">
    <Grid>
      <Image width={200} className="img-fluid" src={profilePic} circle />
    </Grid>
    <h1 className="main-header-font">Hi, I'm Jeremy Rojas!</h1>
    <p className="main-header-subtitle-font">
      I'm a software engineer and I love to create with code.
    </p>
    <div>
      <SocialIcon url="https://www.linkedin.com/in/jeremytrojas/jeremy_tri"/>
      <SocialIcon url="https://github.com/jeremytrojas"/>
      <SocialIcon url="https://twitter.com/jeremy_tri"/>
      <SocialIcon url="https://www.instagram.com/jeremy_tri/"/>
    </div>
  </Jumbotron>
)

export default HomePage
