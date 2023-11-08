'use client'
import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0);
    const increaseHandler = ()=>{
        setCount(count+1);
    } 
    const decreaseHandler = ()=>{
      if(count>0){
        setCount(count-1);
      }
        
    }
   
  return (
    <div>
      <button onClick={decreaseHandler}>-</button>
      <span>{count}</span>
      <button onClick={increaseHandler}>+</button><br/>
      {count !=0 && <button onClick={()=> setCount(0)}>Reset</button>}

    </div>
  )
}
