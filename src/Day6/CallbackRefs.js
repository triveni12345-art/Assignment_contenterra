import React ,{Component} from 'react'
class CallbackRefs extends Component{
    constructor(props){
        super(props)
        this.cbRef=null
        this.setCbRefs=ele=>{
            this.cbRef=ele
        }
    }
    componentDidMount(){
        if(this.cbRef){this.cbRef.focus()}
    }
    clickHandler=()=>{alert(this.cbRef.value)}
    render(){
        return(
            <div>
                <input ref={this.cbRef}/>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}
export default CallbackRefs