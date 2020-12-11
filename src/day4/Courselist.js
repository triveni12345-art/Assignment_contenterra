import React from 'react'
function Courselist(){
    const courses=["Java","Angular","React"];
    const courseList=courses.map((course)=>{
        return <h2>{course}</h2>
        });
    return(
        <div>
{/* <h1>{courses[0]}</h1>
<h1>{courses[1]}</h1>
<h1>{courses[2]}</h1> */}

{courseList}
        </div>
    )
}
export default Courselist