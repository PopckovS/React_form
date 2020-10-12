import React from 'react';

function Input(props)
{


    return(
        <input onChange={props.handleChange}
            name={props.name}
            value={props.value}
            type={"text"}
            className="datepicker"
        />
    );
}

export default Input;