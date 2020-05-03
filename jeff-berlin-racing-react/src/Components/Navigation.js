import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const styles = {
  paddingLeft: '.8rem',
  paddingRight: '.8rem',
  color: '#707070',
  letterSpacing: '1px'
}

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container">
        <Link to="/">
          <Image src="./images/jeff-berlin-racing-logo-text.svg" alt="Jeff Berlin Racing" height={35} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" style={styles}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" style={styles}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/news" style={styles}>News</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" style={styles}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
