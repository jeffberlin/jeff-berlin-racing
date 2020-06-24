import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Sponsors() {
  return (
    <Row className="justify-content-center">
      <Col>
        <div className="sponsors">
          <h5>Partners</h5>
          <a href="https://www.noblestarrallyteam.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/noble-star-rally-logo-min.png"
              alt="Noble Star Rally logo"
            />
          </a>
          <a href="https://www.spyoptic.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/spy-optic-logo-min.png"
              alt="Spy Optic logo"
            />
          </a>
          <a href="https://www.subaru.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/subaru-logo-min.png"
              alt="Subaru logo"
            />
          </a>
          <a href="https://www.foreverunitedapparel.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/forever-united-apparel-logo-min.png"
              alt="Forever United Apparel logo"
            />
          </a>
          <a href="https://www.ogio.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/ogio-logo-2-min.png"
              alt="Ogio logo"
            />
          </a>
          <a href="http://turbotime.us/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/turbotime-logo-min.png"
              alt="TurboTime logo"
            />
          </a>
          <a href="https://braillebattery.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/braille-battery-logo-2-min.png"
              alt="Braille Battery logo"
            />
          </a>
          <a href="http://www.piaa.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/piaa-logo-min.png"
              alt="PIAA logo"
            />
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default Sponsors;
