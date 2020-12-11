import React ,{Component} from 'react'
class Bindclasscons extends Component{
    constructor(props){
    super(props)
    this.state={msg:'Hello How Are u?'}
    this.clickMe=this.clickMe.bind(this)
}
clickMe(){
    this.setState({msg:'Fine'})
    console.log(this)
}
render(){
    return(
        <div>
            <div>{this.state.msg}</div>
            <button onClick={this.clickMe}>Click </button>
        </div>
    )
}
}
export default Bindclasscons