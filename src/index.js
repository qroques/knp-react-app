import React from 'react';
import ReactDOM from 'react-dom';
import './Style/Main.css';
import App from './Component/App';
import registerServiceWorker from './ServiceWorker';
import { createStore } from 'redux'
import { default as mainReducer, debug } from './Redux/State'

const reducer        = Number(process.env.REACT_APP_DEBUG_STATE)
  ? debug(mainReducer)
  : mainReducer;
const store          = createStore(reducer, reducer());

ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
