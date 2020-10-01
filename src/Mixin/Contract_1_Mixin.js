import React from "react";
import Select from "../components/select";


let Contract_1_Mixin = {

    /** Устанавливаем состояние для полей 1-го типа */
    sendStateType_1()
    {
        this.setState({
            mat_model: [],
            func_activation: [],
            algoritm: [],
            pc:{
                equipment_composition: [],
                software: [],
                library: []
            },
            metrics: [],
            services: []
        });
    },

    /**
     * Добавляем поля формы для 1-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_1()
    {
        return(
            <React.Fragment>
                {/*select2-container select2-container-multi select2*/}
                <ul className="row">
                    <li>
                        <label>Нейросеть</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'mat_model'}
                            options = {this.contract_1['mat_model']}
                            value = {this.state.mat_model}
                            placeholder = {'Нейросеть'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                    <li>
                        <label>Функция активации</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'func_activation'}
                            options = {this.contract_1['func_activation']}
                            value = {this.state.func_activation}
                            placeholder = {'Функция активации'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Алгоритмы</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'algoritm'}
                            options = {this.contract_1['algoritm']}
                            value = {this.state.algoritm}
                            placeholder = {'Алгоритмы'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                    <li>
                        <label>Метрики</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'metrics'}
                            options = {this.contract_1['metrics']}
                            value = {this.state.metrics}
                            placeholder = {'Метрики'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Услуги</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'services'}
                            options = {this.contract_1['services']}
                            value = {this.state.services}
                            placeholder = {'Услуги'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <label>ПЭВМ</label>
                    <li>
                        <label>Состав оборудования</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'equipment_composition'}
                            options = {this.contract_1['pc']['equipment_composition']}
                            value = {this.state.equipment_composition}
                            placeholder = {'ПЭВМ'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>ПО</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'software'}
                            options = {this.contract_1['pc']['software']}
                            value = {this.state.software}
                            placeholder = {'ПО'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>

                    <li>
                        <label>Библиотеки</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'library'}
                            options = {this.contract_1['pc']['library']}
                            value = {this.state.library}
                            placeholder = {'Библиотеки'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}

export default Contract_1_Mixin;