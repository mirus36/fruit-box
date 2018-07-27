import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import { List } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(
    reducer,
    { cupboard: List([List(), null, List(), null, List(), null, List(), null].map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])) },
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker(); 
