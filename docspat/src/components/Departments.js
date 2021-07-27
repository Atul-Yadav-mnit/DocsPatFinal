import React, { useState } from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, Button, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import LoadingComponent from './LoadingComponent'

function Departments({ departments, doctors}) {

    const [dep, setdep] = useState('Cardiology')

    var curdepts;
    if (departments.isLoading === true) {
        curdepts = <div>
            <LoadingComponent />
        </div>
    }
    else if (departments.err != null) {
        curdepts = <div style={{ color: "red" }}>
            {departments.err}
        </div>
    }
    else {
        const curdept = departments.departments.filter((dept) => dept.name === dep)[0];


        const deps = departments.departments.map((dept) => {
            if (dept.name === dep) {
                return (
                    <li class="nav-item">
                        <a class="nav-link active show" onClick={() => setdep(dept.name)}>{dept.name}</a>
                    </li>
                );
            }
            else {
                return (
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => setdep(dept.name)}>{dept.name}</a>
                    </li>
                );
            }
        })

        const depview = <div class="row">
            <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                    {deps}
                </ul>
            </div>


            <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">

                    <div class="tab-pane active show" id="tab-1">
                        <div class="row">
                            <div class="col-lg-8 details order-2 order-lg-1">
                                <h3>{curdept.name}</h3>
                                <p class="fst-italic">{curdept.nod} doctors</p>
                                <p>{curdept.details}</p>
                            </div>
                            <div class="col-lg-4 text-center order-1 order-lg-2">
                                <img src="https://www.fi.edu/sites/default/files/styles/featured_large/public/General_EduRes_Heart_MilestonesInCardiology.jpg?itok=0ZeK8U4r" alt="" class="img-fluid" />
                                {/* <CardImg top width="100%" src="https://www.fi.edu/sites/default/files/styles/featured_large/public/General_EduRes_Heart_MilestonesInCardiology.jpg?itok=0ZeK8U4r" alt="Card image cap" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        var curdoctors;
        if (doctors.isLoading === true) {
            curdoctors = <div>
                <LoadingComponent />
            </div>
        }
        else if (doctors.err) {
            curdoctors = <div style={{ color: "red" }}>
                {doctors.err}
            </div>
        }
        else {

            const curdocs = doctors.doctors.filter((doctor) => doctor.dept === dep);

            console.log("Curr doctors : ",curdocs);
           curdoctors = curdocs.map((doctor) => {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5">
                        <Card>
                            <CardImg top width="100%" src="https://img.collegedekhocdn.com/media/img/careers/doctor-clinic.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{doctor.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{doctor.dept}</CardSubtitle>
                                <CardText>{doctor.degree}<br></br>Experience:{doctor.exp} years</CardText>
                                <Link to={`/departments/${doctor._id}`} ><Button>Book an Appointment</Button></Link>
                            </CardBody>
                        </Card>
                        <img src="https://www.fortishealthcare.com/india/clinical-speciality/non-invasive-cardiology-542" alt="" class="img-fluid" />
                    </div>
                );
            })

        }


        curdepts =
            <div>
                <section id="departments" class="departments">
                    <div class="container">

                        <div class="section-title">
                            <h2>Departments</h2>
                            <p>Choose Your Department !!!</p>
                        </div>
                        {depview}
                    </div>
                </section>




                {/* // Doctors Part */}
                <section id="departments" class="departments">
                    <div class="container">

                        <div class="section-title">
                            <h2>Doctors</h2>
                            <p>{curdept.name}</p>
                        </div>

                        <div className="container"></div>
                        <div className="row">
                            {curdoctors}
                        </div>
                    </div>
                </section>
            </div>


    }


    console.log("curdepts is ",curdepts)

    return (
        <div>
            {curdepts}
        </div>



    )
}

export default Departments
