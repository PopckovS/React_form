import Input from "../../components/input";
import React from "react";


function Fields4(props)
{
    return(
        <React.Fragment>
            <ul className="row checkboxesdata2">
                <li>
                    <label>Тип полей 4</label>
                    <Input inputType={'text'}
                           name={'name4'}
                           value={props.name4}
                           placeholder={'name4 :'}
                           handleChange={props.handleInput}
                    />
                </li>
            </ul>
        </React.Fragment>
    );
}

export default React.memo(Fields4);