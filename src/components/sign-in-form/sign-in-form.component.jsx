import React, {useState} from 'react';
import './sign-in-form.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: '',
};

function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
      setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user); 
    };

    const handleSubmit = async (e) => {
      //prevent default behavior in form
      e.preventDefault();

      try {
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response)
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
    <div className='sign-up-form-container'>
    <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignInForm
