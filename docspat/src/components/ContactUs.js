import React from 'react'
import { Row, Col, Container, Label, Button } from 'reactstrap'
import { Control, Form, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function ContactUs({resetFeedback}) {

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
    //  event.preventDefault();
    resetFeedback();
  }
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>

        {/* <div>
        <iframe style={{border:"0", width: "100%", height:"350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div> */}

        <div className="container">
          <div className="row mt-5">

            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>
              <br></br>
              <hr></hr>
              <br></br>
            </div>

            <Container>
              <h1>Send Us Your  Query</h1>
              <hr></hr>
              <br></br>
              <Form model="feedback" onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="firstname" md={2}>First Name</Label>
                  <Col md={10}>
                    <Control.text model=".firstname" id="firstname" name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(3), maxLength: maxLength(15)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required: 'Required ',
                        minLength: 'Must be greater than 2 characters ',
                        maxLength: 'Must be 15 characters or less '
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="lastname" md={2}>Last Name</Label>
                  <Col md={10}>
                    <Control.text model=".lastname" id="lastname" name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(3), maxLength: maxLength(15)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".lastname"
                      show="touched"
                      messages={{
                        required: 'Required ',
                        minLength: 'Must be greater than 2 characters ',
                        maxLength: 'Must be 15 characters or less '
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                  <Col md={10}>
                    <Control.text model=".telnum" id="telnum" name="telnum"
                      placeholder="Tel. Number"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(10), maxLength: maxLength(10), isNumber
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".telnum"
                      show="touched"
                      messages={{
                        required: 'Required ',
                        minLength: 'Must be 10 numbers ',
                        maxLength: 'Must be 10 numbers ',
                        isNumber: 'Must be a number '
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Control.text model=".email" id="email" name="email"
                      placeholder="Email"
                      className="form-control"
                      validators={{
                        required, validEmail
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: 'Required ',
                        validEmail: 'Invalid Email Address '
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 6, offset: 2 }}>
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox model=".agree" name="agree"
                          className="form-check-input"
                        /> {' '}
                        <strong>May we contact you?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <Control.select model=".contactType" name="contactType"
                      className="form-control">
                      <option>Tel.</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="message" md={2}>Your Feedback</Label>
                  <Col md={10}>
                    <Control.textarea model=".message" id="message" name="message"
                      rows="8"
                      className="form-control" 
                      validators={{
                        required, minLength: minLength(20), maxLength: maxLength(100)
                    }}/>
                    <Errors
                      className="text-danger"
                      model=".message"
                      show="touched"
                      messages={{
                        required: 'Required ',
                        minLength: 'Must be greater than 20 characters ',
                        maxLength: 'Must be 100 characters or less '
                      }}
                    />
                    
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>

          </div>

        </div>
      </section>






    </div>
  )
}

export default ContactUs
