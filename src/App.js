import React, { useMemo, useState } from 'react'
import './App.css'
import Parent from './Parent';
import Reducer from './Reducer';
const App = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  }

  

  const isEven = useMemo(() => {
    console.log("isEven called")
    let i = 0;
    while(i<1000000000) i++;
    return counterOne % 2 === 0;
  },[counterOne])

  return (
    <div className='App'>
      <h2>Use Memo hook</h2>
      <button onClick={incrementOne}>Counter One - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span><br />
      <button onClick={incrementTwo}>Counter Two- {counterTwo}</button>

      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Use Callback Hook</h2>
      <Parent/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Use Reducer Hook</h2>
      <Reducer/>
    </div>
  )
}

export default App
