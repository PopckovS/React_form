import React from 'react';
import ReactDOM from 'react-dom';
import FormContract1 from "./Form1/FormContract1";
import FormContract2 from "./Form2/FormContract2";

import Content_1 from "./Content/Content_1";
import Content_2 from "./Content_2/Content_2";

import * as serviceWorker from './serviceWorker';


/** Рендер основного компонента */
ReactDOM.render(
  <React.StrictMode>

        {/** Подключаем Контен */}
        {/*<Content_1 name={"Главный контент"}/>*/}


        {/** Подключаем Тестовую форму */}
        <Content_2 title={"Тестовая форма отправки"}/>


        {/** Подключаем форма отправки  */}
        {/*<FormContract2 />*/}

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

/** =========================== Классы и Хуки ===========================
 В классах для обновления состояния я использую метод this.setState(Сюда передаются значения)
 Использование этого метода в классе соединяет превыдующее состояние и новое.

 this.setState({age:10})
 this.setState({name:"Igor"})

 В результате получим:
 this.setState({
    age:10,
    name:"Igor"
 })

 В хуках мы тоже определяем состояния при помощи useState, при обьявлении состояния в хуках
 мы можем устанавливать значение как: строки, числа и обьекты.
 А обновление можно сделать при помощи useStateUpdater, но в отличии от Классов в хуках
 обновление состояния не обьединяет новое и старое состояние, а полностью заменяет его,
 то есть при обновлении обьектов, следует передавать обьект полностью целиком.

 // setState (объединение объектов) - useState (замена объекта)
 // предположим, что начальное состояние - {name: "Igor"}

 setState({ age: 30 });
 // новым состоянием будет
 // {name: "Igor", age: 30} - объекты соединились

 useStateUpdater({ age: 30 });
 // новым состояние будет
 // {age: 30} - объект был заменен
 */

/** =========================== ===========================

 */


