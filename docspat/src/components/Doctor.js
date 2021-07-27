import React from 'react'
import { Jumbotron, Button,Alert, Row, Col, CardImg, Card } from 'reactstrap';
import Appointment from './Appointment';
import LoadingComponent from './LoadingComponent';

function Doctor({doctorId,doctors,FetchSlots,slots,makeAppointment,status}) {

  var doctpg;
  if(doctors.isLoading === true)
  {
    doctpg = <LoadingComponent/>
  }
  else if(doctors.err){
    <div style={{color:"red"}}>
      {doctors.err}
    </div>
  }
  else{
    const curdoct = doctors.doctors.filter((doctor) => doctor._id === doctorId)[0]
    doctpg = <div className="container " style={{marginTop:"10px"}}>
    <Row >
      <Col md={6} sm={12}>
        <Card>
          <CardImg top width="100%" src="https://img.collegedekhocdn.com/media/img/careers/doctor-clinic.jpg" alt="Card image cap" />
        </Card>
      </Col>
      <Col md={6} sm={12}>
        <Jumbotron style={{ color: "rgb(0, 115, 230)", backgroundColor: "white" }}>
          <h1 className="display-3">{curdoct.name}</h1>
          <p className="lead">{curdoct.dept} | {curdoct.exp} years of Experience</p>
          <hr className="my-2" />
          <p>{curdoct.degree}</p>

        </Jumbotron>
      </Col>
    </Row>
  </div>
  }
  // console.log(doctorId, curdoct)

  return (
    <div>
      {doctpg}
      <Appointment doctorId={doctorId} FetchSlots={FetchSlots} slots={slots} makeAppointment={makeAppointment} status={status}/>

    </div>

  )
}

export default Doctor
