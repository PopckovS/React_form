import React from "react";
import Error from "../component/Error";

/**
 * Компонент отрабатывает поле Select
 * @param props
 * @returns {JSX.Element} */
function BlockSelect(props)
{
    // console.log('===== Select '+ props.name + ' =====');
    // console.log(props.options);

    /** Формируем опции для поля Select */
    const listOptions = props.options.map((option) =>
        <option
            value={option.value}
            key={option.value}
        >
            {option.title}
        </option>);


    return(
        <div className="hold-input">
            <label htmlFor={props.name}>
                {props.title}
            </label>
            <select
                className={props.class}
                multiple={props.multiple}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                {listOptions}
            </select>
        </div>
    );
}

export default BlockSelect;