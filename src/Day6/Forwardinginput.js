import React ,{Component} from 'react'
class Forwardinginput  extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focusInput()
    }
    render(){
        return(
            <div>
                <Forwardinginput ref={this.inputRef}></Forwardinginput>
                <button onClick={this.clickHandler}>Focus-Input</button>
            </div>
        )
    }
}
export default Forwardinginput