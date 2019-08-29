import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, addBY} from './actions'

function App() {
 const counter = useSelector(state => state.counter)
 const isLogged = useSelector(state => state.isLogged)
 const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter} </h1>
      {isLogged ? <h3> Valuable Information I shouldnot see  </h3> : ''}
      

      <button onClick={()=>dispatch(increment())}> + </button>
      <button onClick ={()=> dispatch(decrement())}> - </button>
      <button onClick ={()=> dispatch(addBY(5))}> add 5 </button>
    </div>
  );
}

export default App;
