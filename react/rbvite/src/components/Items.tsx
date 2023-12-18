// import { useState } from 'react';
// import { useSession } from '../hooks/session-context';
// import SaveCartItemForm from './SaveCartItemFrom';
// import { Link } from 'react-router-dom';

// export const Items = () => {
//   const {
//     session: { cart },
//     deleteCartItem,
//   } = useSession();
//   const [modify, setModify] = useState<Cart | null>(null);

//   const successModify = () => setModify(null);

//   const onModifyState = (id: number) =>
//     setModify(cart.find((item) => item.id === id) || null);
//   return (
//     <>
//       <ul>
//         {cart.map(({ id, name, price }) => (
//           <li key={id}>
//             <Link to={`/items/${id}`} state={{ name, price }}>
//               {name}({price})
//             </Link>
//             <button onClick={() => deleteCartItem(id)}>삭제</button>
//             <button onClick={() => onModifyState(id)}>수정</button>
//           </li>
//         ))}
//       </ul>
//       <SaveCartItemForm modifyItem={modify} completeModify={successModify} />
//     </>
//   );
// };
