import React, { useState } from 'react'

const Table = () => {
    const [num,setNum] = useState(1);
    const twoTable = () => {
        if(num < 10){
            setNum(num + 1)
        }
       
    }
  return (
    <div>
        <p> 2 * {num} = {2 * num}</p>
        <button onClick={twoTable}>Table</button>
    </div>
  )
}

export default Table