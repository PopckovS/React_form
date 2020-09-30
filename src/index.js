import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from "./Form";

import * as serviceWorker from './serviceWorker';


/** Рендер основного компонента */
ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
