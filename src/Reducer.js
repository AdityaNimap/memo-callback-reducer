import React, { useReducer } from 'react'

const Reducer = () => {
    const initialState = 0 ;

    const reduce = (state, action) => {
        switch(action){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            case 'RESET':
                return initialState;
            default:
                return state;
        }
    }

   
       const [count,dispatch]= useReducer(reduce,initialState);
    
  return (
    <div>
        <div>Count - {count}</div>
      <button onClick={()=> dispatch("INCREMENT")}>Increment</button>
      <button onClick={()=> dispatch("RESET")}>Reset</button>
      <button onClick={()=> dispatch("DECREMENT")}>Decrement</button>
    </div>
  )
}

export default Reducer
