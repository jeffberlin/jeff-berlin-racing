import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Sponsors() {
  return (
    <Row className="justify-content-center">
      <Col>
        <div className="sponsors">
          <h5>Partners</h5>
          <a href="https://www.noblestarrallyteam.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/noble-star-rally-logo-min.png"
              alt="Noble Star Rally logo"
            />
          </a>
          <a href="https://www.spyoptic.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/spy-optic-logo-min.png"
              alt="Spy Optic logo"
            />
          </a>
          <a href="https://www.subaru.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/subaru-logo-min.png"
              alt="Subaru logo"
            />
          </a>
          <a href="https://www.foreverunitedapparel.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/forever-united-apparel-logo-min.png"
              alt="Forever United Apparel logo"
            />
          </a>
          <a href="https://www.ogio.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/ogio-logo-2-min.png"
              alt="Ogio logo"
            />
          </a>
          <a href="http://turbotime.us/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/turbotime-logo-min.png"
              alt="TurboTime logo"
            />
          </a>
          <a href="https://gopro.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/gopro-logo.png"
              alt="GoPro logo"
            />
          </a>
          <a href="https://www.motul.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="./images/motul-logo.png"
              alt="Motul logo"
            />
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default Sponsors;
