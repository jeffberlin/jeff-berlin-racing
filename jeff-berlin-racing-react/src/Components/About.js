import React from 'react';
import Social from './Social';

function About() {
  return (
    <div classNam="row">
      <Social />
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 order-lg-1 justify-content-center justify-content-md-start">
        <div className="section about">
          <h2 className="section-header">About</h2>
          <p>Jeff was born in January 1991 in Wilmington, Delaware. Since an early age, he was constantly playing sports and trying to get his andrenaline fix.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
