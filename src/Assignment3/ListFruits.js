import React from 'react'

function ListFruits(props) {
    const fruits=["Apple","banana","Orange","Grapes"];
    const updatedList=fruits.map((strList,index)=>{
<li key={index}>{strList}</li>
    });
}
export default ListFruits