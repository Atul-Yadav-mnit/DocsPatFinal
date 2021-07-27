import React from 'react'
import * as ActionTypes from './ActionTypes'

export const Status = (state = {
    isloggedIn: false,
    isPat: false,
    pid: '',
    name: '',
    telnum: 0,
    email: '',
    yob: 0,
    gender: '',
    address: '',
    dname: '',
    did: ""
}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_PAT:
            return { ...state, isloggedIn: true, isPat: true, pid:action.payload.pid, name: action.payload.name, telnum: action.payload.telnum, email: action.payload.email, yob: action.payload.yob, gender: action.payload.gender, address: action.payload.address }
        case ActionTypes.LOGIN_DOC:
            return { ...state, isloggedIn: true, isPat: false, dname: action.payload.name, did:action.payload.did ,address:action.payload.address}
        case ActionTypes.LOGOUT:
            return { ...state, isloggedIn: false, isPat: false, pid:'', name: '', telnum: 0, email: '', yob: 0, gender: '', address: '', dname: '', did: "" }
        default:
            return state;
    }
}

