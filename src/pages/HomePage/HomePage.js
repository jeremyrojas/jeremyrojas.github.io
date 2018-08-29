import React from 'react'
import { Grid, Jumbotron, Image } from 'react-bootstrap';
import profilePic from'./../../profile-pic.png';
import { SocialIcon } from 'react-social-icons';

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
      <SocialIcon url="https://github.com/jeremyrojas"/>
      <SocialIcon url="https://twitter.com/jeremy_tri"/>
      <SocialIcon url="https://www.instagram.com/jeremy_tri/"/>
    </div>
  </Jumbotron>
)

export default HomePage
