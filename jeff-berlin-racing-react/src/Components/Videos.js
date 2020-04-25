import React from 'react';

function Videos() {
  return (
    <div className="section videos">
      <h2 className="section-header">Videos</h2>
      <p>
        <a href="https://www.youtube.com/user/GymkhanaRally88" target="_blank" className="link" rel="noopener noreferrer">See more</a> videos on our YouTube channel!
      </p>
      <iframe
        className="home-video"
        id="firstVideo"
        src="https://www.youtube.com/embed/nZIisE6Je_0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Jeff Berlin Racing video"
        rel="noopener noreferrer"
        >
      </iframe>
      <iframe
        className="home-video"
        id="secondVideo"
        src="https://www.youtube.com/embed/7ObjcX6_BJU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Jeff Berlin Racing video"
        rel="noopener noreferrer"
        >
      </iframe>
      <iframe
        className="home-video"
        id="thirdVideo"
        src="https://www.youtube.com/embed/3kdfKHBTP-Q"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Jeff Berlin Racing video"
        rel="noopener noreferrer"
        >
      </iframe>
      <iframe
        className="home-video"
        id="fourthVideo"
        src="https://www.youtube.com/embed/_-tvrb39wIU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Jeff Berlin Racing video"
        rel="noopener noreferrer"
        >
      </iframe>
    </div>
  )
}

export default Videos;
