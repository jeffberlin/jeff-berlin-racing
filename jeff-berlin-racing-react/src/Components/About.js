import React from 'react';
import Social from './Social';
import '../css/social.css';

function About() {
  return (
    <div className="row">
      <Social />
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 order-lg-1 justify-content-center justify-content-md-start">
        <div className="section about">
          <h2 className="section-header">About</h2>
          <img
            className="img-thumbnail"
            src="./images/jeff-berlin-headshot.jpg"
            alt="Jeff Berlin"
            width={200}
            style={{marginRight: '1rem'}}
          />
          <span>hello</span>
        </div>
      </div>
    </div>
  )
}

export default About;
