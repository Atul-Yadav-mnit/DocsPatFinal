import React from 'react'
import * as ActionTypes from './ActionTypes'

export const Departments = (state = {
    isLoading : true,
    err : null,
    departments : null
}, action) =>  {
    switch(action.type){
        case ActionTypes.ADDING_DEPARTMENTS:
            return{...state, isLoading: false, err:null, departments : action.payload }
        case ActionTypes.LOADING_DEPARTMENTS:
            return{...state, isLoading: true, err:null, departments:null}
        case ActionTypes.FAILED_DEPARTMENTS:
            return{...state, isLoading: false, err:action.payload, departments:null}
        default:
            return state
    }

    
}