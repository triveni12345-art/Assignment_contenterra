import React from 'react'
import useCounter from './useCounter'

function CounterOne(){
    const[count,increment,decrement,reset]=useCounter(5,5)
    
    
    return(
        <div>
<h2> count:{count}</h2>
<button onClick={increment}> increment</button>
<button onClick={decrement}>decrement</button>
<button onClick={reset}>reset</button>
        </div>
    )
}
export default CounterOne