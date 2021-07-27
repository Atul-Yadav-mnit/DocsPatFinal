import React, { useEffect } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Departments from './Departments'
import Doctor from './Doctor'
import { connect } from 'react-redux'
import { actions, actionTypes } from 'react-redux-form'
import * as ActionCreator from '../redux/ActionCreator'
import PatientAppointmentsComponent from './PatientAppointmentsComponent'
import DoctorsAppointmentComponent from './DoctorsAppointmentComponent'

const mapStateToProps = state => {
    return {
        testimonials: state.testimonials,
        departments: state.departments,
        doctors: state.doctors,
        status: state.status,
        slots: state.slots,
        PatientAppointments: state.PatientAppointments,
        DoctorAppointments: state.DoctorAppointments
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        completeAppointment : (ap_id,p) => dispatch(ActionCreator.completeAppointment(ap_id,p)),
        fetchAppointmentsDoc : (did) => {dispatch(ActionCreator.fetchAppointmentsDoc(did))},
        fetchAppointmentsPat: (uid) => { dispatch(ActionCreator.fetchAppointmentsPat(uid)) },
        makeAppointment: (did, slotno, uid) => { dispatch(ActionCreator.makeAppointment(did, slotno, uid)) },
        FetchSlots: (did) => { dispatch(ActionCreator.FetchSlots(did)) },
        handlePatLogin: (telnum, password) => { dispatch(ActionCreator.LoginPat(telnum, password)) },
        handlePatSignUp: (name, telnum, email, yob, gender, address, password) => { dispatch(ActionCreator.SignUpPat(name, telnum, email, yob, gender, address, password)) },
        handleDocLogin: (telnum, password) => { dispatch(ActionCreator.LoginDoc(telnum, password)) },
        handleLogout: () => { dispatch(ActionCreator.Logout()) },
        fetchTestimonials: () => { dispatch(ActionCreator.FetchingTestimonials()) },
        fetchDoctors: () => { dispatch(ActionCreator.FetchingDoctors()) },
        fetchDepartments: () => { dispatch(ActionCreator.FetchingDepartments()) },
        resetFeedback: () => { dispatch(actions.reset('feedback')) },
        resetSignup: () => { dispatch(actions.reset('signup')) },
        resetPatsignin: () => { dispatch(actions.reset('patsignin')) },
        resetDocsignin: () => { dispatch(actions.reset('docsignin')) }
    }
}

const Main = (props) => {

    const HomePage = () => {
        return (
            <Home
                testimonials={props.testimonials}
            />
        )
    }

    const DoctorsPage = ({ match }) => {
        return (
            <Doctor
                doctorId={match.params.doctorId}
                doctors={props.doctors}
                FetchSlots={props.FetchSlots}
                slots={props.slots}
                makeAppointment={props.makeAppointment}
                status={props.status}
            />
        )
    }

    const AboutUsPage = () => {
        return (
            <AboutUs />
        );
    }

    const ContactUsPage = () => {
        return (
            <ContactUs
                resetFeedback={props.resetFeedback}
            />
        );
    }


    const DepartmentsPage = () => {
        return (
            <Departments
                departments={props.departments}
                doctors={props.doctors}


            />
        );
    }

    const PatientAppointmentsPage = () => {
        return (
            <PatientAppointmentsComponent
                fetchAppointmentsPat={props.fetchAppointmentsPat}
                PatientAppointments={props.PatientAppointments}
                status={props.status}
            />
        )
    }

    const DoctorAppointmentsPage = () => {
        return (
            <DoctorsAppointmentComponent
                fetchAppointmentsDoc={props.fetchAppointmentsDoc}
                DoctorAppointments={props.DoctorAppointments}
                status={props.status}
                completeAppointment={props.completeAppointment}
            />
        )
    }

    useEffect(() => {
        console.log("use effrct fired ")
        console.log(props.testimonials)
        props.fetchTestimonials();
        props.fetchDepartments();
        props.fetchDoctors();

    }, []);


    return (
        <div>
            <Navbar
                resetSignup={props.resetSignup}
                resetPatsignin={props.resetPatsignin}
                resetDocsignin={props.resetDocsignin}
                handlePatLogin={props.handlePatLogin}
                handleDocLogin={props.handleDocLogin}
                handlePatSignUp={props.handlePatSignUp}
                handleLogout={props.handleLogout}
                status={props.status}
            />

            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/departments" component={DepartmentsPage} />
                <Route path="/aboutus" component={AboutUsPage} />
                <Route path="/contactus" component={ContactUsPage} />
                <Route path="/departments/:doctorId" component={DoctorsPage} />
                <Route path="/patients/appointments" component={PatientAppointmentsPage} />
                <Route path="/doctors/appointments" component={DoctorAppointmentsPage} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));
