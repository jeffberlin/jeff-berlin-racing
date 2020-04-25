import React from 'react';
import CarouselComponent from "./CarouselComponent.js";
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div className="section photos">
      <h2 className="section-header">Photos</h2>
      <p>
        <Link to="/photos" className="link">See more</Link> photos of the car in action and throughout the build!
      </p>
      <CarouselComponent />
    </div>
  )
}

export default Slider;
