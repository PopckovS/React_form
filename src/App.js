import React from 'react';
import logo from './logo.svg';
import Form from './Form.js';


/** Основной Компонент, запускает отображение формы отправки */
class App extends React.Component{

  render() {
      return (
          <div className="App">
            <div className="App-header">
              <h2>React JS форма отправки</h2>
            </div>

            <Form/>

          </div>
      );
  }

}


export default App;
