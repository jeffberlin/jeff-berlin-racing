import { Component } from 'react';
import Social from './Social';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Media extends Component {
  componentDidMount() {
    window.FB.XFBML.parse();
  }
  render() {
    return (
      <Row>
        <Social />
        <Col lg={{ span: 8, order: 1}} md={12} sm={12} className="justify-content-center justify-content-md-start">
          <h2 className="section-header">Media</h2>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/jeffberlinracing/"
            data-tabs="timeline"
            data-width="500"
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
            data-lazy="true"
          >
            <blockquote cite="https://www.facebook.com/jeffberlinracing/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/jeffberlinracing/">Jeff Berlin Racing</a>
            </blockquote>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Media;
