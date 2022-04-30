import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlHURWeYHWx4cHX4prFwnXNEgyMmnjK-E",
    authDomain: "crown-clothing-db-c3e87.firebaseapp.com",
    projectId: "crown-clothing-db-c3e87",
    storageBucket: "crown-clothing-db-c3e87.appspot.com",
    messagingSenderId: "978695717292",
    appId: "1:978695717292:web:7ec863e5851419b26d3a09"
  };
//allows you to perform CRUD actions
const firebaseApp = initializeApp(firebaseConfig);

//init provider
const provider = new GoogleAuthProvider();
//prompt selected account to sign in
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//instantiate firestore db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    //grab document ref object from db under users collection with userAuth id
    const userDocRef = doc(db, 'users', userAuth.uid); 
    console.log(userDocRef)
    //snapshot allows you to check to see if user exists in db and allows you to access data
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    //check if user snapshot data exists
    //if user data does not exist
    //create/set the doc with the data from userAuth in my collection 
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating user!', error)
        }
    }
    

    //return user Doc Ref
    return userDocRef;
}