import React from 'react'
import * as ActionTypes from './ActionTypes'

export const Doctors = (state = {
    isLoading : true,
    err : null,
    doctors : null
}, action) =>  {
    switch(action.type){
        case ActionTypes.ADDING_DOCTORS:
            return{...state, isLoading: false, err:null, doctors : action.payload }
        case ActionTypes.LOADING_DOCTORS:
            return{...state, isLoading: true, err:null, doctors:null}
        case ActionTypes.FAILED_DOCTORS:
            return{...state, isLoading: false, err:action.payload, doctors:null}
        default:
            return state
    }

    
}