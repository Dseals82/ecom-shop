import React from 'react';
import './form-input.styles.scss';

function FormInput({label, ...otherFormInputProps}) {
  return (
    <div className='group'>
    <input className='form-input' {...otherFormInputProps} />
    {label && (
        <label className={`${otherFormInputProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
    )} 
        
    </div>
  )
}

export default FormInput
