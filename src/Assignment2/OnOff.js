import React,{Component} from 'react'
class OnOff extends Component{
    constructor(props){
        super(props)
        this.state={
            state:'On'
        }
    }
    changestate=()=>{
        this.setState({
            state:"Off"
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.changestate}>{this.state}</button>
            </div>
        )
    }
}
export default OnOff