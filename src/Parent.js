import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [age,setAge] = useState(20)
    const [sal,setSal] = useState(15000)

    const incrementAge = useCallback(()=>{
        setAge(age+1)
        // console.log("incrementAge rendered")
    },[age])

    const incrementSal = useCallback(()=>{
        setSal(sal+1)
        // console.log("incrementSal renderd")
    },[sal])

    return (
        <div>
            <Child increment={incrementAge}>Age</Child>
            <Child increment={incrementSal}>Sal</Child>
        </div>
    )
}

export default Parent
