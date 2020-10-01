import React from 'react';
import ReactDOM from 'react-dom';

/** Импортируем стили css */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


/** Импортируем JSON для дополнительных полей Договора */
import contract_1 from "../contract/checkboxes1.js";
import contract_2 from "../contract/checkboxes2.js";
import contract_3 from "../contract/checkboxes3.js";

/** Импортируем JSON для анкеты */
import anketa_brend from "../anketa/brend.js";
import anketa_mobile from "../anketa/mobile.js";
import anketa_multi from "../anketa/multimedia.js";
import AnketaMixin from "../Mixin/AnketaMixin";

/** Импортируем Примеси для расширения класса */
import Contract_1_Mixin from "../Mixin/Contract_1_Mixin";
import Contract_2_Mixin from "../Mixin/Contract_2_Mixin";
import Contract_3_Mixin from "../Mixin/Contract_3_Mixin";
import Contract_4_Mixin from "../Mixin/Contract_4_Mixin";







class FormParent extends React.Component {
    /**
     * Конструктор, устанавливает начальные состояния, для главных полей.
     * И привязывает методы к текущему контексту класса.
     * @param props */
    constructor(props)
    {
        super(props);

        /** Наследуем примеси */
        Object.assign(FormParent.prototype, Contract_1_Mixin);
        Object.assign(FormParent.prototype, Contract_2_Mixin);
        Object.assign(FormParent.prototype, Contract_3_Mixin);
        Object.assign(FormParent.prototype, Contract_4_Mixin);

        /** Добавляем Примесь Анкету для 3-го типа договора  */
        Object.assign(FormParent.prototype, AnketaMixin);

        /** Делаем JSON дополнительных полей свойствами Класса */
        this.contract_1 = contract_1;
        this.contract_2 = contract_2;
        this.contract_3 = contract_3;


        /** Делаем JSON для разных Анкет свойствами Класса */
        this.anketa_brend = anketa_brend;
        this.anketa_mobile = anketa_mobile;
        this.anketa_multi = anketa_multi;


        /** Связываем методы класса чтобы их можно было импользовать */
        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleMultiSelect = this.handleMultiSelect.bind(this);

        /** Специальный метод для выбора типа договора */
        this.handleChoseType = this.handleChoseType.bind(this);

        /** Специальный метод для выбора типа анкеты*/
        this.handleChoseAnketa = this.handleChoseAnketa.bind(this);
    }



    /** Метод обработчик события - ввод поля Input */
    handleInput(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }


    /** Метод обработчик события - выбор поля Select */
    handleSelect(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }


    /** Метод обработка события - выбор полей Multi-Select */
    handleMultiSelect(event)
    {
        let {name, value, type, selectedOptions} = event.target;

        value = [...selectedOptions].map(o => o.value)

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }


    /** Специальный метод для выбора типа договора - выбор поля Select
     * Метод устанавливает состояния в зависиимости от выбранного типа договора */
    handleChoseType(event)
    {
        this.setState(
            {type: event.target.value}
        )

        /** Выбрать какие состояния установить */
        switch (this.state.type) {
            case "3":
                this.sendStateType_3();
                break;
            case "2":
                this.sendStateType_2();
                break;
            default:
                this.sendStateType_1();
        }
    }


    /**
     * Метод выбирает какую Анкеты отобразить для 3-го типа Договоров
     * @param event */
    handleChoseAnketa(event)
    {
        this.setState(
            {name_anketa: event.target.value}
        )

        /** Выбрать какую анкету подключить */
        switch (this.state.name_anketa) {
            case "brend":
                this.sendStateBrend();
                break;
            case "mobile":
                this.sendStateMobile();
                break;
            case "multi":
                this.sendStateMulti();
                break;
            default:

        }
    }




    /** Генерация всей формы отправки */
    render() {
        return (
            <form method="GET" action="/" id="generate-report">

                {/** Сокрытое поле с ID контракта */}
                <input type="hidden"
                       autoComplete="off"
                       value="15"
                       name="contract_id"
                       className="datepicker"
                />



                <fieldset>
                    {/** Основные поля Формы */}

                    <ul className="row">
                        {/** Наименование документа */}
                        <li>
                            <div className="hold-input">
                                <label htmlFor="">Наименование документа</label>
                                <input type="text"
                                       className="datepicker"
                                       id="name"
                                       name="name"
                                       value={this.state.name}
                                       onChange={this.handleInput}
                                />
                            </div>
                        </li>

                        {/** Дата договора */}
                        <li>
                            <div className="hold-input">
                                <label htmlFor="period_start">Дата договора</label>
                                <input type="text"
                                       autoComplete="off"
                                       className="datepicker"
                                       id="date"
                                       name="date"
                                       value={this.state.date}
                                       placeholder="__/__/____"
                                       onChange={this.handleInput}
                                />
                            </div>
                        </li>
                    </ul>


                    <ul className="row">
                        {/** Сторона: подрядчик */}
                        <li>
                            <div className="hold-input">
                                <label htmlFor="contractor_id">Сторона: подрядчик</label>
                                <input type="text"
                                       className="form-control"
                                       id="contractor_id"
                                       name="contractor_id"
                                       value={this.state.contractor_id}
                                       onChange={this.handleInput}
                                />
                            </div>
                        </li>


                        {/** Сторонa: заказчик */}
                        <li>
                            <div className="hold-input">
                                <label htmlFor="hirer_id">Сторонa: заказчик</label>
                                <input type="text"
                                       className="form-control"
                                       id="hirer_id"
                                       name="hirer_id"
                                       value={this.state.hirer_id}
                                       onChange={this.handleInput}
                                />
                            </div>
                        </li>
                    </ul>


                    <ul className="row ">
                        {/** Сумма */}
                        <li>
                            <div className="hold-input">
                                <label htmlFor="price">Сумма</label>
                                <input type="text"
                                       className="form-control"
                                       id="price"
                                       name="price"
                                       value={this.state.price}
                                       onChange={this.handleInput}
                                />
                            </div>
                        </li>

                        {/** Название платежа */}
                        <li>
                            <div className="hold-input">
                                <label htmlFor="price">Название платежа</label>

                                {/** TODO Сделать платеж */}

                            </div>
                        </li>
                    </ul>


                    <ul className="row">
                        {/** Компоненты полей формы */}
                        <li>
                            <div className="hold-input">
                                <label htmlFor="type">Выбрать тип договора</label>
                                <select id="type"
                                        name="type"
                                        value={this.state.type}
                                        onChange={this.handleChoseType}>
                                    <option value="" disabled>Выбрать тип договора</option>
                                    <option value="1">Договор №1</option>
                                    <option value="2">Договор №2</option>
                                    <option value="3">Договор №3</option>
                                    <option value="4">Договор №4</option>
                                </select>
                            </div>
                        </li>
                    </ul>


                    {/** Дополнительные поля */}
                    {this.choseAdditionalFields(this.state.type)}


                    {/** Кнопка отправки */}
                    <div className="hold-btn">
                        <a href="/" className="btn reset" type="reset" name="reset">Отменить</a>
                        <input className="btn add" type="submit" name="doSave" value="Генерировать"/>
                    </div>

                </fieldset>
            </form>
        );
    }




    /**
     * Метод выбирает какие дополнительные поля отобразить, для
     * конкретного типа договора, в зависимости от аргумента.
     * @param AdditionalFieldsType - Состояние атрибута this.state.type
     * @returns {JSX.Element} */
    choseAdditionalFields(AdditionalFieldsType)
    {
        /** Выбираем какие поля будут добавлены */
        switch (AdditionalFieldsType)
        {
            case "4":
                return (
                    <React.Fragment>
                        <div className="checkboxesdata4">
                            {this.AdditionalFields_4()}
                        </div>
                    </React.Fragment>
                );
                break;
            case "3":
                return (
                    <React.Fragment>
                        <div className="checkboxesdata3">
                            {this.AdditionalFields_3()}
                        </div>
                    </React.Fragment>
                );
                break;
            case "2":
                return (
                    <React.Fragment>
                        <div className="checkboxesdata2">
                            {this.AdditionalFields_2()}
                        </div>
                    </React.Fragment>
                );
                break;
            default:
                return (
                    <React.Fragment>
                        <div className="checkboxesdata1">
                            {this.AdditionalFields_1()}
                        </div>
                    </React.Fragment>
                );
        }
    }

}


export default FormParent;