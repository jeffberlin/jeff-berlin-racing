import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import Photos from './Components/Photos';
import Error from './Components/Error';
import './css/App.css';
import './css/nav.css';
import './css/responsive.css';
import './css/social.css';
import './css/sponsors.css';
import './css/about.css';
import './css/footer.css';

const Footer = React.lazy(() => import('./Components/Footer'));

function App() {
  return (
    <main className="background">
      <Navigation />
      <Container className="content-area">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/photos" component={Photos} />
          <Route path="*" component={Error} />
        </Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </Container>
    </main>
  );
}

export default App;
