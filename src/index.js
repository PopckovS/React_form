import React from 'react';
import ReactDOM from 'react-dom';
import FormContract from "./Form1/FormContract";

import * as serviceWorker from './serviceWorker';



/** Рендер основного компонента */
ReactDOM.render(
  <React.StrictMode>

        {/** Подключаем форма отправки  */}
        <FormContract />

  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
