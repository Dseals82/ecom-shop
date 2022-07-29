import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";
//create context creates the storage
//actual value you want to access passing default
export const UserContext = createContext({
    //if an empty object is returned it will still result as true, so we pass null to null check
    //then we pass the most basic function that returns null
    //this is the default data of the user context
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

//user Reducer
const userReducer = (state, action) => {
    const {type,payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in the user Reducer`)
    }   
    
}



//UserProvider is an alias for the userContext storage value
//actual component that will wrap app and give access to all of apps children
export const UserProvider = ({children}) => {
    //const [currentUser, setCurrentUser] = useState(null);

    //initial state to be passed in reducer
    const INITIAL_STATE = {
        currentUser: null
    }

    //this returns the state object or current values being stored by reducer and the dispatch func
    //dispatch func is a func that works by whenever its called it takes the action and pass it int user reducer 
    const [state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

    //value to be passed via the value prop for userContext.Provider
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            //create user document only if user comes through.  Otherwise, set current user
            if(user){
                createUserDocumentFromAuth(user);  
            }
            //will either be null or authenticated object
            setCurrentUser(user);
        });
        return unsubscribe
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};


// const userReducer = (state, action)=>{
//     return {
//         currentUser:null
//     }
// }