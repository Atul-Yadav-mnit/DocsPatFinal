import * as ActionTypes from './ActionTypes'

export const DoctorAppointments = (state = {
    appointments : []
}, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_DOC_APPOINTMENTS:
            return { ...state, appointments: action.payload }
        case ActionTypes.RESET_DOC_APPOINTMENTS:
            return{...state, appointments:[]}
        default:
            return { ...state }
    }
}