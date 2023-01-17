import Social from './Social';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function News() {
  return (
    <Row>
      <Social />
      <Col lg={{ span: 8, order: 1 }} md={12} sm={12} className="justify-content-center justify-content-md-start">
        <div className="section news">
          <h2 className="section-header">News</h2>
          <p>We're working on some awesome stories, so check back soon!</p>
        </div>
      </Col>
    </Row>
  )
}

export default News;
