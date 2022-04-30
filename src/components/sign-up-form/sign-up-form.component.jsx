
import React, { useState } from 'react';
import './sign-up-form.styles.scss';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

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
        // createAuthUserWithEmailAndPassword(user)
        const { user } = await createAuthUserWithEmailAndPassword(email, password); 
        //see if user has been authenticated
        await createUserDocumentFromAuth(user, { displayName })    
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
    <div className='sign-up-form-container'>
    <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput label='Display Name' required onChange={handleChange} name='displayName' value={displayName} />
        <FormInput label='Email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' required onChange={handleChange} name='password' value={password} />
        <FormInput label='Confirm Password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;
