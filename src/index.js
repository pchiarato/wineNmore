import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import App from './components/App';
import combinedReducers from './reducers';
import './index.css';
import './styles.css';

const store = createStore(combinedReducers, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'));