import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SiteTitle from './components/SiteTitle';
import NavBar from './components/NavBar';
import HomeImages from './components/HomeImages';
import CommercialEditorial from './components/CommercialEditorial';
import Portraits from './components/Portraits';
import PhotoSeries from './components/PhotoSeries';
import Videos from './components/Videos';
import ConceptualPersonal from './components/ConceptualPersonal';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <SiteTitle />
            <NavBar />
          </div>
          <div>
            <Route exact path="/" component={HomeImages} />
            <Route exact path="/commercial_editorial" component={CommercialEditorial} />
            <Route exact path="/portraits" component={Portraits} />
            <Route exact path="/photo_series" component={PhotoSeries} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/conceptual_personal" component={ConceptualPersonal} />
          </div>





        </div>
      </Router>
    );
  }
}

export default App;
