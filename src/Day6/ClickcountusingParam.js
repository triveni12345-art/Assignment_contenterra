import React from 'react'
import UpdatedComponent from './Withcountwithparameter'
class ClickcounterusingParam extends React.Component{
    render(){
        const {count,counterIncrement}=this.props
        return(
            <div>
                <h1>{this.props.name}</h1>
        <button onClick={counterIncrement}>{this.props.name} Clicked {count} time</button>
            </div>
        )
    }
}
export default UpdatedComponent(ClickcounterusingParam,5)