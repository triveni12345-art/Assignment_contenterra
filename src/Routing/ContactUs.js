import React from 'react'
// import History from './History'
import History from './History'
function ContactUs(){
    const onClickHandler=(props)=>{
        // console.log(props.history)
    //  props.history.push('/emp')
    History.push('/About')
    }
    return(
        <div>
         <h1> Contact Us PAge</h1>
         <button onClick={(e)=>onClickHandler(e)}>navigate</button>
        </div>
    )
}
export default ContactUs