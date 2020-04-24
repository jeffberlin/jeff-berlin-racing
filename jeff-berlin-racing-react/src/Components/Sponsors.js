import React from 'react';
import Image from 'react-bootstrap/Image';

const sponsorStyle = {
  height: 30,
  marginBottom: '1.2rem'
}

function Sponsors() {
  return (
    <div className="section sponsors">
      <a href="https://www.noblestarrallyteam.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/noble-star-rally-logo-min.png"
          alt="Noble Star Rally logo"
          style={sponsorStyle}
        />
      </a>
      <a href="https://www.spyoptic.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/spy-optic-logo-min.png"
          alt="Spy Optic logo"
          style={sponsorStyle}
        />
      </a>
      <a href="https://www.subaru.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/subaru-logo-min.png"
          alt="Subaru logo"
          style={sponsorStyle}
        />
      </a>
      <a href="https://www.foreverunitedapparel.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/forever-united-apparel-logo-min.png"
          alt="Forever United Apparel logo"
          style={sponsorStyle}
        />
      </a>
      <a href="https://www.ogio.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/ogio-logo-2-min.png"
          alt="Ogio logo"
          style={sponsorStyle}
        />
      </a>
      <a href="http://turbotime.us/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/turbotime-logo-min.png"
          alt="TurboTime logo"
          style={sponsorStyle}
        />
      </a>
      <a href="https://braillebattery.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/braille-battery-logo-2-min.png"
          alt="Braille Battery logo"
          style={sponsorStyle}
        />
      </a>
      <a href="http://www.piaa.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="./images/piaa-logo-min.png"
          alt="PIAA logo"
          style={sponsorStyle}
        />
      </a>
    </div>
  )
}

export default Sponsors;
