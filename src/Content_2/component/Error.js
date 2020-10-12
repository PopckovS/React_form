import React from 'react';


function Error(props)
{

    // /** Если стили не определены пропрасми с верху, то даем дефолтные */
    // const finedClassName = () =>
    // {
    //     console.log(props.class)
    //     if (typeof props.class == "null") {
    //         let className = "error-validate";
    //         alert(111);
    //     } else {
    //         let className = props.class;
    //         alert(222);
    //     }
    // }

    return(
        <label htmlFor={props.name} className={props.class}>
            {props.text}
        </label>
    );
}

export default Error;