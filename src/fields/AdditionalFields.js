import Form from "../Form";
import React from 'react';
import ReactDOM, {render} from 'react-dom';

import Input from "../components/input";
import Select from "../components/select";


class AdditionalFields extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name2: '22222',
        }

        this.handleUserInput = this.handleUserInput.bind(this);
    }


    /** Обработка поля Input */
    handleUserInput(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(
            {[name]: value},
        )
    }

    /** Метод выбирает какие Компоненты отображать */
    choseFields()
    {
        if(this.props.TypeFields == "1"){
            return(
                <React.Fragment>

                    <Input name={'name2'}
                           type={'text'}
                           value={this.state.name2}
                           handleFunction={this.props.handleUserInput}
                    />

                </React.Fragment>
                );
        }

        if(this.props.TypeFields == "2"){
            return(
                <React.Fragment>
                    <h1>222</h1>
                </React.Fragment>
            );
        }

        if(this.props.TypeFields == "3"){
            return(
                <React.Fragment>
                    <h1>3333</h1>
                </React.Fragment>
            );
        }

        if(this.props.TypeFields == "4"){
            return(
                <React.Fragment>
                    <h1>4444</h1>
                </React.Fragment>
            );
        }


    }


    /** Рендер  */
    render()
    {
        return(
            <React.Fragment>
                {this.choseFields()}
            </React.Fragment>
        );
    }


}



export default AdditionalFields;