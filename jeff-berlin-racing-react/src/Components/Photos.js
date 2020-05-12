import React from 'react';
import Social from './Social';

function Photos() {
  return (
    <div className="row">
      <Social />
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 order-lg-1 justify-content-center justify-content-md-start">
        <div className="section news">
          <h2 className="section-header">Photos</h2>
          <p>We're working on adding photos that some amazing photographers have taken over the years, so check back soon!</p>
        </div>
      </div>
    </div>
  )
}

export default Photos;
