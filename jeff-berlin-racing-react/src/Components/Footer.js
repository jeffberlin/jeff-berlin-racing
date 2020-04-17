import React from 'react';
import '../css/App.css';
import '../css/responsive.css';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div>
      <p style={{marginBottom: 0}}>&copy;&nbsp;Jeff&nbsp;Berlin&nbsp;{getYear()}</p>
    </div>
  )
}

export default Footer;
