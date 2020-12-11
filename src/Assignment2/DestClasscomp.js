import React,{Component} from 'react'
class DestClasscomp extends Component{
    render(){
        const{companyName,Address}=this.props
        return(
            <div>
                <h1>
                    companyName={companyName},Address={Address}
                </h1>
            </div>
        )
    }
}
export default DestClasscomp