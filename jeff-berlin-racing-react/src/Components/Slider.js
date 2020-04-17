import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../css/slider.css';

const fadeImages = [
  './images/jeff-berlin-racing-sandblast-rally-jump-min.jpg',
  './images/jeff-berlin-racing-subaru-interior-min.jpg',
  './images/jeff-berlin-racing-wilson-rallycross-1-min.jpg',
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slider = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[0]}
              alt="Sandblast Rally jump"
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[1]}
              alt="Subaru race car interior"
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[2]}
              alt="Wilson Rallycross Subaru slide"
            />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slider;
