import React from 'react';
import './button.styles.scss';

// 3 types of button
// default
// inverted
// google sign in

const BUTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


const Button = ({children, buttonType, ...otherButtonProps}) => {
  return (
    <button className={`button-container ${BUTON_TYPE_CLASSES[buttonType]}`} {...BUTON_TYPE_CLASSES}>
      {children}
    </button>
  )
}

export default Button;
