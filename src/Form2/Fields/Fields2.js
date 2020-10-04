import React from "react";
import Select from "../../components/select";
import Input from "../../components/input";

function Fields2(props)
{
    return(
        <React.Fragment>
            <ul className="row checkboxesdata2">
                <li>
                    <label>Тип полей 2</label>
                    <Input inputType={'text'}
                           name={'name2'}
                           value={props.name2}
                           placeholder={'name2 :'}
                           handleChange={props.handleInput}
                    />
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Fields2;