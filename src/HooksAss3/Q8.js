import React, { useState } from 'react'; 
  
function Q8() { 
  const [click, setClick] = useState(0); 
    
  
  return ( 
    <div> 
        
<p>You've clicked {click} times!</p> 
  
        
<p>The number of times you have clicked 
 is
 
  {click%2==0?'Prime':'not prime'}</p> 
  
      <button onClick={() => setClick(click => click + 1)}> 
        Click me 
      </button> 
    </div> 
  ); 
} 
  
export default Q8; 