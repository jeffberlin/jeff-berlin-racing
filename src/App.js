import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            <Route exact path="/google85ed59964fc3f6d6.html" render={() => {window.location.href="google.html"}} />
            <Route path="*" component={Error} />
          </Switch>
          <Footer />
        </Container>
      </Suspense>
    </main>
  );
}

export default App;
