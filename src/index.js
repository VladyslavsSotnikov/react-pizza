//Import librarys
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
//Import components
import App from './App';

//Import styles
import './scss/app.scss'

ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

