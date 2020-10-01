import React from "react";
import Select from "../components/select";

let Contract_2_Mixin = {

    /** Устанавливаем состояние для полей 2-го типа */
    sendStateType_2()
    {
        this.setState({
            tasks: []
        });
    },

    /**
     * Добавляем поля формы для 2-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_2()
    {
        return(
            <React.Fragment>
                <ul className="row checkboxesdata2">
                    <li>
                        <Select
                            multiple={"multiple"}
                            name={'tasks'}
                            options = {this.contract_2['tasks']}
                            value = {this.state.tasks}
                            placeholder = {'Задачи'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Contract_2_Mixin;