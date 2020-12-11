import React,{Component} from 'react'
 

class LifecycleChild extends Component{
    constructor(props){
        super(props)
        console.log('constructor child');
        this.state={
            name:'Triveni'
        }
    }
    static getDerivedStateFromProps(){
        return null;
        console.log('getDerivedStateFromProps child');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(){
        return true;
    }
    changeData=()=>{
        this.setState({
            name:'Purva'
        })
    }
    render(){
        console.log("child render")
        return(
            <div>
                <h4>Lifecycle Method</h4>
                <button onClick={this.changeData}> Click me</button>
            </div>
        )
    }
} 
export default LifecycleChild