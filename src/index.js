import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import storeObjs from './redux/store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

const { store, persistor } = storeObjs();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
