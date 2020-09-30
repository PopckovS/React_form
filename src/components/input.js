import React from 'react';

/**
 *
 * @param props
 * @returns {JSX.Element}
 */
function Input(props)
{
    return (
        <input type={props.inputType}
               id={props.name}
               name={props.name}
               value={props.value}
               placeholder = {props.placeholder}
               onChange={props.handleChange}
        />
    );
}

export default Input;

