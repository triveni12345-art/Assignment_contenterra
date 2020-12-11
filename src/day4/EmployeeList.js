import React from 'react'
import Emplyee from './Emplyee'
function EmployeeList(){
    
    //const employee=[
    //     {empid:101,name:"Triveni",Designation:"Manager"},
    //     {empid:102,name:"Apurva",Designation:"Developer"},
    //     {empid:103,name:"Sneha",Designation:"Tester"}
    // ]
    const employee=["Triveni","Apurva","Sonali","Triveni"];
const employeeList=employee.map((emp,index)=><h2 key={index}>{index},{emp}</h2>
    )
    return(
        <div>
{employeeList}
        </div>
    )
    }
export default EmployeeList