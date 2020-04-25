import React from 'react';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div className="row justify-content-center footer">
      <div className="col text-center">
        <p style={{marginBottom: 0, fontSize: '.8rem'}}>&copy;&nbsp;Jeff&nbsp;Berlin&nbsp;{getYear()}</p>
      </div>
    </div>
  )
}

export default Footer;
