import React,{useState,useEffect} from 'react'
function Q6(){
    const[name,setName]=useState('Sonali')
    const[id,setId] =useState('1')

    useEffect(()=>{
        setInterval(()=>setName('Kalyani'),3000)
        setInterval(()=>setId('2'),3000)
    })
    return(
        <div>
            <h2>name:{name}</h2>
            <h2>id:{id}</h2>

        </div>
    )
}
export default Q6