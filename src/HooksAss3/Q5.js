import React, { useEffect, useReducer } from 'react'  
import axios from 'axios'  
  
const initialState = {  
    user: {},  
    loading: true,  
    error: '',
  post:{}  
}  
  
const reducer = (state, action) => {  
    switch (action.type) {  
        case 'OnSuccess':  
            return {  
                loading: false,  
                post: action.payload,  
                error: ''  
            }  
        case 'OnFailure':  
            return {  
                loading: false,  
                post: {},  
                error: 'Something went wrong'  
            }  
  
        default:  
            return state  
    }  
}  
  
function Q5() {  
    const [state, dispatch] = useReducer(reducer, initialState)  
  
    useEffect(() => {  
        axios.get('https://jsonplaceholder.typicode.com/comments')  
            .then(response => {  
                console.log(response.data)
                dispatch({ type: 'OnSuccess', payload: response.data})  
            })  
            .catch(error => {  
                dispatch({ type: 'OnFailure' })  
            })  
    }, [])  
  
    return (  
        <div>  
            {state.loading ? 'Loading!! Please wait' : state.post.map((post)=>post.id)}  
            {state.error ? state.error : null}  
        </div>  
    )  
}  
  
export default Q5