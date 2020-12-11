import React,{Component} from 'react'
import InputEx from './InputEx'
class FocusInputEx  extends Component{
    constructor(props){
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    render(){
        return(
            <div>
                <InputEx ref={this.componentRef}></InputEx>
                <button onClick={this.clickHandler}>Focus-Input</button>
            </div>
        )
    }
}
export default FocusInputEx