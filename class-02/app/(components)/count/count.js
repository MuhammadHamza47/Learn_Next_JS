'use client'
import { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    const increaseHandler = () => {
       setCount(count + 1)
    }
    const decreaseHandler = () => {
       setCount(count - 1)
    }
  return (
    <div>
        <button onClick={decreaseHandler}>-</button> 
        <span>{count}</span>  
        <button onClick={increaseHandler}>+</button>   
    </div>
  )
}
