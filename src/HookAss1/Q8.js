import React,{useState,useEffect} from 'react'
function Q8(){
    const Info = [
        {
          title: 'UIDeveloper' ,
          hire_date: '12june2020'  ,
          technologies:  'Angular'
        }]
       const Info2=[ {
            title: 'FullStackDeveloper' ,
            hire_date: '12july2020'  ,
            technologies:  'java'
        }]
    const[title,setTitle]=useState(Info)
    

return(
        <div>
            <button onClick={()=>{setTitle(Info2)}}>click to change</button>
            title-{title[0].title}
        </div>
    )
}
export default Q8