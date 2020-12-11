import React,{Component} from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
class ParentComp extends Component{
    constructor(props) {
        super(props)
        this.state={name:'Triv'}
    }
    componentDidMount(){
        setInterval(()=>{this.setState({name:'Triv'})},2000)
    }
    render(){
        console.log("Parent compo render")
        return(
            <div>
                parent component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}
export default ParentComp