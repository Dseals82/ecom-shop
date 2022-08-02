import { combineReducers } from 'redux';
//import all reducers
import { userReducer } from './user/user.reducer';


//root reducer... one single reducer combined of many reducers.
export const rootReducer = combineReducers({
    user: userReducer,
});