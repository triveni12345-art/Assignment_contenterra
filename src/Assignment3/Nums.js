
import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
const Nums = [1,2,3,4,5]; 
  
const updatedNums = Nums.map((number)=>{ 
    return <li>{number}</li>; 
}); 
  
ReactDOM.render( 
    <ul> 
        {updatedNums} 
    </ul>,  
    document.getElementById('root') 
)
export default Nums