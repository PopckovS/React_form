import React from 'react';
import {useState, useCallback, useEffect, useMemo, useContext} from 'react';

/** Начальное состояние дял Хуков */
import InitialState from "./InitialState";

/** Значения для Selector */
import InitialValue from "./InitialValue";

/** Валидация состояния */
import ErrorState from "./ErrorState";

/** Компоненты */
import Input from "./component/Input";
import Error from "./component/Error";
import BlockInput from "./component/BlockInput";
import BlockSelect from "./component/BlockSelect";



/** Функциональный компонент рендерит форму отправки
 * @param props
 * @returns {JSX.Element} */
function Content_2(props)
{
    /** Установка состояния */
    const [formState, setFormState] = useState(InitialState);

    /** Финальный массив с ошибками */
    const [ErrorSubmit, setErrorSubmit] = useState({});



    /** Функцуия обработки состояний */
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setFormState({...formState, [name]: value});

        validationField(name,value);
    };


    /** Функция валидации полей */
    const validationField = (name, value) => {
        console.log('===== Состояние обьекта валидации =====');
        console.log(name);
        console.log(ErrorState[name]);

        if(ErrorState[name].type === 'text'){
            validationText(name, value);
        }
        if(ErrorState[name].type === 'number'){
            validationNumber(name, value);
        }
        if(ErrorState[name].noEmpty == true){
            validationNoEmpty(name, value);
        }

        console.log('================ СПИСОК ОШИБОК ================');
        console.log(ErrorSubmit);
        console.log('================================');
    }


    /** Проверка на строку */
    const validationText = (name, value) =>{
        if ((typeof value) !== 'string'){
            setErrorSubmit({...ErrorSubmit, [name]: 'Это поле должно быть строкой.'});
        }
    }

    /** Проверка на число */
    const validationNumber = (name, value) =>{
        if (isNaN(value)){
            setErrorSubmit({...ErrorSubmit, [name]: 'Это поле должно быть числом.'});
        }
    }

    /** Проверка на пустоту */
    const validationNoEmpty = (name, value) =>{
        if(typeof value === "undefined" || value === null || value ===  ""){
            setErrorSubmit({...ErrorSubmit, [name]: 'Это поле необходимо заполнить.'});
        }
    }


    /** Рендер самой формы */
    return(
        <React.Fragment>
            <h4>{props.title}</h4>
            <form>

                <fieldset>

                    <ul className="row">
                        <li>
                            <BlockInput error={ErrorSubmit.name} title={"Название"} name={"name"} value={formState.name} handleChange={handleChange} />
                        </li>
                        <li>
                            <BlockInput error={ErrorSubmit.adress} title={"Адресс"} name={"adress"} value={formState.adress} handleChange={handleChange} />
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <BlockInput error={ErrorSubmit.date} title={"Дата"} name={"date"} value={formState.date} handleChange={handleChange} />
                        </li>
                        <li>
                            <BlockInput error={ErrorSubmit.contractor_id} title={"ID онтракта"} name={"contractor_id"} value={formState.contractor_id} handleChange={handleChange} />
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <BlockInput error={ErrorSubmit.hirer_id} title={"Исполнитель"} name={"hirer_id"} value={formState.hirer_id} handleChange={handleChange} />
                        </li>
                        <li>
                            <BlockInput error={ErrorSubmit.price} title={"Цена"} name={"price"} value={formState.price} handleChange={handleChange} />
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <BlockInput error={ErrorSubmit.payment_id} title={"ID Платежа"} name={"payment_id"} value={formState.payment_id} handleChange={handleChange} />
                        </li>
                    </ul>


                    <ul className="row">
                        <li>
                            <BlockSelect
                                title={"Тип"}
                                name={"type"}
                                class={"select2"}
                                multiple={""}
                                value={formState.type}
                                handleChange={handleChange}
                                options={InitialValue.SelectType}
                            />
                        </li>
                        <li>
                            <BlockSelect
                                title={"Селектор"}
                                name={"selector"}
                                class={"select2"}
                                multiple={""}
                                value={formState.selector}
                                handleChange={handleChange}
                                options={InitialValue.SelectSelector}
                            />
                        </li>
                    </ul>


                </fieldset>



                <button>Отправить</button>

            </form>
        </React.Fragment>
    );
}

export default Content_2;