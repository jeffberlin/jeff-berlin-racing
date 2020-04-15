import React from 'react';
import '../css/App.css';

function Videos() {
  return (
    <div>
      <h2 className="section-header">Videos</h2>
      <iframe
        width="450"
        height="275"
        src="https://www.youtube.com/embed/nZIisE6Je_0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{marginRight: '1rem'}}>
      </iframe>
      <iframe
        width="450"
        height="275"
        src="https://www.youtube.com/embed/7ObjcX6_BJU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Videos;
