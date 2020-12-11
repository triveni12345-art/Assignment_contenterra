import React, { Component } from 'react'
import Axios from 'axios'
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            nameError: '',
            passwordError: '',
            emailError: '',
            userid:"",
            userdata: []
        }
    }
    handler = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }
     onSignUp=()=>{
       this.props.history.push('/SignUp')

    }
    gotoTask=()=>{
        this.props.history.push({pathname:'/Posttask',state:this.state.userid}) 
    }

    valid() {
        let isvalid = true;

        if (this.state.password == "" && this.state.password.length == 0) {
            isvalid = false;
            this.setState({ nameError: "Password Cannot be Empty" })

        }
        if (!this.state.password.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            this.setState({ nameError: "password should contain atleast one number and one special character " })
            isvalid = false;
        }
        else {
            this.setState({ nameError: "" })
        }

        if (this.state.email == "" || this.state.email.length == 0) {
            isvalid = false;
            this.setState({ nameError: "Email Cannot be Empty" })
        }
        if (!this.state.emailError.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
            this.setState({ nameError: "Enter a valid Email Id" })
            isvalid = false;
        }
        else {
            this.setState({ nameError: "" })
        }

    }



    submit = (event) => {

       console.log(this.state.email);
       console.log(this.state.password);
        

        event.preventDefault()
        Axios.post('http://localhost:1337/user/login', {email:this.state.email,password:this.state.password})
        .then(res => {
            const obj=res.data;
            alert("user Logged in successfully ");
            // this.gotoTask(res.data.id)
            console.log(obj.data.id);
            this.setState({userid:obj.data.id});
            this.gotoTask();
        }).catch(err => { console.log("error") })
         

        
    //     // Axios.post('http://localhost:1337/tasks', this.state).then(res => {
    //     //     console.log(res.data);
    //     // }).catch(err => { console.log("error") })
    // }

        


        if (this.valid()) {
            // alert(`${this.state.name}  ${this.state.Password} ${this.state.Email} `)
            console.log("form validate successfully");
           
        }
        else {
            alert(this.state.nameError);
            console.log(this.state.nameError);
        }
        console.log(this.state)
    }

    componentDidMount() {
        // Axios.get('http://localhost:1337/users').then(res => {
            // this.setState({ userdata: res.data })

        // }).catch(error => console.log("error"))

    }
    render() {
        return (
            <form>
                <h3>Sign In</h3>

              
              
                <div className="text">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} placeholder="Enter email" onChange={this.handler} />
                    <p>{this.state.emailError ? this.state.emailError : null}</p>
                </div>

                <div className="text">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} placeholder="Enter password" onChange={this.handler} />
                    <p>{this.state.passwordError ? this.state.passwordError : null}</p>
                </div>

                <button type="submit" onClick={this.submit} className="btn btn-primary btn-block">Login</button>
                <a className="forgot-password text-right" onClick={this.onSignUp}
                    new user plz Register  href="#">Not Registered plz sign up?
                </a>
                {/* <a type='button' onClick={this.onSignUp}>New User? SignUp</a> */}
            </form>
        );
    }
}
export default SignUp