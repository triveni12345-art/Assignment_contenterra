import React ,{Component} from 'react'
import UpdatedComponent from './Withcounter'
class Hovercounterusinghoc extends Component{
    render(){
        const {count,counterIncrement}=this.props
        return(
            <div>
                <button onMouseOver={counterIncrement}>Clicked {count} time</button>
            </div>
        )
    }
}
export default UpdatedComponent(Hovercounterusinghoc)