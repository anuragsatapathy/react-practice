import React, { use, useEffect, useState } from 'react'

const Effects = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log("mounting phase");
    },[]) //mounting phase //it runs only once

    useEffect(() => {
        console.log("updating phase"); //updaing phase
    },[count])

    useEffect(() => {
        //unmounting phase
        const id =  setTimeout(() =>{
            console.log("settimeout")
        },5000);
        return () =>{
            clearInterval();
            console.log("unmounting phase")
            clearTimeout(id);
        }
    },[])

    const handleEffect = () => {
        setCount(count + 1);
    }

  return (

    <div>
        <h3>count - {count}</h3>
        <button onClick={handleEffect}>Click</button>
    </div>
  )
}

export default Effects
