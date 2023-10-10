import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';
import UseMemoChild from './useMemoChild';

 function CallBack() {
    const [add,setAdd]=useState(0);
    const [count ,setCount]=useState(0);

    const Learning = useCallback(()=>{

    },[])
    // const Learning = () =>{ }
  return (
    <div>
    <ChildComponent Learning={Learning}/>
    <h1>{add}</h1>
    <button onClick={()=>setAdd(add+1)}>Add</button>
    {/* <h1>{count}</h1>
    <button onClick={()=>setCount(count+2)}>Count</button> */}
    </div>
  )
}
export default CallBack;
