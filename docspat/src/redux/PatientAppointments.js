import * as ActionTypes from './ActionTypes'

export const PatientAppointments = (state = {
    appointments : []
}, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PAT_APPOINTMENTS:
            return { ...state, appointments: action.payload }
        case ActionTypes.RESET_PAT_APPOINTMENTS:
            return{...state, appointments:[]}
        default:
            return {...state}
    }
}