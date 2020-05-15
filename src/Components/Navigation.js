import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const styles = {
  paddingLeft: '.8rem',
  paddingRight: '.8rem',
  color: '#707070',
  letterSpacing: '1px'
}

function Navigation() {
  return (
    <Navbar expand="lg" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <img src="./images/jeff-berlin-racing-logo-text.svg" alt="Jeff Berlin Racing" height={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/" exact>
              <Nav.Link style={styles}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link style={styles}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
              <Nav.Link style={styles}>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/photos">
              <Nav.Link style={styles}>Photos</Nav.Link>
            </LinkContainer>
            {/* <li className="nav-item">
              <Link to="/contact" style={styles}>Contact</Link>
            </li> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
