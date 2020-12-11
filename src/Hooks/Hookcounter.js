import React,{useEffect, useState} from 'react'
function Hookcounter(){
    const [count,setCount] =useState(0)
   const clock=(prevCount)=>{
// setCount(prevCount=>prevCount+1)
setCount(count+1)
    }
    useEffect(()=>{
        const interval=setInterval(clock,1000)
    return()=>{
        clearInterval(interval )
    }

    },[count])
    return(
        <div>
<h1>{count}</h1>
        </div>
    )
}
export default Hookcounter