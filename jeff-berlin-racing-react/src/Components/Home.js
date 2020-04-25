import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './Videos';
import Social from './Social';
import Slider from './Slider';
import '../css/videos.css';
import '../css/social.css';

function Home() {
  return (
    <div>
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 order-lg-2 justify-content-center justify-content-sm-start">
        <Social />
      </div>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 order-lg-1 justify-content-center justify-content-md-start">
        <Videos />
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-lg-start">
        <Slider />
      </div>
    </div>
  </div>
  )
}

export default Home;
