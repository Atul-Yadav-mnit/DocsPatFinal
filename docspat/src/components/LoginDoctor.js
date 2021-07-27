import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Container, Row, Col } from 'reactstrap';
import { Control, Errors, Form } from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const LoginDoctor = ({resetDocsignin,handleDocLogin,status}) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = (values) => {
        var t = 0;
        for(var i=0;i<10;i++)
        {
            t = t*10 + (values.telnum.charAt(i)-'0')
        }
        handleDocLogin(t,values.password);
        resetDocsignin();
        toggle();
    }

    

    return (
        <div>
            <Button style={{ backgroundColor: "rgb(0, 115, 230)", borderColor: "white", marginRight: "10px" }} onClick={toggle}>Login as Doctor</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Login as Doctor</ModalHeader>
                <ModalBody>
                <Container>
                <Form model="docsignin" onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="telnum" md={3}>Mobile</Label>
                    <Col md={9}>
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
                        <Label htmlFor="password" md={3}>Password</Label>
                        <Col md={9}>
                            <Control.text model=".password" type="password" id="password" name="password"
                                placeholder="password"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(8), maxLength: maxLength(12)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than 7 characters ',
                                    maxLength: 'Must be 13 characters or less '
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{ size: 10, offset: 3 }}>
                            <Button type="submit" color="primary">
                                Login
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LoginDoctor;