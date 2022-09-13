import React, {useState} from 'react';
import {SignInFormContainer, ButtonsContainer} from './sign-in-form.styles.jsx';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
// import { UserContext } from '../../context/user.context';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
    email: '',
    password: '',
};

function SignInForm() {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const resetFormFields = () => {
      setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())    
    };

    const handleSubmit = async (e) => {
      //prevent default behavior in form
      e.preventDefault();

      try {
        dispatch(emailSignInStart)
        resetFormFields();
      } catch (error) {

        switch(error.code){
          case "auth/wrong-passowrd":
            alert('incorrect password for email');
            break
          case "auth/user-not-found":
            alert('user does not exist');
            break;
          default:
            console.log(error)    
        }
        
      }
      
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

  return (
    <div>
    <SignInFormContainer>
    <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
    </div>
  )
}

export default SignInForm
