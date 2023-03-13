import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    const fun = useCallback(() =>{
        console.log("Hello from parent")
    },[counterTwo])

    return (
        <div>
            <Child fun = {fun()} counter = {counterTwo}/>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
        </div>
    )
}

export default Parent
