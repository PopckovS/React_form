import React from 'react';

/**
 * Компонент отвечает за определение счетчика
 * @param props
 * @param props.name -
 * @param props.setCount -
 * @returns {JSX.Element} */
function CounterButtons(props)
{
    return(
        <div>
            <h4>Уровень счетчика: {props.count}</h4>

            <button onClick={()=>props.setCount(props.count+1)}>
                Увеличить
            </button>

            <button onClick={()=>props.setCount(0)}>
                Сбросить
            </button>

            <button onClick={()=>props.setCount(props.count-1)}>
                Уменьшить
            </button>

            <div>===========================================================</div>
        </div>
    );
}

export default CounterButtons