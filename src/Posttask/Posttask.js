import React, { Component } from 'react'
import axios from 'axios'
import Axios from 'axios'
class Posttask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            title: "",
            descriptio: "",
            status: "pending",
            user: "5fd07744c484191ba4ec599c",
            editFlag: false,
            taskdata: []
        }
    }
    edit = (t) => {
        // console.log(task)
        // this.setState({task.title:this.state.title})
        this.setState({
            id: (t.id),
            title: (t.title),
            descriptio: (t.descriptio),
            status: (t.status),
            editFlag: true
        });
         // Axios.put(`http://localhost:1337/tasks/${this.state.id}`,{}).then(response =>console.log(response.data))
    }
    delete = (id) => {
        Axios.delete(`http://localhost:1337/tasks/${id}`).then(res => console.log(res.data))
    }
    handler = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }
    submit = () => {
        if (this.state.editFlag) {
            Axios.put(`http://localhost:1337/tasks/${this.state.id}`, this.state)
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
        } else {
// var obj={title:this.state.title,descriptio:this.state.descriptio,status:this.state.status,userId:"5fcf814977d60003d8e311e8"}
            console.log(this.state)
            Axios.post('http://localhost:1337/tasks', this.state).then(res => {
                console.log(res.data);
            }).catch(err => { console.log("error") })
        }

    }
    componentDidMount() {
        console.log("logi in user id>>",this.props.state);
        Axios.get('http://localhost:1337/tasks').then(res => {
            console.log(res.data);
            this.setState({ taskdata: res.data })

        }).catch(error => console.log("error"))

    
          
    }
    render() {
        return (
            <div>
                <form>
         Title:<input type='text' name="title" value={this.state.title} onChange={this.handler} />
        Description:<input type='text' name="descriptio" value={this.state.descriptio} onChange={this.handler} />
        Status:<input type='text' name="status" value={this.state.status} onChange={this.handler} />
                    <button onClick={this.submit}>Submit</button>

                </form>
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.taskdata.map(task => (<tr key={task.id}><td>{task.title}
                            <td>{task.status}</td>
                            <td>{task.descriptio}</td>
                        </td>
                            <td><button onClick={() => this.edit(task)}>Edit</button></td>
                            <td><button onClick={() => this.delete(task.id)}>Delete</button></td></tr>))}


                    </tbody>
                </table>
            </div>
        )
    }
}
export default Posttask