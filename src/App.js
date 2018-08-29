import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar/>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
