import React,{Component} from 'react'
import LifecycleChild from './LifecycleChild';
 

class Lifecycle extends Component{
    constructor(props){
        super(props)
        console.log('constructor');
        this.state={
            name:'Triveni'
            
        }
    }
    static getDerivedStateFromProps(){
        return null;
        console.log('getDerivedStateFromProps');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render(){
        console.log('parent render')
        return(
            <div>
                <h4>Lifecycle Method</h4>
                <LifecycleChild/>
            </div>
        )
    }
} 
export default Lifecycle