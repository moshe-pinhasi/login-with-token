import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ACTIONS_TYPES } from './actions/types'

import reduxtThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import authService from './services/authService'

const createStoreWithMiddleware = applyMiddleware(reduxtThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token')
if (token) {
    authService.setToken(token)
    store.dispatch({type: ACTIONS_TYPES.AUTH_LOGIN})
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
