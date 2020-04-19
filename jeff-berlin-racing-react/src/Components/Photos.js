import React from 'react';
import CarouselComponent from "./CarouselComponent.js";

function Photos() {
  return (
    <div className="section photos">
      <h2 className="section-header">Photos</h2>
      <p>
        <a href="#photos" className="link">See more</a> photos of the car in action and throughout the build!
      </p>
      <CarouselComponent />
    </div>
  )
}

export default Photos;
