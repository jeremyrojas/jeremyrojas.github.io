import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const ContactPage = () =>
(
  <Jumbotron className="jumbo-left">
    <div className="jumbo-left-align">
      <h1 className="main-header-font text-left">Contact</h1>
      <hr/>
      <div className="main-header-subtitle-font text-left">
        <p>
          Let's chat!
        </p>
      </div>
      <div className="social-space">
        <SocialIcon url="http://jeremytri.com/about-me/" network="squarespace"/>
        <SocialIcon url="mailto:jtan.rojas@gmail.com" network="email" color="#ff5a01"/>
      </div>
    </div>

  </Jumbotron>
)

export default ContactPage;
