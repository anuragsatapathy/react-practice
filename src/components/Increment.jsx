import React, { useState } from 'react'

export const Increment = () => {
  const [count,setCount] = useState(0);
  const handleCount = () =>{
  
    setCount(count + 1);
  }    

  const restValue = () => {
    setCount(0);
  }
  return (

    <div>
     <p>count - {count}</p>
     <button onClick={handleCount}>Increment</button>
     <button onClick={restValue}>Reset</button>
    </div>
  )
}
