import React, { useState } from 'react'

const Calculator = () => {
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [result,setResult] = useState(null);

    const add = () => {
        setResult(Number(num1) + Number(num2));
    }

    const sub = () => {
        setResult(Number(num1) - Number(num2));
    }

    const mul = () => {
        setResult(Number(num1) * Number(num2));
    }

    const divide = () => {
        if (num2 == 0){
            setResult("can not devide by 0")
        }
        else{
            setResult(Number(num1) / Number(num2));
        }
    }
  return (
    <div style = {{padding:"20px" , width:"100px"}}>
        <h2>Calculator</h2>
        <input 
            type = 'number'
            placeholder='Enter first Numner'
            value={num1}
            onChange={(e) => setNum1(e.target.value)}

        />
        <br /><br />

        <input 
        type="number" 
        placeholder='Enter second Number'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
    
        />< br /><br />

        <button onClick={add}>Add</button><br /><br />
        <button onClick={sub}>Substract</button><br /><br />
        <button onClick={mul}>Multiply</button><br /><br />
        <button onClick={divide}>Divide</button><br /><br />

        <h3>Result : {result}</h3>
    </div>
  )
}

export default Calculator