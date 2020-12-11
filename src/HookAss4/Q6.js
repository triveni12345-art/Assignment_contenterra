// import React,{useState,useFriendStatus} from 'react'
// const friendList = [
//     { id: 1, name: 'Triv' },
//     { id: 2, name: 'Appu' },
//     { id: 3, name: 'Sneha' },
//   ];
  
//   function Q6() {
//     const [recipientID, setRecipientID] = useState(1);
//     const isRecipientOnline = useFriendStatus(recipientID);
  
//     return (
//       <>
//         <div color={isRecipientOnline ? 'green' : 'red'} />
//         <select value={recipientID} onChange={e => setRecipientID(e.target.value)}>
//           {friendList.map(friend => (
//             <option key={friend.id} value={friend.id}>
//               {friend.name}
//             </option>
//           ))}
//         </select>
//       </>
//     );
//   }
//   export default Q6