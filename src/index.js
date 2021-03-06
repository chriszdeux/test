import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {App} from './App';
import {persistor, store} from './store/store';
import './styles/index.scss';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);