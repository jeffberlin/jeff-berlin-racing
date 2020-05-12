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


<div className="App">
  <Navigation />
  <div className="background">
    <div className="container content-area">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 order-lg-2 d-sm-flex justify-content-center justify-content-sm-start">
          <Social />
        </div>
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 order-lg-1 d-sm-flex justify-content-center justify-content-md-start">
          <Videos />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-lg-start">
          <Photos />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <Sponsors />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col text-center">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</div>
