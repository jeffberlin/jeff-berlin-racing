import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const styles = {
  paddingLeft: '.8rem',
  paddingRight: '.8rem'
}

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./images/jbr-logo.png"
            alt="Jeff Berlin Racing logo"
            height={40}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" style={styles}>Home</Nav.Link>
            <Nav.Link href="#about" style={styles}>About</Nav.Link>
            <Nav.Link href="#news" style={styles}>News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
