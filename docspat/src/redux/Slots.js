import * as ActionTypes from './ActionTypes'


export const slots = (state ={
    slot1 : null,
    slot2 : null,
    slot3 : null,
    slot4 : null,
    slot5 : null,
    slot6 : null
},action) => {
    switch(action.type)
    {
        case ActionTypes.FETCH_SLOTS:
            return {...state,slot1:action.payload.slot1,slot2:action.payload.slot2,slot3:action.payload.slot3,slot4:action.payload.slot4,slot5:action.payload.slot5,slot6:action.payload.slot6}
        default:
            return {...state}
    }
}