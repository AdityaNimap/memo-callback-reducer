import { memo } from "react"
import React  from 'react'

const Child = (props) => {
    const {fun, counter} = props
    console.log("Child Component Rendered")
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

export default memo(Child)
