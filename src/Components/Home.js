import React, { Suspense } from 'react';
import '../css/videos.css';
import Row from 'react-bootstrap/Row';

const Videos = React.lazy(() => import('./Videos'));
const Social = React.lazy(() => import('./Social'));
const Slider = React.lazy(() => import('./Slider'));

function Home() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Row>
        <Social />
        <Videos />
      </Row>
      <Slider />
    </Suspense>
    </>
  )
}

export default Home;
