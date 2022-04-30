import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn
