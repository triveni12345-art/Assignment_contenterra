import React,{useState,useMemo} from 'react'
function Counter(){
    const [counterOne,setCounterOne] =useState(0)
    const [counterTwo,setCounterTwo]=useState(0)

    const isEvenOdd=useMemo(()=>{
        let i=0;
        while(i<1000000000000)i++
        return counterOne%2==0
    },[counterOne])

    const incrementOne=()=>{
        setCounterOne (counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    return(
        <div>
<button onClick={incrementOne}>counterOne-{counterOne}</button>
    <span>{isEvenOdd() ? 'Even' : 'Odd'}</span>

<button onClick={incrementTwo}>counterTwo-{counterTwo}</button>

        </div>
    )
}
export default Counter