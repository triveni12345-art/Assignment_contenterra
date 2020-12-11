import React,{Component} from 'react'
import { NavLink ,Route} from 'react-router-dom'
import Employee from './Employee'

class EmployeeDetails extends Component{
    render(){
        return(
            <div>
             <h1>List of Employees</h1>
             <ul>
                 <li><NavLink to='/emp/1'>Triveni</NavLink></li>
                 <li><NavLink to='/emp/2'>Apurva</NavLink></li>

                 <li><NavLink to='/emp/3'>Sneha</NavLink></li>

                 <li><NavLink to='/emp/4'>Tanvi</NavLink></li>

             </ul>
             <Route path='/emp/:id' component={Employee}></Route>
            </div>
        )
    }
}
export default EmployeeDetails