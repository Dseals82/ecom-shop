import React from 'react';
import {BaseButton, GoogleSignInButton, InvertedButton, CheckOutButton} from  './button.styles.jsx';

// 3 types of button
// default
// inverted
// google sign in

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
  checkout: 'checkout'
}
// takes buttyType string and returns either inverted, google, or base button class
//defualt params === "base"
//function maps different components
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.checkout]: CheckOutButton,

  }[buttonType]
)


const Button = ({children, buttonType, ...otherButtonProps}) => {
  const CustomButtonToRender = getButton(buttonType);
  return (
    <CustomButtonToRender {...otherButtonProps}>
      {children}
    </CustomButtonToRender>
  )
}

export default Button;
