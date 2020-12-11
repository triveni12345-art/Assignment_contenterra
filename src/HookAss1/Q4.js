import React,{useState} from 'react'
function Q4(){
const [firstName, setFirstName] = useState("");
  const [phNo, setPhoneno] = useState("");;

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handlePhnChange = (e) => setPhoneno(e.target.value);

  return (
    <div>
      <label>Name</label>
      <input value={firstName} onChange={handleFirstNameChange} /><br />
      <label>Phone No</label>
      <input value={phNo} onChange={handlePhnChange} />
      <p>
        Your Name is <span>{firstName} </span><br/>
        Your Phone No is<span>{phNo}</span>
      </p>
    </div>
  )
  
}
export default Q4