import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Q3(){
    const[post,setPost]=useState([])

    useEffect(()=>{
        axios.get('https://hn.algolia.com/api/v1/search?query=redux').then(res=>{
            console.log(res)
            setPost(res.data.hits)

        }).catch (err=>{

        console.log(err)
        }
        )
    },[])
    return(
        <div>
            <ul>
                {post.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Q3