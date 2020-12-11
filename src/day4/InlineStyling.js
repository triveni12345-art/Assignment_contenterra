import React from 'react'
import styles from '../day4/styling.module.css'

function InlineStyling(){
// const obj={
//     fontSize:'50px',
//     backgroundColor:'grey' ,
//     color:'red'

//}


    return(
        <div>
             <h1 className='danger'>  Hello Welcome to React inline styling</h1> 
            
             <h1 className={styles.success}>  Hello Welcome to React</h1>

            <h2 style={{
            
            fontSize:'50px',
           backgroundColor:'grey' ,
            color:'red'}}>Inline Styling Demo</h2></div>
    )
}export default InlineStyling