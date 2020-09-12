import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <Navbar expand="false" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <Image src="./images/jeff-berlin-racing-logo-text.svg" alt="Jeff Berlin Racing" height={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/" exact>
              <Nav.Link className="navlink-style">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="navlink-style">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/media">
              <Nav.Link className="navlink-style">Media</Nav.Link>
            </LinkContainer>
            <Nav.Link
              href="https://www.foreverunitedapparel.com/"
              target="_blank"
              active={false}
              rel="noopener"
            >
              Shop Forever United Apparel
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
