import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';

/** Доплнительные поля */
import AdditionalFields from "./AdditionslFields";
import Contract_3_Mixin from "../Mixin/Contract_3_Mixin";

/** Вспомогательные функции */
import showState from "./functions/helpers";

/** Дополнительные поля */
import Fields1 from "./Fields/Fields1";
import Fields4 from "./Fields/Fields4";
import Fields3 from "./Fields/Fields3";
import Fields2 from "./Fields/Fields2";



/**
 * Установка главных полей формы и состояний для них через Хуки
 * @returns {JSX.Element}
 * @constructor */
function MainFields()
{

    /** Установка начальных Состояний полей Input для Хука */
    const [formInputState, setFormInputState] = useState({
        name: 'Документ',
        date: '2020-08-14',
        contractor_id: 'подрядчик',
        hirer_id: 'заказчик',
        price: '3000000',
        payment_id: ''
    });

    const [formStateAdd_1, setFormStateAdd_1] = useState({
        name1: 'name1'
    });

    const [formStateAdd_2, setFormStateAdd_2] = useState({
        name2: 'name2'
    });

    const [formStateAdd_3, setFormStateAdd_3] = useState({
        name3: 'name3'
    });

    const [formStateAdd_4, setFormStateAdd_4] = useState({
        name4: 'name4'
    });


    /** Установка начальных Состояний полей Select для Хука */
    const [formSelectState, setFormSelectState] = useState({
        type: "1"
    });


    /** Обработчик ввода поля Input */
    const handleInput = React.useCallback((event) => {
        const {name, value} = event.currentTarget;
        setFormInputState({...formInputState, [name]: value});
        showState(formInputState, formSelectState);
    }, [setFormInputState, formInputState]);


    /** Обработчик поля elect */
    const handleSelectType = (event) => {
        const {name, value} = event.currentTarget;
        setFormSelectState({...formSelectState, [name]:value});
        showState(formInputState, formSelectState);
    };




    /** Выбираем дополнительные поля */
    const choseAdditionalFields = (value) =>
    {
        let className = 'checkboxesdata1';
        let componentType = "";

        switch (value) {
            case "4":
                className = "checkboxesdata4";
                componentType = <Fields4 value={formStateAdd_4} handleInput={handleInput} handleSelectType={handleSelectType} />;
                break;
            case "3":
                className = "checkboxesdata3";
                componentType = <Fields3 value={formStateAdd_3} handleInput={handleInput} handleSelectType={handleSelectType} />;
                break;
            case "2":
                className = "checkboxesdata2";
                componentType = <Fields2 value={formStateAdd_2} handleInput={handleInput} handleSelectType={handleSelectType} />;
                break;
            default:
                className = "checkboxesdata1";
                componentType = <Fields1 value={formStateAdd_1} handleInput={handleInput} handleSelectType={handleSelectType} />;
        }

        return(
            <React.Fragment>
                <div className={className}>
                    {componentType}
                </div>
            </React.Fragment>
        );
    }




    /** Добовляем компоненты для отображения Главных полей формы */
    return(
        <React.Fragment>

            <ul className="row">
                {/** Наименование документа */}
                <li>
                    <div className="hold-input">
                        <label htmlFor="">Наименование документа</label>
                        <input type="text"
                               className="datepicker"
                               id="name"
                               name="name"
                               value={formInputState.name}
                               onChange={handleInput}
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
                               value={formInputState.date}
                               placeholder="__/__/____"
                               onChange={handleInput}
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
                               value={formInputState.contractor_id}
                               onChange={handleInput}
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
                               value={formInputState.hirer_id}
                               onChange={handleInput}
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
                               value={formInputState.price}
                               onChange={handleInput}
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

            {/** Выбор Типа дополнительных полей */}
            <ul className="row">
                <li>
                    <div className="hold-input">
                        <label htmlFor="type">Выбрать тип договора</label>
                        <select id="type"
                                name="type"
                                value={formSelectState.type}
                                onChange={handleSelectType}>
                            <option value="" disabled>Выбрать тип договора</option>
                            <option value="1">Договор №1</option>
                            <option value="2">Договор №2</option>
                            <option value="3">Договор №3</option>
                            <option value="4">Договор №4</option>
                        </select>
                    </div>
                </li>
            </ul>

            {/** Сюда подгружаются дополнительные поля */}
            {choseAdditionalFields(formSelectState.type)}

        </React.Fragment>
    )
}

export default MainFields