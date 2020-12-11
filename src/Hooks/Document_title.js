import React,{useEffect, useState} from 'react'
function Document_title(){
    const [count,setCount] =useState(0)
    const [name,setName]=useState('')
    console.log("UseEffect Updating A Document")
    useEffect(()=>document.title = `You Clicked ${count} times`,[])

    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
<button onClick={()=>setCount(count+1)}> clicked {count} times</button>
        </div>
    )
}
export default Document_title 