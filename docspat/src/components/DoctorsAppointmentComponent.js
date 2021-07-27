import React, { useState } from 'react'
import { Button, Form, Modal, ModalBody, CardText, Label, Input, Card, ModalHeader, CardTitle, CardSubtitle, Col, CardBody, Container, Row } from 'reactstrap'

function DoctorsAppointmentComponent({ fetchAppointmentsDoc, DoctorAppointments, status, completeAppointment }) {

    const [pres, setpres] = useState('')
    const [modal, setModal] = useState(false);
    const [curid, setcurid] = useState('')

    const toggle = () => {
        setModal(!modal);
    }


    const handleClick = () => {
        if (status.did === '') {
            alert("You are not a doctor!!!, so cant access this page")
        }
        else {
            fetchAppointmentsDoc(status.did);
        }
    }


    const handleClickbtn = (e, id) => {
        setcurid(id)
        toggle();
        e.preventDefault();
    }

    



    const handleSubmit = (e) => {
        var p = pres;
        setpres('');
        var ap_id = curid;
        setcurid('')
        completeAppointment(ap_id, p);
        console.log(ap_id, " and p is ",p)
        toggle();
        e.preventDefault();
    }


    var apnt = DoctorAppointments.appointments.map((appointment) => {

        var bttn = <Button color="primary" onClick={(e) => handleClickbtn(e, appointment._id)}>Prescribe</Button>;
        if (appointment.status === "Completed") {
            bttn = <Button color="secondary" >Completed</Button>;
        }

        return (
            <Col md={6} lg={4} sm={12} style={{ marginTop: "20px" }}>
                <Card>
                    <CardBody>
                        <h1 style={{ backgroundColor: "rgb(26, 117, 255)", color: "white", textAlign: "center" }}>Appointment</h1>
                        <hr></hr>
                        <CardTitle tag="h5">{appointment.date}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Patient Name: {appointment.patId.name}</CardSubtitle>
                        <CardText>{appointment.slot} , position : {appointment.position}</CardText>
                    </CardBody>
                    {bttn}
                </Card>
            </Col>
        )
    })

    if (DoctorAppointments.appointments.length === 0) {
        apnt = <h1 style={{ color: "grey", marginTop: "25px", textAlign: "center" }}>No appointments to show</h1>
    }


    return (
        <div>
            <section id="appointment" class="appointment section-bg">
                <div class="container">
                    <div class="section-title">
                        <h2>Your Patients</h2>
                        <p>All your patients booked for today !!!</p>
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
        <Modal isOpen={modal} toggle={() => toggle()} >
        <ModalHeader toggle={toggle}>Prescription</ModalHeader>
        <ModalBody>
            <Form >
                <Input type="textarea" rows="8" onChange={(e) => setpres(e.target.value)} value={pres}></Input>
                <br></br>
                <hr></hr>
                <br></br>
                <Button onClick={handleSubmit}>Prescribe and mark as Completed</Button>
            </Form>
        </ModalBody>
    </Modal>
    
        </div>
    )
}

export default DoctorsAppointmentComponent
