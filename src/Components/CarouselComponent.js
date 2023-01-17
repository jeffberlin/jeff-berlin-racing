import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'react-bootstrap/Image';
import '../css/carousel.css';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        <div>
          <Image src="./images/jeff-berlin-racing-sandblast-rally-jump-min.jpg" alt="Jeff Berlin Sandblast Rally jump" />
        </div>
        <div>
          <Image src="./images/jeff-berlin-racing-subaru-interior-min.jpg" alt="Jeff Berlin Subaru interior" />
        </div>
        <div>
          <Image src="./images/jeff-berlin-racing-wilson-rallycross-1-min.jpg" alt="Jeff Berlin Wilson Rallycross drift" />
        </div>
        <div>
          <Image src="./images/jeff-berlin-racing-sandblast-awards-800-min.jpg" alt="Jeff Berlin Wilson Rallycross" />
        </div>
        <div>
          <Image src="./images/jeff-berlin-racing-espr-800-min.jpg" alt="Jeff Berlin Empire State Performance Rally" />
        </div>
        <div>
          <Image src="./images/jeff-berlin-racing-wilson-rallycross-2-900-min.jpg" alt="Jeff Berlin Wilson Rallycross" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
