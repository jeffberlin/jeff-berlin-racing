import React from 'react';
import Sponsors from './Sponsors';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div className="footer">
      <Sponsors />
      <Row className="justify-content-center">
        <Col>
          <p>For business and media inquiries:</p>
          <p><a href="mailto:jeff@jbrally.com">jeff@jbrally.com</a></p>
        </Col>
        <Col className="text-right">
          <p>&copy;&nbsp;Jeff&nbsp;Berlin&nbsp;{getYear()}</p>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;
