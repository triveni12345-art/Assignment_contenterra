import React ,{Component} from 'react'
class Login extends Component{
    constructor(props){
    super(props)
    this.state={msg:'Please Login'}
    this.clickMe=this.clickMe.bind(this)
}
clickMe(){
    this.setState({msg:'Wlcome User'})
    console.log(this)
}
render(){
    return(
        <div>
            <div>{this.state.msg}</div>
            <button onClick={this.clickMe}>Login </button>
            {/* <button>Logout</button> */}
        </div>
    )
}
}
export default Login