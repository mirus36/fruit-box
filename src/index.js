import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';
import { List } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    List([List(), null, List(), null, List(), null, List(), null]),
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
