import React from 'react';
import Social from './Social';

function About() {
  return (
    <div className="row">
      <Social />
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 order-lg-1 justify-content-center justify-content-md-start">
        <div className="section about">
          <h2 className="section-header">About</h2>
          <span style={{display: 'block'}}>
            <img
              className="img-thumbnail float-left"
              src="./images/jeff-berlin-stpr-2019.jpg"
              alt="Jeff Berlin"
              width={300}
              style={{borderRadius: '8px', marginRight: '1rem'}}
            />
            <p>Born in Wilmington, Delaware in 1991, Berlin had a love for cars and adrenaline since a young age. In 2014, the love of those two things were blended together during his first rallycross. For the first year, Jeff went all over the southeast competing in rallycrosses to gain valuable seat time and practice. The switch from rallycross to stage rally happened in March 2015 at NASA Rallysport's Sandblast Rally and he earned his first class podium finish at Sandblast Rally 2016.</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default About;
