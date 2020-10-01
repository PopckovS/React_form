import Input from "../components/input";
import React from "react";

let Contract_4_Mixin = {
    /**
     * Добавляем поля формы для 4-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_4()
    {
        return(
            <Input inputType={'text'}
                   name={'add4'}
                   value={this.state.add4}
                   placeholder = {'Enter your add4444444444'}
                   handleChange={this.handleInput}
            />
        );
    }
}

export default Contract_4_Mixin;