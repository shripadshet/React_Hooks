import React, { useEffect, useRef, useState } from 'react'

 function FocusComponent() {
  const [name,setName]=useState('');
    const inputRef= useRef(null)
    useEffect(() => {
      inputRef.current.focus();
    }, [])
    
    function reset (){
      setName("");
    }
    function handleChange (){
      inputRef.current.style.color='blue'
    }
   
  return (
    <div>
    <input type='text'ref={inputRef} value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
    <button onClick={reset}>Reset</button>
    <button  onClick={handleChange}>Change Color</button>
        </div>
  )
}
export default FocusComponent;
