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
