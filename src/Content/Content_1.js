import React from 'react';
import {useState, useCallback, useEffect, useMemo, useContext} from 'react';

import CounterButtons from "./CounterButtons";


function Content_1(props)
{
    
    const [count, setCount] = useState(0);


    /** Это хук useEffect - он исполняется автоматически сразу после первого рендереинга
     * Этот useEffect сработает с задержкой в 1 секунды, состояние имеет доступ к Пропсам и состояниям. */
    useEffect( () => {
        setTimeout(() => { document.title = 'Этот Title встроен с помощью useEffect'; },
            1000
        );
    });


    // /**  */
    // useEffect( () => {
    //     setTimeout(() => { document.title = 'Этот Title встроен с помощью useEffect'; },
    //         2000
    //     );
    // });



    /** Функция возвращает компонент,озвращает надпись */
    const AddDivLable = () => {
        return(
            <React.Fragment>
                <div>Эта надпись добавлена при помощи useEffect</div>
                <div>При вызове этой надписи count = {count}</div>
                <div>========================================</div>
            </React.Fragment>
        );
    };


    return(
        <React.Fragment>
            <h4>{props.name}</h4>

            {/** Счетчик кнопок */}
            <CounterButtons count={count} setCount={setCount} />

            <div id={"main"}>
                <AddDivLable/>
                <AddDivLable/>
            </div>

        </React.Fragment>
    );
}

export default Content_1;