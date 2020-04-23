import React from 'react';

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
        <a href="#home">
          <img src="./images/jeff-berlin-racing-logo-text.svg" alt="Jeff Berlin Racing" height={35} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="#home" style={styles}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" style={styles}>About</a>
            </li>
            <li className="nav-item">
              <a href="#news" style={styles}>News</a>
            </li>
            <li className="nav-item">
              <a href="#contact" style={styles}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
