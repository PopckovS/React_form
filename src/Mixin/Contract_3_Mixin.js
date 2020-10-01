import React from "react";
import Input from "../components/input";
import Select from "../components/select";



let Contract_3_Mixin = {


    // TODO !!!!!! Не знаю по чему но эти поля не добавляются !!!!!!
    /** Устанавливаем состояние для полей 3-го типа */
    sendStateType_3()
    {
        this.setState({
            promoter: {
                number_of_hours: '',
                number_of_people: '',
                number_of_days: '',
                cost_per_hour: ''
            },
            supervisor: {
                number_of_hours: '',
                number_of_people: '',
                number_of_days: '',
                cost_per_hour: ''
            },
            coordination: {
                number_of_hours: '',
                number_of_people: '',
                number_of_days: '',
                cost_per_hour: ''
            },

            name_anketa: '',
            trends: '',
            concentration: '',
            state_competitive: '',
            barriers: '',
            customer_satisfaction: '',
            current_position: '',
            efficiency: '',
            adress: [],
        });


        // TODO
        this.setState({

        });
    },


    /**
     * Добавляем поля формы для 3-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_3()
    {
        return(
            <React.Fragment>

                {/** Промоутер */}
                {this.promoterFieldsType_3()}


                {/** Супервайзер */}
                {this.supervisorFieldsType_3()}


                {/** Координация, сбор данных */}
                {this.coordinationFieldsType_3()}

                {/** Одиночные поля Select */}
                {this.ordinaryFields()}

                {/** Адреса */}
                <React.Fragment>
                    <Input inputType={'text'}
                           name={'adress'}
                           value={this.state.adress}
                           placeholder = {'Адреса :'}
                           handleChange={this.handleInput}
                    />
                </React.Fragment>


                {/** Поле для выбора Анкеты */}
                <React.Fragment>
                    <ul className="row">
                        <label htmlFor="">Анкета :</label>
                        <li>
                            <div className="hold-input">
                                <select
                                    className={"select2"}
                                    id="name_anketa"
                                    name="name_anketa"
                                    value={this.state.name_anketa}
                                    onChange={this.handleChoseAnketa}>
                                    <option value="" disabled>Анкета :</option>
                                    <option value="brend">Узнаваемость бренда</option>
                                    <option value="mobile">Использование мобильных устройств</option>
                                    <option value="multi">Потребление мультимедиа</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </React.Fragment>

                {/** Анкета */}
                {this.addAnketa(this.state.name_anketa)}

            </React.Fragment>
        );
    },



    /**
     * Поля "Промоутер" для 3-го типа Договора
     * @returns {JSX.Element}*/
    promoterFieldsType_3()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <label>Промоутер:</label>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="promoter[number_of_hours]">Кол-во часов</label>
                            <Input inputType={'text'}
                                   name={'promoter[number_of_hours]'}
                                   value={this.state.promoter.number_of_hours}
                                   placeholder = {'Кол-во часов'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="promoter[number_of_people]">Кол-во человек</label>
                            <Input inputType={'text'}
                                   name={'promoter[number_of_people]'}
                                   value={this.state.promoter.number_of_people}
                                   placeholder = {'Кол-во человек'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <div className="hold-input">
                            <label htmlFor="promoter[number_of_days]">Кол-во дней</label>
                            <Input inputType={'text'}
                                   name={'promoter[number_of_days]'}
                                   value={this.state.promoter.number_of_days}
                                   placeholder = {'Кол-во дней'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="promoter[cost_per_hour]">Стоимость часа</label>
                            <Input inputType={'text'}
                                   name={'promoter[cost_per_hour]'}
                                   value={this.state.promoter.cost_per_hour}
                                   placeholder = {'Стоимость часа'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>
            </React.Fragment>
        );
    },



    /**
     * Поля "Супервайзер" для 3-го типа Договора
     * @returns {JSX.Element}*/
    supervisorFieldsType_3()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <label>Супервайзер</label>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="period_start">Кол-во часов</label>
                            <Input inputType={'text'}
                                   name={'supervisor[number_of_hours]'}
                                   value={this.state.supervisor.number_of_hours}
                                   placeholder = {'Кол-во часов'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="supervisor[number_of_people]">Кол-во человек</label>
                            <Input inputType={'text'}
                                   name={'supervisor[number_of_people]'}
                                   value={this.state.supervisor.number_of_people}
                                   placeholder = {'Кол-во человек'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <div className="hold-input">
                            <label htmlFor="supervisor[number_of_days]">Кол-во дней</label>
                            <Input inputType={'text'}
                                   name={'supervisor[number_of_days]'}
                                   value={this.state.supervisor.number_of_days}
                                   placeholder = {'Кол-во дней'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="supervisor[cost_per_hour]">Стоимость часа</label>
                            <Input inputType={'text'}
                                   name={'supervisor[cost_per_hour]'}
                                   value={this.state.supervisor.cost_per_hour}
                                   placeholder = {'Стоимость часа'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>
            </React.Fragment>
        );
    },


    /**
     * Поля "Координация" для 3-го типа Договора
     * @returns {JSX.Element}*/
    coordinationFieldsType_3()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <label>Координация, сбор данных</label>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="period_start">Кол-во часов</label>
                            <Input inputType={'text'}
                                   name={'coordination[number_of_hours]'}
                                   value={this.state.coordination.number_of_hours}
                                   placeholder = {'Кол-во часов'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="period_start">Кол-во человек</label>
                            <Input inputType={'text'}
                                   name={'coordination[number_of_people]'}
                                   value={this.state.coordination.number_of_people}
                                   placeholder = {'Кол-во человек'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <div className="hold-input">
                            <label htmlFor="period_start">Кол-во дней</label>
                            <Input inputType={'text'}
                                   name={'coordination[number_of_days]'}
                                   value={this.state.coordination.number_of_days}
                                   placeholder = {'Кол-во дней'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>

                    <li>
                        <div className="hold-input">
                            <label htmlFor="period_start">Стоимость часа</label>
                            <Input inputType={'text'}
                                   name={'coordination[cost_per_hour]'}
                                   value={this.state.coordination.cost_per_hour}
                                   placeholder = {'Стоимость часа'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>
            </React.Fragment>
        );
    },


    /**
     * Одинарные поля для 3-го Договора
     * @returns {JSX.Element}*/
    ordinaryFields()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <li>
                        <label>Тенденции и перспективы развития рынка:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'trends'}
                            options = {this.contract_3['trends']}
                            value = {this.state.trends}
                            placeholder = {'Тенденции и перспективы развития рынка:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>

                    <li>
                        <label>Уровень концентрации товарного рынка:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'concentration'}
                            options = {this.contract_3['concentration']}
                            value = {this.state.concentration}
                            placeholder = {'Уровень концентрации товарного рынка:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Состояние конкурентной среды на рынке:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'state_competitive'}
                            options = {this.contract_3['state_competitive']}
                            value = {this.state.state_competitive}
                            placeholder = {'Состояние конкурентной среды на рынке:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Барьеры входа на рынок:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'barriers'}
                            options = {this.contract_3['barriers']}
                            value = {this.state.barriers}
                            placeholder = {'Барьеры входа на рынок:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Уровень удовлетворѐнности спроса потребителей:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'customer_satisfaction'}
                            options = {this.contract_3['customer_satisfaction']}
                            value = {this.state.customer_satisfaction}
                            placeholder = {'Уровень удовлетворѐнности спроса потребителей:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Текущая позиции Заказичка на рынке:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'current_position'}
                            options = {this.contract_3['current_position']}
                            value = {this.state.current_position}
                            placeholder = {'Текущая позиции Заказичка на рынке:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Эффективность рекламной и PR-активности производителя и его конкурентов:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'efficiency'}
                            options = {this.contract_3['efficiency']}
                            value = {this.state.efficiency}
                            placeholder = {'Эффективность рекламной и PR-активности производителя и его конкурентов:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>
            </React.Fragment>
        );
    }




}

export default Contract_3_Mixin;