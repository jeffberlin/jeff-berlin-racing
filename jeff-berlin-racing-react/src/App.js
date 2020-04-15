import React from 'react';
import Navigation from './Components/Navigation.js';
import Videos from './Components/Videos.js';
import Social from './Components/Social.js';
// import Footer from './Components/Footer.js';
import './css/App.css';
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
                >
                  <Videos />
                </Col>
                <Col
                  xl={{span: 4, order: 2}}
                  lg={{span: 4, order: 2}}
                  md={{span: 12, order: 1}}
                  sm={{span: 12, order: 1}}
                >
                  <Social />
                </Col>
              </Row>
            </div>
            {/* <Footer /> */}
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default App;
