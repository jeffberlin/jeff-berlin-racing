import Col from 'react-bootstrap/Col';

function Videos() {
  return (
    <Col lg={{ span: 8, order: 1 }} md={12} sm={12} className="justify-content-center justify-content-md-start">
      <div className="section videos">
        <h2 className="section-header">Videos</h2>
        <p>
          Check out our&nbsp;<a href="https://www.youtube.com/user/GymkhanaRally88" target="_blank" className="link" rel="noopener noreferrer">racing channel</a>&nbsp;and don't forget to subscribe!
        </p>
        <div className="row">
          <div className="col-sm-8 col-md-6">
            <iframe
              className="home-video embed-responsive-item embed-responsive-16by9"
              id="firstVideo"
              src="https://www.youtube.com/embed/nZIisE6Je_0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Jeff Berlin Racing video"
              rel="noopener noreferrer"
              >
            </iframe>
          </div>
          <div className="col-sm-8 col-md-6">
            <iframe
              className="home-video embed-responsive-item embed-responsive-16by9"
              id="secondVideo"
              src="https://www.youtube.com/embed/7ObjcX6_BJU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Jeff Berlin Racing video"
              rel="noopener noreferrer"
              >
            </iframe>
          </div>
          <div className="col-sm-8 col-md-6">
            <iframe
              className="home-video embed-responsive-item embed-responsive-16by9"
              id="thirdVideo"
              src="https://www.youtube.com/embed/3kdfKHBTP-Q"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Jeff Berlin Racing video"
              rel="noopener noreferrer"
              >
            </iframe>
          </div>
          <div className="col-sm-8 col-md-6">
            <iframe
              className="home-video embed-responsive-item embed-responsive-16by9"
              id="fourthVideo"
              src="https://www.youtube.com/embed/_-tvrb39wIU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Jeff Berlin Racing video"
              rel="noopener noreferrer"
              >
            </iframe>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default Videos;
