
import React, { useState,  } from 'react';
import {SignUpFormContainer,} from './sign-up-form.styles.jsx';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
// import { UserContext } from '../../context/user.context';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action.js';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

function SignUpForm() {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    // const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
      setFormFields(defaultFormFields)
    };

    const handleSubmit = async (e) => {
      //prevent default behavior in form
      e.preventDefault();
      //check if passwords match
      if (password !== confirmPassword) {
        alert('Oops! passwords do not match');
        return;
      }

      try {
        dispatch(signUpStart( email, password, displayName))   
        resetFormFields();
      } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
          alert('Cannot create user, email already in use')
        }else {
          console.log('Oops! user could not be created', error)
        }
        
      }
      
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

  return (
    <SignUpFormContainer>
    <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput label='Display Name' required onChange={handleChange} name='displayName' value={displayName} />
        <FormInput label='Email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' required onChange={handleChange} name='password' value={password} type='password' />
        <FormInput label='Confirm Password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} type='password' />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpFormContainer>
  )
}

export default SignUpForm;
