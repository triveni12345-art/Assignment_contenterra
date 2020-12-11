import React,{useState,useEffect,useRef} from 'react'
function Q1(){
    const[timer,setTimer]=useState(0)
    const interValRef=useRef()
    useEffect(()=>{
        interValRef.current=setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000)
    return()=>{
        clearInterval(interValRef.current)
    }
    },[])
    return(
        <div>Hooktimer-{timer}
        <button onClick={()=>clearInterval(interValRef.current)}>clear timer</button>
        </div>
    )

}
export default Q1