import React, { memo } from 'react'

 function useMemoChild({Learning}) {
    console.log("child component");
  return (
    <div>
    </div>
  )
}
export default memo(useMemoChild);
