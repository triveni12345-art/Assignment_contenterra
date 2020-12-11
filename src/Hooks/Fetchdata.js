import React,{useEffect, useState} from 'react'
import axios from 'axios'
function Fetchdata(){
    const [post,setPost] =useState({})
    const [id,setid]=useState(1)
    const[idfromButtonClick,setidfromButtonClick]=useState(1)
    const handleClick=()=>{
        setidfromButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`).then(response=>{
            console.log(response)
            setPost(response.data)
        }).catch(error=>{
            console.log(error)
        })
    },[idfromButtonClick])
    return(
        <div>
            <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
            <button type="button" onClick="handleClick">Fetchdata</button>
    <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post=>{
                        <li key={post.id}>
                            {post.title}
                        </li>
                    })
                }
            </ul> */}
        </div>
    )
}
export default Fetchdata