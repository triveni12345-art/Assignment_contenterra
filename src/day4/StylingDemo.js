import React from 'react'
import '../day4/myStyles.css'
function StylingDemo(props){
    let classtobeapplied=props.default?'default':'';



    return(
        <div><h2  className={`${'classtobeapplied'} fonting`}>Hello Styling Demo</h2></div>
    )
}export default StylingDemo