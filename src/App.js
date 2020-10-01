import React from 'react';
import Form from "./Form1/FormContract";


/** Основной Компонент, запускает отображение формы отправки */
class App extends React.Component{

  render() {
      return (
          <div className="App">

            <div className="App-header">
              <h2>React JS форма отправки</h2>
            </div>

            {/** Подключаем форма отправки  */}
            <Form/>

          </div>
      );
  }

}


export default App;
