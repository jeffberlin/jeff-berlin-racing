import Social from './Social';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <Row>
      <Social />
      <Col lg={{ span: 8, order: 1 }} md={12} sm={12} className="justify-content-center justify-content-md-start">
        <div className="section about">
          <h2 className="section-header">About</h2>
          <span>
            <Image
              className="img-thumbnail float-md-left mr-2 mb-2"
              // src="./images/jeff-berlin-stpr-2019-min.jpg"
              src='./images/jeff-berlin-racing-about-photo.jpg'
              alt="Jeff Berlin"
            />
            <p>Born in Wilmington, Delaware in 1991, Berlin had a love for cars and adrenaline since a young age. In 2014, the love of those two things were blended together during his first rallycross. For the first year, Jeff went all over the southeast competing in rallycrosses to gain valuable seat time and practice. The switch from rallycross to stage rally happened in March 2015 at NASA Rallysport's Sandblast Rally and he earned his first class podium finish at Sandblast Rally 2016.</p>
          </span>
        </div>
      </Col>
    </Row>
  )
}

export default About;
