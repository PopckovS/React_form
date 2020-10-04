import React from "react";
import Select from "../../components/select";
import Input from "../../components/input";

function Fields1(props)
{
    return(
        <React.Fragment>

            <ul className="row">
                <li>
                    <label>Тип полей 1</label>
                    <Input inputType={'text'}
                           name={'name1'}
                           value={props.name1}
                           placeholder={'name1 :'}
                           handleChange={props.handleInput}
                    />
                </li>
            </ul>

        </React.Fragment>
    );
}

export default Fields1;