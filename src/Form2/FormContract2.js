import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';

import MainFields from "./MainFields";



function FormContract2() {

    /** Хук состояния для поля ID, поле не меняется так что надобности в Функции добавления нету */
    const [contract_id] = useState(15);


    /** Метод для обработки отправки всей формы */
    const handleSubmit = (event) => {
        console.log();
        event.preventDefault();
    };


    /** Рендер всей формы отправки */
    return (
        <form method="GET" action="/" id="generate-report" onSubmit={handleSubmit}>

            {/** Сокрытое поле с ID контракта */}
            <input type="hidden"
                   autoComplete="off"
                   value={contract_id}
                   name="contract_id"
                   className="datepicker"
            />

            {/** Добавляем Главные и Дополнительный поля */}
            <fieldset>
                <MainFields/>
            </fieldset>

        </form>
    );
}




export default FormContract2










// function FormContract2()
// {
//     /** Устанавливанеи состояния Хуками */
//     const [age, setAge] = useState(0);
//     const [count, setCount] = useState(0);
//
//     /** В переменную handleClick присвоим стрелочную функцию,
//      * котораю будет увеличивать состояния. */
//     const handleClick = () => setCount(count + 1);
//
//     return(
//         <React.Fragment>
//             <button onClick={handleClick}>
//                 {count} Увличение с помощью Функция в нутри Функции
//             </button>
//
//             <button onClick={
//                 () =>{setAge(age + 1)}
//             }>
//                 {age} + Можно определить стрелочную функцию увеличения прямо в самом компоненте
//             </button>
//         </React.Fragment>
//     );
// }



// function FormContract2()
// {
//     const [count, setCount] = useState(0);
//
//     return (
//         <>
//             <p>Значение счетчика равно {count}.</p>
//             <button onClick={() => setCount(0)}>Сбросить</button>
//             <button onClick={() => setCount((prevVal) => prevVal + 1)}>
//                 Плюс (+)
//             </button>
//             <button onClick={() => setCount((prevVal) => prevVal - 1)}>
//                 Минус (-)
//             </button>
//         </>
//     );
// }