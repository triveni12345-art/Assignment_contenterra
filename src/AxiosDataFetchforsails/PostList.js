import React,{Component} from 'react'
import axios from 'axios'
class PostList extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:1337/job').then(res =>{
            console.log(res)
            this.setState({data :res.data})
        }).catch(error=>console.log(error))
    
    }
    render(){
        return(
            <div>
                {
                    this.state.data.map(data=><li key={data.id}>email:-{data.title}</li>)
                }
            </div>
        )
    }
}
export default PostList