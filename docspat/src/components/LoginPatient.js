import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Control, Errors, Form } from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const LoginPatient = ({ resetSignup, resetPatsignin, handlePatLogin, handlePatSignUp }) => {

    const [modal, setModal] = useState(false);
    const [type, settype] = useState('Login')

    const toggle = () => {
        setModal(!modal)
        settype('Login')
    };

    const handleSubmit = (values) => {
        console.log("See values ",values)
        if (type === 'SignUp') {
            var y = 0;
            var t = 0;
            for (var i = 0; i < 10; i++) {
                if (i < 4) {
                    y = y * 10 + (values.yob.charAt(i) - '0')
                }
                t = t * 10 + (values.telnum.charAt(i) - '0')
            }
            handlePatSignUp(values.name, t, values.email, y, values.gender, values.address, values.password);
            resetSignup();
        }
        else {
            handlePatLogin(values.telnum, values.password)
            resetPatsignin();
        }
        toggle();
    }


    var forms;
    if (type === 'SignUp') {
        forms = <Container>
            <Form model="signup" onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="name" md={3}>Name</Label>
                    <Col md={9}>
                        <Control.text model=".name" id="name" name="name"
                            placeholder="Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".name"
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
                    <Label htmlFor="yob" md={3}>Birth Year</Label>
                    <Col md={4}>
                        <Control.text model=".yob" id="yob" name="yob"
                            placeholder="yob"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(4), maxLength: maxLength(4), isNumber
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".yob"
                            show="touched"
                            messages={{
                                required: 'Required ',
                                minLength: 'Must be 4 numbers ',
                                maxLength: 'Must be 4 numbers ',
                                isNumber: 'Must be a number '
                            }}
                        />
                    </Col>
                </Row>

                <Row className="form-group">
                    <Label htmlFor="email" md={3}>Email</Label>
                    <Col md={9}>
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
                    <Label htmlFor="gender" md={3}>Gender</Label>
                    <Col md={{ size: 4 }} >
                        <Control.select model=".gender" name="gender"
                            className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="address" md={3}>Address</Label>
                    <Col md={9}>
                        <Control.textarea model=".address" id="address" name="address"
                            rows="5"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(20), maxLength: maxLength(100)
                            }} />
                        <Errors
                            className="text-danger"
                            model=".address"
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
                    <Col md={{ size: 10, offset: 3 }}>
                        <Button type="submit" color="primary">
                            SignUp
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    }
    else {
        forms =
            <Container>
                <Form model="patsignin" onSubmit={(values) => handleSubmit(values)}>
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
    }

    var hdr;
    if (type === 'Login') {
        hdr = <div>Login as a Patient || <Button color="primary" onClick={() => settype('SignUp')}>SignUp</Button></div>
    }
    else {
        hdr = <div>SignUp as a Patient || <Button color="primary" onClick={() => settype('Login')}>Login</Button></div>
    }

    return (
        <div>
            <Button style={{ backgroundColor: "rgb(0, 115, 230)", borderColor: "white", marginRight: "10px" }} onClick={toggle}>Login as Patient</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>
                    {hdr}
                </ModalHeader>
                <ModalBody>
                    {forms}
                </ModalBody>
            </Modal>
        </div>
    );
}



export default LoginPatient;