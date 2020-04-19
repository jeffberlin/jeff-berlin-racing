import React from 'react';
import Image from 'react-bootstrap/Image';

function Social() {
  return (
    <div className="section social">
      <h2 className="section-header">Follow</h2>
      <a href="https://www.facebook.com/jeffberlinracing" target="_blank" rel="noopener noreferrer">
        <Image  src="./images/facebook_circle_150px.png" alt="Facebook logo" title="Like on Facebook!" height={35} />
      </a>
      <a href="https://www.instagram.com/jeffberlinracing/" target="_blank" rel="noopener noreferrer">
        <Image src="./images/instagram_circle_150px.png" alt="Instagram logo" title="Follow on Instagram!" height={35} />
      </a>
      <a href="https://www.youtube.com/user/GymkhanaRally88" target="_blank" rel="noopener noreferrer">
        <Image src="./images/youtube_circle_150px.png" alt="YouTube logo" title="Subscribe on YouTube!" height={35} />
      </a>
      <a href="https://www.youtube.com/user/GymkhanaRally88" target="_blank" rel="noopener noreferrer">
        <Image src="./images/twitter_circle_150px.png" alt="Twitter logo" title="Follow on Twitter!" height={35} />
      </a>
      <a href="https://www.youtube.com/user/GymkhanaRally88" target="_blank" rel="noopener noreferrer">
        <Image src="./images/linkedin_circle_150px.png" alt="LinkedIn logo" title="Follow on LinkedIn!" height={35} />
      </a>
    </div>
  )
}

export default Social;
