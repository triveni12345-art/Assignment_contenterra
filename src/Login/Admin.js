import React,{Component} from 'react';
import Axios from 'axios';
class Admin extends Component {
    constructor(props) {
      super(props);
      this.state = { disabled: false,
        user: "5fd07744c484191ba4ec599c"
     }
    }
    handleClik() {
      this.setState( {disabled: !this.state.disabled} )
    } 
    submit = () => {
        // if (this.state.Active) {
        //     Axios.put(`http://localhost:1337/user`, this.state)
        //         .then(res => {
        //             console.log(res);
        //         }).catch(err => {
        //             console.log(err);
        //         })
        // } else {
        //     console.log(this.state)
        //     Axios.post(`http://localhost:1337/users/${users.id}`, this.state).then(res => {
        //         console.log(res.data);
        //     }).catch(err => { console.log("error") })
        // }

    }

    render() {
      return(
          <div>
            <input
                  className = "typing-container"
                  placeholder= " type here "
                  disabled = {(this.state.disabled)? "disabled" : ""}/>
            <button  onClick = {this.handleClik.bind(this)}> Deactivate   </button>
            <button> Fetch Data </button>
          </div>
      );
    }
  }
  export default Admin