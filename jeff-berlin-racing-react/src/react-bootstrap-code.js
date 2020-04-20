<div className="App">
  <Navigation />
  <div className="background">
    <Container fluid>
      <Col
        lg={12}
        md={12}
      >
        <div className="content-area">
          <Row>
            <Col
              xl={{span: 8, order: 1}}
              lg={{span: 8, order: 1}}
              md={{span: 12, order: 2}}
              sm={{span: 12, order: 2}}
              xs={{span: 12, order: 2}}
            >
              <Videos />
            </Col>
            <Col
              xl={{span: 4, order: 2}}
              lg={{span: 4, order: 2}}
              md={{span: 12, order: 1}}
              sm={{span: 12, order: 1}}
              xs={{span: 12, order: 1}}
            >
              <Social />
            </Col>
          </Row>
          <Row>
            <Col
              xl={{span: 6, order: 3}}
              lg={{span: 6, order: 3}}
              md={{span: 12, order: 3}}
              sm={{span: 12, order: 3}}
              xs={{span: 12, order: 3}}
            >
              <Photos />
            </Col>
          </Row>
          <Row>
            <Col>
              <Sponsors />
            </Col>
          </Row>
          <Row style={{textAlign: 'center'}}>
            <Col>
              <Footer />
            </Col>
          </Row>
        </div>
      </Col>
    </Container>
  </div>
</div>


<Navbar collapseOnSelect expand="md" fixed='top'>
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="./images/jb-new-logo-text.png"
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

.navbar {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.65);
  height: 60px;
}

.navbar-collapse {
  background: rgba(255, 255, 255, 0.98);
  text-align: center;
}

.navbar-brand {
  padding: 0 !important;
}

.nav-link {
  color: #707070 !important;
  letter-spacing: 1px;
}

.nav-link:last-child {
  padding-right: 0 !important;
  margin-right: 0;
}

.nav-link:hover, .active {
  color: #FF6600 !important;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}
