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


    /** Функция запуска валидации полей */
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
        console.log('===============================================');
    }


    /** Проверка на строку */
    const validationText = (name, value) =>{
        if ((typeof value) !== 'string'){
            setErrorSubmit({...ErrorSubmit, [name]: 'Это поле должно быть строкой.'});
        }else{
            delete ErrorSubmit[name];
        }
    }

    /** Проверка на число */
    const validationNumber = (name, value) =>{
        if (isNaN(value)){
            setErrorSubmit({...ErrorSubmit, [name]: 'Это поле должно быть числом.'});
        }else{
            delete ErrorSubmit[name];
        }
    }

    /** Проверка на пустоту */
    const validationNoEmpty = (name, value) =>{
        if(typeof value === "undefined" || value === null || value ===  ""){
            setErrorSubmit({...ErrorSubmit, [name]: 'Это поле необходимо заполнить.'});
        }else{
            delete ErrorSubmit[name];
        }
    }


    /** Проверка всей формы перед отправкой */
    const handleSumbit = (event) =>{
        console.log('======================= ФОРМА ОТПРАВКИ ========================');
        console.log(ErrorSubmit);
        console.log('===============================================');

        /** Если есть ошибки то остановка работы */
        if (Object.keys(ErrorSubmit).length != 0) {
            event.preventDefault();
        }
    }


    /** Рендер самой формы */
    return(
        <React.Fragment>
            <h4>{props.title}</h4>
            <form onSubmit={handleSumbit}>

                <fieldset>

                    {/** ================ Первый ряд ================ */}
                    <ul className="row">
                        <li>
                            <BlockInput  title={"Название"} name={"name"}
                                         value={formState.name}
                                         handleChange={handleChange}
                                         error={ErrorSubmit.name}
                            />
                        </li>
                        <li>
                            <BlockInput  title={"Адресс"} name={"adress"}
                                         value={formState.adress}
                                         handleChange={handleChange}
                                         error={ErrorSubmit.adress}
                            />
                        </li>
                    </ul>


                    {/** ================ Второй ряд ================ */}
                    <ul className="row">
                        <li>
                            <BlockInput  title={"Дата"} name={"date"}
                                         value={formState.date}
                                         handleChange={handleChange}
                                         error={ErrorSubmit.date}
                            />
                        </li>
                        <li>
                            <BlockInput  title={"ID онтракта"} name={"contractor_id"}
                                         value={formState.contractor_id}
                                         handleChange={handleChange}
                                         error={ErrorSubmit.contractor_id}
                            />
                        </li>
                    </ul>


                    {/** ================ Третий ряд ================ */}
                    <ul className="row">
                        <li>
                            <BlockInput  title={"Исполнитель"} name={"hirer_id"}
                                         value={formState.hirer_id}
                                         handleChange={handleChange}
                                         error={ErrorSubmit.hirer_id}
                            />
                        </li>
                        <li>
                            <BlockInput  title={"Цена"} name={"price"}
                                         value={formState.price}
                                         handleChange={handleChange}
                                         error={ErrorSubmit.price}
                            />
                        </li>
                    </ul>


                    {/** ================ Четвертый ряд ================ */}
                    <ul className="row">
                        <li>
                            <BlockInput  title={"ID Платежа"} name={"payment_id"}
                                         value={formState.payment_id}
                                         handleChange={handleChange}
                                         error={ErrorSubmit.payment_id}
                            />
                        </li>
                    </ul>


                    {/** ================ Пятый ряд ================ */}
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


                <button>
                    Отправить
                </button>

            </form>
        </React.Fragment>
    );
}

export default Content_2;