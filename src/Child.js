import { memo } from "react"
import React from 'react'

const Child = ({increment,children}) => {
  console.log(`${children} Rendered`)
  return (
    <div>
      <button onClick={increment}>Increment {children}</button>
      
    </div>
  )
}

export default memo(Child)