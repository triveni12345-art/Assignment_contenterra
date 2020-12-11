import React,{Component} from 'react'
const Destructurefuncbody=(props)=>{
    const {empId,empName,salary}=props
    return(
        <div>
            <h1>
                empId={empId},empname={empName},salary={salary}
            </h1>
        </div>
    )
}
export default Destructurefuncbody