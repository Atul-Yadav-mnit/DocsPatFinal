import React from 'react'
import * as ActionTypes from './ActionTypes'

export const Testimonials = (state = {
    isLoading : true,
    err : null,
    testimonials : null
}, action) =>  {
    switch(action.type){
        case ActionTypes.ADDING_TESTIMONIALS:
            return{...state, isLoading: false, err:null, testimonials : action.payload }
        case ActionTypes.LOADING_TESTIMONIALS:
            return{...state, isLoading: true, err:null, testimonials:null}
        case ActionTypes.FAILED_TESTIMONIALS:
            return{...state, isLoading: false, err:action.payload, testimonials:null}
        default:
            return state
    }

    
}

