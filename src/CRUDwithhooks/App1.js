// import React, {useState} from 'react'
// import Usertable from './CRUDwithhooks/Usertable';

// const App1 = () => {
    
//     <AddUserForm addUser={addUser} />
//     const deleteUser = id => setUsers(users.filter(user => user.id !== id));

// <Usertable users={users} deleteUser={deleteUser} />
//     const addUser = user => {
//         user.id = users.length + 1;
//         setUsers([...users, user]);
//       }
//   const [users, setUsers] = useState(userList);

//   return (
//     <div className="container">
//       <h1>React CRUD App with Hooks</h1>
//       <div className="row">
//         <div className="six columns">
//           <h2>Add user</h2>
//         </div>
//         <div className="six columns">
//           <h2>View users</h2>
//           <Usertable users={users} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App1