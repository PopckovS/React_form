import React from 'react';


/** Компонент функция для многократного использования в форме */
function Select(props)
{
    /** Перебираю значения,ормирую option для Select */
    const options = props.options;
    const listOptions = options.map((option) =>
        <option
            value={option}
            key={option}
            >
            {option}
        </option>);


    /** Рендерим поле Select */
    return(
        <select
                className={props.class}
                multiple={props.multiple}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}>

            {/** option */}
            {/*    // /!** Дефолтная опция *!/*/}
            {/*    // <option value="" disabled>*/}
            {/*    //     {props.placeholder}*/}
            {/*    // </option>*/}

            {listOptions}
            {/** option */}

        </select>
    )
}

export default Select;