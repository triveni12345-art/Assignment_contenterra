import React,{Component} from 'react'
class ClassClick extends Component{
clickMe(){
        console.log("Button Click");
        alert("Hello React")
    }
    render(){

    
    return(
        <div>
            <button onClick={this.clickMe}>ClickMe</button>
        </div>
    )
    }
}
export default ClassClick