import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Departments } from './Departments';
import { Doctors } from './Doctors';
import { Testimonials} from './Testimonials';
import { docSignin, InitialFeedback, patSignin, SignUp } from './FormsInitials';
import {Status} from './Status';
import { slots } from './Slots';
import { PatientAppointments } from './PatientAppointments';
import { DoctorAppointments } from './DoctorAppointments';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            testimonials : Testimonials,
            departments : Departments,
            doctors : Doctors,
            status: Status,
            slots:slots,
            PatientAppointments:PatientAppointments,
            DoctorAppointments:DoctorAppointments,
            ...createForms({
                feedback : InitialFeedback,
                signup : SignUp,
                patsignin: patSignin,
                docsignin: docSignin
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}