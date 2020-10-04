import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';

/** Импортируем компоненты дополнительных полей */
import Fields1 from "./Fields/Fields1";
import Fields2 from "./Fields/Fields2";
import Fields3 from "./Fields/Fields3";
import Fields4 from "./Fields/Fields4";

function AdditionalFields(props)
{

    /** Выбираем дополнительные поля */
    const choseAdditionalFields = (value) =>
    {
        let className = 'checkboxesdata1';
        let componentType = <Fields1/>;

        switch (value) {
            case "4":
                className = "checkboxesdata4";
                componentType = <Fields4/ >;
                break;
            case "3":
                className = "checkboxesdata3";
                componentType = <Fields3/>;
                break;
            case "2":
                className = "checkboxesdata2";
                componentType = <Fields2/>;
                break;
            default:
                className = "checkboxesdata1";
                componentType = <Fields1/>;
        }

        return(
            <React.Fragment>
                <div className={className}>
                    {componentType}
                </div>
            </React.Fragment>
        );
    }


    /** Возвращаем дополнительные поля */
    return(
        <React.Fragment>
            {choseAdditionalFields(props.type)}
        </React.Fragment>
    )
}


export default AdditionalFields;