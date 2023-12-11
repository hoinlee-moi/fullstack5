// src/components/My.tsx

import Login from './Login';
import Profile from './Profile';
import { useSession } from '../hooks/session-context';
import SaveCartItemForm from './SaveCartItemFrom';
import { useState } from 'react';

const My = () => {
  const {
    session: { loginUser, cart },
    deleteCartItem,
  } = useSession();
  const [modify, setModify] = useState<Cart | null>(null);

  const successModify = () => setModify(null);

  const onModifyState = (id: number) =>
    setModify(cart.find((item) => item.id === id) || null);

  return (
    <>
      {loginUser ? <Profile /> : <Login />}
      <ul>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            {name}({price})
            <button onClick={() => deleteCartItem(id)}>삭제</button>
            <button onClick={() => onModifyState(id)}>수정</button>
          </li>
        ))}
      </ul>
      <SaveCartItemForm modifyItem={modify} completeModify={successModify} />
    </>
  );
};
export default My;
