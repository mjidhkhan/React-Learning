import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer  from './reducers'
import { Provider} from 'react-redux'





const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


/*
// STORE [Globalized State]

// ACTION [What you want to do] [INCREMENT]

  const increment = () => {
      return {
          type: 'INCREMENT'
      }
  }
  const decrement = () => {
      return {
          type: 'DECREMENT'
      }
  }


// REDUCER [Call Action ]

const counter = (state=0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+ 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

//DISPATCH [ Reducer ]
  store.dispatch(increment())
  store.dispatch(increment())
  store.dispatch(increment())
  store.dispatch(decrement())
  */
ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
