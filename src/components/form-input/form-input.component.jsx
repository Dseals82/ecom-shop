import React from 'react';
import {FormInputLabel, Input, Group} from  './form-input.styles.jsx';

function FormInput({label, ...otherFormInputProps}) {
  return (
    <Group>
    <Input {...otherFormInputProps} />
    {label && (
        <FormInputLabel shrink={otherFormInputProps.value.lenght}>{label}</FormInputLabel>
    )} 
        
    </Group>
  )
}

export default FormInput
