import React, { useEffect , useState} from 'react'
import { Button, Container, Row, Col } from 'reactstrap'

function Appointment({ doctorId, FetchSlots, slots ,makeAppointment, status}) {

  var sl1 = 0;
  var clr1 ="red" ,clr2 ="red" ,clr3 ="red" ,clr4 ="red" ,clr5 ="red" ,clr6 ="red" ;
  if (slots.slot1 > 0) {
    sl1 = slots.slot1
    clr1 ="green"
  }
  var sl2 = 0;
  if (slots.slot2 > 0) {
    sl2 = slots.slot2
    clr2 ="green"
  }
  var sl3 = 0;
  if (slots.slot3 > 0) {
    sl3 = slots.slot3
    clr3 ="green"
  }
  var sl4 = 0;
  if (slots.slot4 > 0) {
    sl4 = slots.slot4
    clr4 ="green"
  }
  var sl5 = 0;
  if (slots.slot5 > 0) {
    sl5 = slots.slot5
    clr5 ="green"
  }
  var sl6 = 0;
  if (slots.slot6 > 0) {
    sl6 = slots.slot6
    clr6 ="green"
  }
  

  const handleSlotBtn = (did, slotno, uid) => {
    if(uid === '')
    {
      alert("please login/signup as patient to continue ");
    }
    else if(slots[slotno] <= 0)
    {
      alert("Sorry No space available, Switch to different slot!!!")
    }
    else{
      makeAppointment(did, slotno, uid)
    }
  }


  return (
    <div>
      <section id="appointment" class="appointment section-bg">
        <div class="container">

          <div class="section-title">
            <h2>Make an Appointment</h2>
            <p>Choose your slot as per availibility !!!</p>
            <Button onClick={()=>FetchSlots(doctorId)}>Refresh slots</Button>
          </div>
          <br></br>
          <h3>Morning Slots</h3>
          <hr></hr>
          <br></br>
          <Container mt="20px" >
            <Row>
              <Col md={4} sm={12}>
                <Button onClick={() => {handleSlotBtn(doctorId,"slot1",status.pid)}}>10:00 AM - 11:00 AM</Button>
                <br></br>
                <br></br>
                <div style={{color: clr1}}>
                  Available : {sl1}
                  <hr></hr>
                  <br></br>
                  </div>
              </Col>
              <Col md={4} sm={12}>
                <Button onClick={() => {handleSlotBtn(doctorId,"slot2",status.pid)}}>11:00 AM - 12:00 AM</Button>
                <br></br>
                <br></br>
                <div style={{color: clr2}}>
                  Available : {sl2}
                  <hr></hr>
                  <br></br>
                  </div>
              </Col>
              <Col md={4} sm={12}>
                <Button onClick={() => {handleSlotBtn(doctorId,"slot3",status.pid)}} >12:00 AM - 01:00 PM</Button>
                <br></br>
                <br></br>
                <div style={{color: clr3}}>
                  Available : {sl3}
                  <hr></hr>
                  <br></br>
                  </div>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <h3>Evening Slots</h3>
            <hr></hr>
            <br></br>
            <Row>
              <Col md={4} sm={12}>
                <Button onClick={() => {handleSlotBtn(doctorId,"slot4",status.pid)}} >03:00 PM - 04:00 PM</Button>
                <br></br>
                <br></br>
                <div style={{color: clr4}}>
                  Available : {sl4}
                  <hr></hr>
                  <br></br>
                  </div>
              </Col>
              <Col md={4} sm={12}>
                <Button onClick={() => {handleSlotBtn(doctorId,"slot5",status.pid)}} >04:00 PM - 05:00 PM</Button>
                <br></br>
                <br></br>
                <div style={{color: clr5}}>
                  Available : {sl5}
                  <hr></hr>
                  <br></br>
                  </div>
              </Col>
              <Col md={4} sm={12}>
                <Button onClick={() => {handleSlotBtn(doctorId,"slot6",status.pid)}} >05:00 PM - 06:00 PM</Button>
                <br></br>
                <br></br>
                <div style={{color: clr6}}>
                  Available : {sl6}
                  <hr></hr>
                  <br></br>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  )
}

export default Appointment
