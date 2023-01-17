import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Social() {
  return (
    <Col lg={{ span: 4, order: 2 }} md={12} sm={12} className="justify-content-center justify-content-sm-start">
      <div className="section social">
        <h2 className="section-header">Follow</h2>
        <a href="https://www.facebook.com/jeffberlinracing" target="_blank" rel="noopener noreferrer">
          <Image  src="./images/facebook_circle_150px.png" alt="Facebook logo" title="Like on Facebook!" />
        </a>
        <a href="https://www.instagram.com/jeffberlin_racing/" target="_blank" rel="noopener noreferrer">
          <Image src="./images/instagram_circle_150px.png" alt="Instagram logo" title="Follow on Instagram!" />
        </a>
        <a href="https://www.youtube.com/user/GymkhanaRally88" target="_blank" rel="noopener noreferrer">
          <Image src="./images/youtube_circle_150px.png" alt="YouTube logo" title="Subscribe on YouTube!" />
        </a>
        <a href="https://www.twitter.com/jeffberlin_race" target="_blank" rel="noopener noreferrer">
          <Image src="./images/twitter_circle_150px.png" alt="Twitter logo" title="Follow on Twitter!" />
        </a>
        <a href="https://www.linkedin.com/company/jeffberlinracing/" target="_blank" rel="noopener noreferrer">
          <Image src="./images/linkedin_circle_150px.png" alt="LinkedIn logo" title="Follow on LinkedIn!" />
        </a>
      </div>
    </Col>
  )
}

export default Social;
