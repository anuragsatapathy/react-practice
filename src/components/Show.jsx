import React, { useState } from 'react'

const Show = () => {
    const [show,setShow] = useState(false);
    const viewPage = () => {
        setShow(!show);
    }
  return (
    <div>
        {show ? (<p>This is the page to show</p>) : null }
        
        <button onClick={viewPage}>Display</button>
    </div>
  )
}

export default Show