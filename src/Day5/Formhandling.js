import React ,{Component} from 'react'
class Formhandling extends Component{
    constructor(props){
         super(props)
         this.state={
             name:'',
             Password:'',
             Address:'',
             Qualification:'',
             Email:'',
             MobileNo:'',
             nameError:'',
             passwordError:'',
             emailError:'',
             mobilenoError:''
         }
    }
    changeHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    changeHandler=(event)=>{
        this.setState({
            Password:event.target.value
        })
    }

    changeAddress=(event)=>{
        this.setState({
            Address:event.target.value
        })
    }
    changeQulification=(event)=>{
        this.setState({
            Qualification:event.target.value
        })
    }
    changeEmail=(event)=>{
        this.setState({
            Email:event.target.value
        })
    }
    changeMobileNo=(event)=>{
        this.setState({
            MobileNo:event.target.value
        })
    }
    changePassword=(event)=>{
        this.setState({
            Password:event.target.value
        })
    }
    valid(){
        let isvalid=true;
        if(this.state.name == "" && this.state.name.length==0){
           isvalid=false;
            this.setState({nameError:"Name Cannot be Empty"})
        }
         if(!this.state.name.match(/^[A-Za-z]+$/)){
            this.setState({nameError:"Name Cannot Contain Numbers"})
            isvalid=false;
        }
        else{
            this.setState({nameError:""})
        }
    

    if(this.state.Password=="" &&this.state.Password.length==0){
        isvalid=false;
        this.setState({nameError:"Password Cannot be Empty"})

    }
    if(!this.state.Password.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
         this.setState({passwordError:"password should contain atleast one number and one special character "})
         isvalid=false;
    }
    else{
        this.setState({passwordError:""})
    }


if(this.state.Email=="" || this.state.Email.length==0){
    isvalid=false;
    this.setState({emailError:"Email Cannot be Empty"})
}
if(!this.state.emailError.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)){
    this.setState({emailError:"Enter a valid Email Id"})
       isvalid=false;
}
else{
    this.setState({emailError:""})
}



// if(this.state.MobileNo=="" && this.state.MobileNo.length==0){
//     isvalid=false;
//     this.setState({mobilenoError:"Mobile No Cannot be Empty"})
// }
// if(!this.state.MobileNo.match( /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/)){
//     this.setState({mobilenoError:"Enter a valid Email Id"})
//        isvalid=false;
// }
// else{
//     this.setState({mobilenoError:""})
// }

    return isvalid;

}
    submitData=event=>{
        console.log(this.valid);
        if(this.valid()){
        alert(`${this.state.name}  ${this.state.Password} ${this.state.Address} ${this.state.Qualification} ${this.state.Email} ${this.state.MobileNo}`)
    console.log("Form has Been submitted");    
    
    }
    else{
        alert("Error");
    }

        event.preventDefault()
        
    }

    handleData=event=>{
        //console.log(event.target.name);

this.setState({
    [event.target.name]:event.target.value
})

    }
    
    render(){
    return (
        <div>
<h4>Form Handling</h4>

<form onSubmit={this.submitData}>
    <div>
        <label>
            Username
        </label>
        <input type='text'   value={this.state.name}  name='name' onChange={this.handleData} />
    <p>{this.state.nameError?this.state.nameError:null}</p>
    {/* <p>{this.valid()?this.state.nameError:null}</p> */}

    </div>
    <div>
        <label>Password</label>
        <input type ='password' value={this.state.Password} name='Password' onChange={this.handleData}/>
        <p>{this.state.passwordError?this.state.passwordError:null}</p>
    </div>
    <div>
        <label>
            Address
        </label>
        <textarea value={this.state.Address}  name='Address' onChange={this.handleData}></textarea>
    </div>
    <div>
        <label>Qualification</label>
         <select value={this.state.Qualification}  name='Qualification'  onChange={this.handleData}>
<option value='BE'> BE</option>
<option  value='MCA'>MCA</option>
<option value='ME'>ME</option>
<option value='MCS'>MCS</option>

         </select>
    </div>
    <div>
        <label>Email</label>
    <textarea value={this.state.Email} name='Email' onChange={this.handleData}></textarea>
    <p>{this.state.emailError?this.state.emailError:null}</p>
    </div>
    <div>
        <label>Mobile No</label>
        <input type='text' value={this.state.MobileNo} name='MobileNo' onChange={this.handleData}></input>
    </div>
    <div>
        <button type='submit' onClick={this.submitData}>Submit</button>
    </div>
</form>
        </div>
      )  }
    }
export default Formhandling