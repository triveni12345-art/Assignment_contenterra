import React from 'react';
var UpdatedComponent =(OriginalComponent,Increment)=>{



class NewComponent  extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }
    counterIncrement=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+Increment}
        })
    }
    render(){
        
            console.log(this.props.name)
            return(
           <OriginalComponent
           count={this.state.count}
           counterIncrement={this.counterIncrement}
           {...this.props}
           />
        )
    }
};
return NewComponent
}
export default UpdatedComponent