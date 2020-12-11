import React from 'react';
var UpdatedComponent =OriginalComponent=>{



class NewComponent  extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }
    counterIncrement=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
    render(){
        return(
           <OriginalComponent
           count={this.state.count}
           counterIncrement={this.counterIncrement}/>
        )
    }
};
return NewComponent
}
export default UpdatedComponent