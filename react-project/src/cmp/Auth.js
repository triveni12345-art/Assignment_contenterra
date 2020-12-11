import React,{Component} from 'react'

class Auth extends Component{
    login(){
        alert("Login Called")
    }
    render(){
        return(
            <div>
                <div>
                    <input type="text"/><br></br>
                    <input type="text"/><br></br>
                    <button onClick={()=>this.login()}> Login</button>
                </div>
             </div>
        )
    }
}
export default Auth
