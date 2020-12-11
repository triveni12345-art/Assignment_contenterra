import { render } from '@testing-library/react';
import React ,{Component} from'react'

class Counter extends Component{
    constructor(){
        super();
        this.state={count:0}
    }

increment(){
    this.setState({count:this.state.count+1})
    console.log(this.state.count);
}
render(){
    return(
        <div>
        <div>
            count-{this.state.count}
        </div>
        <button onClick={()=>this.increment()}>Increment counter value</button>
        </div>
    )
}
}
export default Counter