import React from 'react'
import UpdatedComponent from './Withcounter'
class Clickcounterusinghoc extends React.Component{
    render(){
        const {count,counterIncrement}=this.props
        return(
            <div>
                <button onClick={counterIncrement}>Clicked {count} time</button>
            </div>
        )
    }
}
export default UpdatedComponent(Clickcounterusinghoc)