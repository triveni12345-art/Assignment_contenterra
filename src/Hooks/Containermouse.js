import React,{useState} from 'react'
import HookMousedemo from './HookMousedemo'
function Containermouse(){
    const [display,setDisplay] =useState(true)
    return(
        <div>
<button onClick={()=>setDisplay(!display )}>click</button>
{display && <HookMousedemo/>}
        </div>
    )
}
export default Containermouse