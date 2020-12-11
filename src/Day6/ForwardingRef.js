import React from 'react'
const Forwardinginput =React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})
export default Forwardinginput