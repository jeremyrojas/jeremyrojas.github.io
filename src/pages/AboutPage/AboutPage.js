import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './AboutPage.css';

const AboutPage = () =>
(
  <Jumbotron className="jumbo-left">
    <div className="jumbo-left-align">
      <h1 className="main-header-font text-left">About</h1>
      <hr/>
      <div className="main-header-subtitle-font text-left">
        <p>
          I’m currently in my 5th year as software engineer doing full-stack development for Modernizing Medicine in Boca Raton, Florida. Prior to this job, I was doing development for J.P.Morgan. Chase & Co. in Tampa, Florida. I definitely prefer Florida's east coast over its west coast.
        </p>
        <p>
          I work a lot with Java (Spring) and MySQL, as well as HTML/CSS/JavaScript (AngularJS/Angular). More recently, I've picked up learning React; this website is my first project with the library.
        </p>
        <p>
          I've always had a keen eye for UX/UI and really want to get deeper into frontend development. When given the opportunity to work on the frontend, I always feel a spark of empowerment and creativity.
        </p>
        <p>
          When I'm not coding, you can find me swim/bike/run training for a triathlon, hosting my podcast, The Triathlete Beat, or enjoying some delicious craft beers from around the world. Cheers!
        </p>
      </div>
      <div className="social-space">
        <SocialIcon url="https://www.youtube.com/user/jr0fosho" />
        <SocialIcon url="https://itunes.apple.com/us/podcast/the-triathlete-beat-a-triathlon-podcast-for-everyone/id1352884223?mt=2"/>
        <SocialIcon url="https://play.google.com/music/listen?u=0#/ps/Iyxo6hiqgvh6m66iefavqrujxmm"/>
        <SocialIcon url="https://www.instagram.com/hopspotproductions/"/>
      </div>
    </div>

  </Jumbotron>
)

export default AboutPage;
