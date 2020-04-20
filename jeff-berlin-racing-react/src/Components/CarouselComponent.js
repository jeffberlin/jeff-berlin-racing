import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from 'react-bootstrap/Image';
import '../css/carousel.css';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        <div>
          <img src="./images/jeff-berlin-racing-sandblast-rally-jump-min.jpg" alt="Jeff Berlin Sandblast Rally jump" />
        </div>
        <div>
          <img src="./images/jeff-berlin-racing-subaru-interior-min.jpg" alt="Jeff Berlin Subaru interior" />
        </div>
        <div>
          <img src="./images/jeff-berlin-racing-wilson-rallycross-1-min.jpg" alt="Jeff Berlin Wilson Rallycross drift" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
