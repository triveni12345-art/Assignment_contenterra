import React from 'react'
function Employee(props){
    // console.log(match)
    // console.log(loacation)
    // console.log(history)

    return(
        <div>
           <h1>Employee info</h1>
    <h1>id:{props.match.params.id}</h1>
        </div>
    )
}
export default Employee