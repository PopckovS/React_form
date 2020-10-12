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


    /** Функцуия обработки состояний */
    const handleChange = (event) => {
        /** Используем функцию обновления состояния */
        setFormState({
            ...formState, /** Копируем старый обьект */
            [event.target.name]: event.target.value /** Заменяем только то значение что было изменено */
        });
        console.log(formState);
    };


    /** Рендер самой формы */
    return(
        <React.Fragment>
            <h4>{props.title}</h4>
            <form>

                <fieldset>

                    <ul className="row">
                        <li>
                            <BlockInput title={"Название"} name={"name"} value={formState.name} handleChange={handleChange} />
                        </li>
                        <li>
                            <BlockInput title={"Адресс"} name={"adress"} value={formState.adress} handleChange={handleChange} />
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <BlockInput title={"Дата"} name={"date"} value={formState.date} handleChange={handleChange} />
                        </li>
                        <li>
                            <BlockInput title={"ID онтракта"} name={"contractor_id"} value={formState.contractor_id} handleChange={handleChange} />
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <BlockInput title={"Исполнитель"} name={"hirer_id"} value={formState.hirer_id} handleChange={handleChange} />
                        </li>
                        <li>
                            <BlockInput title={"Цена"} name={"price"} value={formState.price} handleChange={handleChange} />
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <BlockInput title={"ID Платежа"} name={"payment_id"} value={formState.payment_id} handleChange={handleChange} />
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