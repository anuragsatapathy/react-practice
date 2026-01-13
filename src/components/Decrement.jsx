import React, { useState } from 'react'

const Decrement = () => {
    const [count,setCount] = useState(10);
    const handleCount = () =>{
        setCount(count - 1);
    }
  return (
    <div>
        <p>count - {count}</p>
        <button onClick={handleCount}>decerement</button>
    </div>
  )
}

export default Decrement