import React,{Component} from 'react'
function FuncClick(){
    function clickMe(){
        console.log("Button Click");
        alert("Welcome To TQPP")
    }
    return(
        <div>
            <button onClick={clickMe}>ClickMe</button>
        </div>
    )
}
export default FuncClick