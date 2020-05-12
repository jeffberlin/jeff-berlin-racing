import React from 'react';
import Sponsors from './Sponsors';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <>
    <Sponsors />
    <div className="row justify-content-center footer">
      <div className="col-6">
        <p>For business and media inquiries:</p>
        <p><a href="mailto:jeff@jbrally.com">jeff@jbrally.com</a></p>
      </div>
      <div className="col-6 text-right">
        <p>&copy;&nbsp;Jeff&nbsp;Berlin&nbsp;{getYear()}</p>
      </div>
    </div>
    </>
  )
}

export default Footer;
