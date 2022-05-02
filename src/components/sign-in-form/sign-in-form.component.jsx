import React, {useState} from 'react';
import './sign-in-form.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
// import { UserContext } from '../../context/user.context';

const defaultFormFields = {
    email: '',
    password: '',
};

function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    //create a context passing in UserContext so that you have access to the init val and setter func
    //destructure the setter func
    // const { setCurrentUser} = useContext(UserContext);
    const resetFormFields = () => {
      setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user);
             
    };

    const handleSubmit = async (e) => {
      //prevent default behavior in form
      e.preventDefault();

      try {
        await signInAuthUserWithEmailAndPassword(email, password);
        //set Current user so that the userContext has access to the data
        // setCurrentUser(user);
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
        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
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
