import React from 'react';
import Navigation from './Components/Navigation.js';
import Videos from './Components/Videos.js';
import Social from './Components/Social.js';
import Photos from './Components/Photos.js';
import Sponsors from './Components/Sponsors.js';
import Footer from './Components/Footer.js';
import './css/App.css';
import './css/responsive.css';
import './css/nav.css';
import './css/videos.css';
import './css/social.css';
import './css/sponsors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="background">
        <Container fluid>
          <Col
            lg={12}
            md={12}
          >
            <div className="content-area">
              <Row>
                <Col
                  xl={{span: 8, order: 1}}
                  lg={{span: 8, order: 1}}
                  md={{span: 12, order: 2}}
                  sm={{span: 12, order: 2}}
                  xs={{span: 12, order: 2}}
                >
                  <Videos />
                </Col>
                <Col
                  xl={{span: 4, order: 2}}
                  lg={{span: 4, order: 2}}
                  md={{span: 12, order: 1}}
                  sm={{span: 12, order: 1}}
                  xs={{span: 12, order: 1}}
                >
                  <Social />
                </Col>
              </Row>
              <Row>
                <Col
                  xl={{span: 6, order: 3}}
                  lg={{span: 6, order: 3}}
                  md={{span: 12, order: 3}}
                  sm={{span: 12, order: 3}}
                  xs={{span: 12, order: 3}}
                >
                  <Photos />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Sponsors />
                </Col>
              </Row>
              <Row style={{textAlign: 'center'}}>
                <Col>
                  <Footer />
                </Col>
              </Row>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default App;
