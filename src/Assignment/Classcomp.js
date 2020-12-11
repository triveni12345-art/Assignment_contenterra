import React ,{Component} from 'react'
class Classcomp extends Component{
    render(){
        return(
            <div>
                <h1>hello {this.props.name} as known as{this.props.heroName}</h1>
            </div>
        )
    }
}
export default Classcomp 