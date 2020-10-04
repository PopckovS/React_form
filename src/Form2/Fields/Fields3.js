import React from "react";
import Input from "../../components/input";
import {useState, useEffect} from 'react';


function Fields3(props)
{
    return(
        <React.Fragment>
            <ul className="row checkboxesdata2">
                <li>
                    <label>Тип полей 3</label>
                    <Input inputType={'text'}
                           name={'name3'}
                           value={props.name3}
                           placeholder={'name3 :'}
                           handleChange={props.handleInput}
                    />
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Fields3;