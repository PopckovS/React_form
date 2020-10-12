import React from "react";
import Input from "../component/Input";
import Error from "../component/Error";


/** Компонента включает в себя сразу 3 компоненты Label, Input, Error
 * @param props.title - Надпись для обозначения поля
 * @param props.name  - Название как для Label,Input,Error
 * @param props.value - Значенеи контролируемого компонента
 * @param props.handleChange - Метод обработчик данного поля
 * @returns {JSX.Element} */
function BlockInput(props)
{

    return(
            <div className="hold-input">

                <label htmlFor={props.name}>{props.title}</label>

                <Input name={props.name} value={props.value} handleChange={props.handleChange}/>

                <Error name={props.name} text={"Это поле необходимо заполнить."} class={"error-validate"}/>

            </div>
    );
}

export default BlockInput;