import React from 'react';
import CarouselComponent from "./CarouselComponent.js";
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-lg-start">
        <div className="section photos">
          <h2 className="section-header">Photos</h2>
          <p>
            <Link to="/photos" className="link">See more</Link> photos of the car in action and throughout the build!
          </p>
          <CarouselComponent />
        </div>
      </div>
    </div>
  )
}

export default Slider;
