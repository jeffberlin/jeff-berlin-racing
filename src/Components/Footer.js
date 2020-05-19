import React from 'react';
import Sponsors from './Sponsors';
import Row from 'react-bootstrap/Row';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div className="footer">
      <Sponsors />
      {/* <div className="row justify-content-center"> */}
        <Row className="justify-content-center">
        <div className="col-6">
          <p>For business and media inquiries:</p>
          <p><a href="mailto:jeff@jbrally.com">jeff@jbrally.com</a></p>
        </div>
        <div className="col-6 text-right">
          <p>&copy;&nbsp;Jeff&nbsp;Berlin&nbsp;{getYear()}</p>
        </div>
      </Row>
    </div>
  )
}

export default Footer;
