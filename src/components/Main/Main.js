import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './../../pages/HomePage/HomePage';
import AboutPage from './../../pages/AboutPage/AboutPage';
import ProjectsPage from './../../pages/ProjectsPage/ProjectsPage';
import ContactPage from './../../pages/ContactPage/ContactPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/about' component={AboutPage}/>
      <Route path='/projects' component={ProjectsPage}/>
      <Route path='/contact' component={ContactPage}/>
    </Switch>
  </main>
)

export default Main
