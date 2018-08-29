import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const ProjectsPage = () =>
(
  <Jumbotron className="jumbo-left">
    <div className="jumbo-left-align">
      <h1 className="main-header-font text-left">Projects</h1>
      <hr/>
      <div className="main-header-subtitle-font text-left">
        <p>
          Projects coming soon...
        </p>
        <p>
          <span>
            In the mean time, check out my
             <a href="https://github.com/jeremyrojas"> GitHub </a>
            for this site's source code!
          </span>
        </p>
      </div>
      <div className="social-space">
        <SocialIcon url="http://github.com/jeremyrojas" />
      </div>
    </div>

  </Jumbotron>
)

export default ProjectsPage;
