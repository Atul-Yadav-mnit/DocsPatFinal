import { Button, Container,Col,Row,Card,CardImg,CardTitle,CardSubtitle,CardBody,CardText } from 'reactstrap'
import React from 'react'

function PatientAppointmentsComponent({ fetchAppointmentsPat, PatientAppointments, status }) {

    const handleClick = () => {
        if (status.pid === '') {
            alert("You are not a patient!!!, so can't access this page")
        }
        else {
            fetchAppointmentsPat(status.pid);
        }
    }

    

    var apnt = PatientAppointments.appointments.map((appointment) => {
        var clr = "primary"
        if(appointment.status=== "Completed")
        {
            clr = "secondary"
        }
        return (
            <Col md={6} lg={4} sm={12} style={{marginTop:"20px"}}>
                <Card>
                    <CardBody>
                        <h1 style={{backgroundColor:"rgb(26, 117, 255)",color:"white",textAlign:"center"} }>Appointment</h1>
                        <hr></hr>
                        <CardTitle tag="h5">{appointment.date}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Dr. {appointment.docId.name}</CardSubtitle>
                        <CardText>{appointment.slot},position : {appointment.position}</CardText>
                        <CardText>Prescription : {appointment.prescription}</CardText>
                        <Button color={clr}>{appointment.status}</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    })


    if(PatientAppointments.appointments.length === 0)
    {
        apnt = <h1 style={{color:"grey", marginTop:"25px",textAlign:"center"}}>No appointments to show</h1>
    }

    return (
        <div>
            <section id="appointment" class="appointment section-bg">
                <div class="container">
                    <div class="section-title">
                        <h2>Your Appointments</h2>
                        <p>All your appointments booked so far!!!</p>
                        <br></br>
                        <Button onClick={handleClick}>Fetch Appointments</Button>
                    </div>
                    <br></br>
                </div>
                
            </section>
            <Container>
                <Row>
                    {apnt}
                </Row>
            </Container>

        </div>
    )
}

export default PatientAppointmentsComponent
