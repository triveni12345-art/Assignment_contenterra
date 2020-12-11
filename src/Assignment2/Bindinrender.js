import React,{Component} from 'react'
class Bindinrender extends Component{
    constructor(props){
        super(props);
        this.state={msg:'Hello How Are u?'}
    }
    clickMe(){this.setState({msg:"I am Fine"})
    console.log(this)
}
render(){
    return(
        <div>
            <div>{this.state.msg}</div>
            <button onClick={this.clickMe.bind(this)}>Click</button>
        </div>
    )
}
}
export default Bindinrender