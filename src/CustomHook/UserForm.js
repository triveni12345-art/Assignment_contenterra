import React,{useState} from 'react'
import useInput from './useInput'

function UserForm(){
    const [fn,bindfn,resetfn] =useInput('')
    const [ln,bindln,resetln] =useInput('')

const submitHandler=e=>{
    e.preventDefault()
    alert(`Hello ${fn} ${ln}`)
    resetfn()
    resetln()
}
   
    return(
        <div>
            <form onSubmit={submitHandler}>
             <div>
                 <label>First Name</label>
                 <input type="text" {...bindfn}/>
             </div>
             <div>
                 <label>Last Name </label>
                 <input type="text" {...bindln}/>
             </div>
             <button>Submit</button>
            </form>
        </div>
    )
}
export default UserForm