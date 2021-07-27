import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Row, Col, Card, CardImg } from 'reactstrap'
import LoadingComponent from './LoadingComponent';

function Testinomials({ testimonials }) {

  var testinoms;
  if (testimonials.isLoading === true) {
    testinoms = <LoadingComponent />
  }
  else if (testimonials.err != null) {
    testinoms = <div style={{ color: "red" }}>
      {testimonials.err}
    </div>
  }
  else {
    testinoms = testimonials.testimonials.map((test) => {
      return (
        <div>
          <Row>
            <Col md={4}>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg top width="100%" src="https://img.collegedekhocdn.com/media/img/careers/doctor-clinic.jpg" alt="Card image cap" />
              </Card>
            </Col>
          </Row>
          {/* <img width={500} height={300} src="https://img.collegedekhocdn.com/media/img/careers/doctor-clinic.jpg"/> */}
          <div className="myCarousel">
            <h3>{test.name}</h3>
            <h4>Patient</h4>
            <Row>
              <Col md={4}>
              </Col>
              <Col md={4}>
                <p>
                  {test.review}
                </p>
              </Col>
            </Row>
            <br></br>
            <br></br>
          </div>
        </div>
      );
    })
  }

  return (
    <>
      <div className="section-title">
        <h2>Testinomials</h2>
        <p>Listen to our happy customers </p>
      </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {testinoms}
      </Carousel>
    </>
  );
}

export default Testinomials
