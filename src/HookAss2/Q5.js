import React,{useState,useEffect} from 'react'
function Q5(){
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)

    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('useEffect -Updating document title')
        document.title=`You Clicked ${count} times`
        document.title=`You Clickes ${count1} times`
    },[count,count1])
    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>
                Click  Me
            </button>
            <button onClick={()=>setCount1(count+1)}>
                Click  Me
            </button>
            click {count} times
            click {count1} times
        </div>
    )

}
export default Q5