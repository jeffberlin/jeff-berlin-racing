import React from 'react';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div className="footer">
      <p style={{marginBottom: 0}}>&copy;&nbsp;Jeff&nbsp;Berlin&nbsp;{getYear()}</p>
    </div>
  )
}

export default Footer;
