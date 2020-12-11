import React, { Component } from 'react'
import Axios from 'axios'
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {

            fname: "",
             lname: "",
             gender: "",
            email: "",
            password: "",
            nameError: '',
            passwordError: '',
            emailError: '',
            userdata: []
        }
    }
    handler = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }
    onLogin=()=>{
        this.props.history.push('/Login')
     }

    valid() {
        let isvalid = true;
        if (this.state.fname == "" && this.state.fname.length == 0) {
            isvalid = false;
            this.setState({ nameError: "Name Cannot be Empty" })
        }
        if (!this.state.fname.match(/^[A-Za-z]+$/)) {
            this.setState({ nameError: "Name Cannot Contain Numbers" })
            isvalid = false;
        }
        else {
            this.setState({ nameError: "" })
        }

        if (this.state.password == "" && this.state.password.length == 0) {
            isvalid = false;
            this.setState({ passwordError: "Password Cannot be Empty" })

        }
        if (!this.state.password.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            this.setState({ passwordError: "password should contain atleast one number and one special character " })
            isvalid = false;
        }
        else {
            this.setState({ passwordError: "" })
        }

        if (this.state.email == "" || this.state.email.length == 0) {
            isvalid = false;
            this.setState({ emailError: "Email Cannot be Empty" })
        }
        if (!this.state.emailError.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
            this.setState({ emailError: "Enter a valid Email Id" })
            isvalid = false;
        }
        else {
            this.setState({ emailError: "" })
        }

    }



    submit = (event) => {
        console.log(this.state.fname);
        console.log(this.state.lname);
        console.log(this.state.gender);
       console.log(this.state.email);
       console.log(this.state.password);
        

        event.preventDefault()
        Axios.post('http://localhost:1337/user/register', {fname:this.state.fname,lname:this.state.lname,gender:this.state.gender,email:this.state.email,password:this.state.password})
        .then(res => {
            console.log("user registered >> ", res.data);
            console.log("Form has Been submitted");
        }).catch(err => { console.log("error") })

        if (this.valid()) {
            // alert(`${this.state.name}  ${this.state.Password} ${this.state.Email} `)
            console.log("form validate successfully");
           
        }
        else {
            alert(this.state.nameError);
            console.log(this.state.nameError);
        }
        
        // console.log(this.state)
    }

    componentDidMount() {
        Axios.get('http://localhost:1337/users').then(res => {
            console.log(res.data);
            this.setState({ userdata: res.data })

        }).catch(error => console.log("error"))

    }
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="text">
                    <label>First name</label>
                    <input type="text" name="fname" value={this.state.fname} className="form-control" placeholder="First name" onChange={this.handler} />
                    <p>{this.state.nameError ? this.state.nameError : null}</p>
                </div>

                <div className="text">
                    <label>Last name</label>
                    <input type="text" name="lname" value={this.state.lname} className="form-control" placeholder="Last name" onChange={this.handler} />
                    <p>{this.state.nameError ? this.state.nameError : null}</p>
                </div>

                <div className="text">
                    <label>gender</label>
                    <input type="text" name="gender" value={this.state.gender} className="form-control" placeholder="gender" onChange={this.handler} />
                </div>

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

                <button type="submit" onClick={this.submit} className="btn btn-primary btn-block">Sign Up</button>
                <a className="forgot-password text-right" onClick={this.onLogin}
                    Already Registered  href="#">Already Register sign in
                </a>
            </form>
        );
    }
}
export default SignUp