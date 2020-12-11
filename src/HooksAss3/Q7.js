// import React,{useReducer, useRef, useState} from 'react'
// const[valueSubmit,setvalueSubmit]=useState('')
// const [state, dispatch] = useReducer(reducer, initialState);


// const initialState = {
//     firstName: '',
//     lastName: ''
//   };
//   function reducer(state, action) {
//     switch (action.type) {
//       case 'firstName':
//         return { firstName: action.payload };
//       case 'lastName':
//         return { lastName: action.payload };
        
//       default:
//         throw new Error();
//     }
//   }
//   const handleSubmit=(e)=>{
    
//   }
//   function Q7() {
//     const inputRef=useRef()

//   return (
//       <>
//       <form onSubmit={handleSubmit}>
//           <input ref={inputRef}/>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           onChange={(event) => {
//             dispatch({
//              type: 'firstName',
//              payload: event.target.value
//             })
//           }}
//           value={state.firstName} />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           onChange={(event) => {
//             dispatch({
//              type: 'lastName',
//              payload: event.target.value
//             })
//           }}
//           value={state.lastName} />
//             <button onClick={() => dispatch('Submit')}>Submit</button>
//      </form>
//      </>
//     );
//         }
//         export default Q7