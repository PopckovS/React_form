import React from 'react';
import Form1 from "./Form1/FormContract1";
import FormContract2 from "./Form2/FormContract2";


/** Основной Компонент, запускает отображение формы отправки */
class App extends React.Component{

  render() {
      return (
          <div className="App">

            <div className="App-header">
              <h2>React JS форма отправки</h2>
            </div>

            {/** Подключаем форма отправки  */}
            <FormContract2 />

          </div>
      );
  }

}


export default App;
