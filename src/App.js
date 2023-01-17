import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './css/App.css';
import './css/nav.css';
import './css/responsive.css';
import './css/social.css';
import './css/sponsors.css';
import './css/about.css';
import './css/footer.css';

const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Error = lazy(() => import('./Components/Error'));
const Footer = lazy(() => import('./Components/Footer'));
const Navigation = lazy(() => import('./Components/Navigation'));
const Media = lazy(() => import('./Components/Media'));

function App() {
  return (
    <main className="background">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Container className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Container>
      </Suspense>
    </main>
  );
}

export default App;
