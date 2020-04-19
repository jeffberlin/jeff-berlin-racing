import React from 'react';
import Navigation from './Components/Navigation.js';
import Videos from './Components/Videos.js';
import Social from './Components/Social.js';
import Photos from './Components/Photos.js';
import Sponsors from './Components/Sponsors.js';
import Footer from './Components/Footer.js';
import './css/App.css';
import './css/responsive.css';
import './css/nav.css';
import './css/videos.css';
import './css/social.css';
import './css/sponsors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="background">
        <div className="container-fluid">
          <div className="col-lg-12 col-md-12">
            <div className="content-area">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                  <Social />
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                  <Videos />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <Photos />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col">
                  <Sponsors />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col text-center">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
