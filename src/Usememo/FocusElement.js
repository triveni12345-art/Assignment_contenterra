import React ,{useEffect,useRef}from 'react'
function FocusElement(){
    const inputRef=useRef(null)
    useEffect(()=>{
inputRef.current.focus()
    },[])
    return(
        <div>
            <input type="text" ref={inputRef}/>

        </div>
    )
}
export default FocusElement