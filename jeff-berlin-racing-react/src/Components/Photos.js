import React from 'react';
import Slider from './Slider.js';

function Photos() {
  return (
    <div className="section photos">
      <h2 className="section-header">Photos</h2>
      <p>
        <a href="#photos" className="link">See More</a> photos of the car in action and throughout the build!
      </p>
      <Slider />
    </div>
  )
}

export default Photos;
