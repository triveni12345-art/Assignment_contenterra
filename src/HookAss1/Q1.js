import React,{useState,useEffect} from 'react'
function Q1(){
    const[name,setName]=useState('Triveni')

    useEffect(()=>{
        setInterval(()=>setName('Sneha'),3000)
    })
    return(
        <div>
            <h2>name={name}</h2>
        </div>
    )
}
export default Q1