import React, { Component } from 'react';
import SiteTitle from './components/SiteTitle';
import NavBar from './components/NavBar';
import HomeImages from './components/HomeImages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SiteTitle />
        <NavBar />
        <div>Image Index</div>
        <HomeImages />
      </div>
    );
  }
}

export default App;
