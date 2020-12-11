import React,{Component,DropDownContainer,DropDownHeader,ListItem,DropDownListContainer,DropDownList} from 'react'
class Crudex extends Component{
    
    constructor(props){
        super(props)
        this.state={
            title:'React simple CRUD ',
            act:0,
            index:'',
            datas:[]
        }
    }
    componentDidMount(){
        this.refs.name.focus();
    }

    
        
fSubmit =(e)=>{
    e.preventDefault();

    let datas=this.state.datas;
        let name=this.refs.name.value;
        let address=this.refs.address.value;

        if(this.state.act===0){
            let data={
                name,address
            }
            datas.push(data);
        }
        else{
            let index=this.state.index;
            datas[index].name=name;
            datas[index].address=address;
        }
this.setState({
    datas:datas,
    act:0
});
this.refs.myForm.reset();
this.refs.name.focus();

}
fRemove=(i)=>{
    let datas=this.state.datas;
    datas.splice(i,1);
    this.setState({
        datas:datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
}
fEdit=(i)=>{
    let data =this.state.datas[i];
    this.refs.name.value=data.name;
    this.refs.address.value=data.address;

    this.setState({
        act:1,
        index:i
    });
    this.refs.name.focus();
}


render(){
    let datas=this.state.datas;
    return(
        <div className="App">
         <h2>{this.state.title}</h2>
           <form ref="myForm" className="myForm">
               <label>Name</label>
               <input type="text" ref="name" name="your name" className="formField" />
               <label>Address</label>
               <input type="text" ref="address" placeholder="your address" className="formField" />
               <label>Email</label>
               <input type="text" ref="Email" placeholder="Your Email" className="formField"/>

               <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>



               <button className="btn btn-primary" onClick={(e)=>this.fSubmit(e)}>submit</button> 
                </form>
           <pre>
               {datas.map((data,i)=>
               <li key={i} className="myList">
                   {data.name} {data.address}
                   <button onClick={()=>this.fRemove(i)} className="myListButton btn btn-danger">Delete</button>
                   <button onClick={()=>this.fEdit(i)} className="myListButton btn btn-success">Edit</button>

               </li>
               )}
           </pre>
        </div>
    )
}
    }

export default Crudex