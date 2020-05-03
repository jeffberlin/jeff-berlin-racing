import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './Videos';
import Social from './Social';
import Slider from './Slider';
import '../css/videos.css';
import '../css/social.css';

function Home() {
  return (
    <>
      <div className="row">
        <Social />
        <Videos />
      </div>
      <Slider />
    </>
  )
}

export default Home;
