import React,{useEffect, useState} from 'react'
function HookMousedemo(){
    const [x,setX] =useState(0)
    const [y,setY] =useState(0)

const logMousePosition=e=>{
    console.log("Mouse Event Occured")
    setX(e.clientX)
        setY(e.clientY)
}

    useEffect(()=>{
        console.log("useEffect is called")
        window.addEventListener("mousemove",logMousePosition)
        return ()=>{
            console.log("component is unmounted")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    
    

    return(
        <div>
            the co ordinates are:
            x:{x}  ||  y:{y}
        </div>
    )
}
export default HookMousedemo