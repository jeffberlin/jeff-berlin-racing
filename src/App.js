import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './css/App.css';
import './css/nav.css';
import './css/responsive.css';
import './css/social.css';
import './css/sponsors.css';
import './css/about.css';
import './css/footer.css';

const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const News = React.lazy(() => import('./Components/News'));
// const Photos = React.lazy(() => import('./Components/Photos'));
const Error = React.lazy(() => import('./Components/Error'));
const Footer = React.lazy(() => import('./Components/Footer'));
const Navigation = React.lazy(() => import('./Components/Navigation'));

function App() {
  return (
    <main className="background">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Container className="content-area">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            {/* <Route path="/photos" component={Photos} /> */}
            <Route path="*" component={Error} />
          </Switch>
          <Footer />
        </Container>
      </Suspense>
    </main>
  );
}

export default App;
