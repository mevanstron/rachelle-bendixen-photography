import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SiteTitle from './components/SiteTitle';
import NavBar from './components/NavBar';
import HomeImages from './components/HomeImages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SiteTitle />
          <NavBar />
          <HomeImages />

          <Route exact to="/" component={HomeImages} />
        </div>
      </Router>
    );
  }
}

export default App;
