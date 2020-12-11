import React ,{Component} from 'react'
class ClasspropArrow extends Component{
    constructor(props){
    super(props)
    this.state={msg:'Hello How Are u?'}
}
clickMe=()=>{
    this.setState({msg:'Fine'})
    console.log(this)
}
render(){
    return(
        <div>
            <div>{this.state.msg}</div>
            <button onClick={()=>this.clickMe()}>Click </button>
        </div>
    )
}
}
export default ClasspropArrow