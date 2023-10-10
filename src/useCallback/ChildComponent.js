import React, { memo } from 'react'

 function ChildComponent({Learning}) {
    console.log("child component");
  return (
    <div>
    </div>
  )
}
export default memo(ChildComponent);
