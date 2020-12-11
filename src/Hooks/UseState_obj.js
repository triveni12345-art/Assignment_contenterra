import React,{useState} from 'react'
function UseState_obj(){
   const [name,setName] =useState({fn:'' ,ln:''})
    return(
        <div>
            <form>
                <input type="text" value={name.fn} onChange={e=>setName({...name,fn:e.target.value})}/>
                <input type="text" value={name.ln}  onChange={e=>setName({...name,ln:e.target.value})}/>
    <h2>Your First Name {name.fn}</h2>
    <h2>Your Last Name {name.ln}</h2>

            </form>
        </div>
    )
}
export default UseState_obj