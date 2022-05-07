import { createContext, useState, useEffect } from "react";
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
//UserProvider is an alias for the userContext storage value
//actual component that will wrap app and give access to all of apps children
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
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