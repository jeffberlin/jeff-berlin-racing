import React from 'react';
import CarouselComponent from "./CarouselComponent.js";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Slider() {
  return (
    <Row>
        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center justify-content-lg-start">
        <div className="section photos">
          <h2 className="section-header">Photos</h2>
          <p>
            <Link to="/photos" className="link">See more</Link> photos of the car in action and throughout the build!
          </p>
          <CarouselComponent />
        </div>
      </Col>
    </Row>
  )
}

export default Slider;
