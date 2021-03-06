import { USER_ACTION_TYPES } from './user.types';

//initial state to be passed in reducer
const INITIAL_STATE = {
    currentUser: null
}
//user Reducer
//actions are passed to every signle reducer, so it's possible that an action 
//does not trigger the userReducer, so it should return state so that
//react knows there was not change in the object living in memory
export const userReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }   
    
}