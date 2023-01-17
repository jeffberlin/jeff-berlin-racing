import '../css/videos.css';
import Row from 'react-bootstrap/Row';
import Videos from './Videos';
import Social from './Social';
import Slider from './Slider';

function Home() {
  return (
    <>
      <Row>
        <Social />
        <Videos />
      </Row>
      <Slider />
    </>
  )
}

export default Home;
