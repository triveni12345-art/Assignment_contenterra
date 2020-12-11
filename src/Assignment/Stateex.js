import React,{Component } from 'react'
class Stateex extends Component{
    constructor(){
        super();
        this.state={
            msg:'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            msg:'Thanks For Visiting'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Stateex