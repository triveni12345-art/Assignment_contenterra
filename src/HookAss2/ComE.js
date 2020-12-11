import React,{useContext} from 'react'
import {UserContext,CodeContext} from '../App'
import ComF from './ComF'

function ComE(){
    const cyan=useContext(UserContext)
    const code=useContext(CodeContext)
return <div>Color is{cyan} and code is{code}  <ComF/></div>
}
export default ComE