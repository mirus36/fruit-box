import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { List, Record } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const FruitTypes = ["Lemon", "Orange", "Kiwi"];
const FruitProps = Record({
    sizze: 0,
    type: ""
});
const createFruitProps = () => new FruitProps({
    sizze: getRandom(1, 3),
    type: FruitTypes[getRandom(0, FruitTypes.length - 1)]
});
const BoxProps = Record({
    sizze: 0,
    items: List()
});
const createBoxProps = () => new BoxProps({
    sizze: getRandom(3, 5),
    items: List(Array.apply(null, Array(getRandom(1, 3))).map((val, idx) => createFruitProps()))
});



const initialState = {
    cupboard: List(
        [createBoxProps(), createBoxProps(), createBoxProps(), createBoxProps(), null, null, null, null]
            .map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]))
};


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker(); 
