import React, { useEffect } from 'react'

 function Promises() {

    const promise=()=>{
        let promise= new Promise(function(resolve,reject){
            let isEmailExist=false;
            if(isEmailExist){
                setTimeout(()=>{
                    resolve('email already exists please check email')
                })
            }
            else {
                reject("email entered not exists.")
            }
        })
        promise.then((res)=>{
            console.log(res);
        }).catch(console.error())

    }

    useEffect(()=>{
        promise()
    },[])

   
  return (
    <div>Promises</div>
  )
}
export default Promises;
