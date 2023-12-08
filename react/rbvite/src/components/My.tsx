// src/components/My.tsx

import Login from './Login';
import Profile from './Profile';
import { useSession } from '../hooks/session-context';
import SaveCartItemForm from './SaveCartItemFrom';
import { useState } from 'react';
import ModifyCartItemForm from './ModifyCartItemForm';

const My = () => {
  const {
    session: { loginUser, cart },
    deleteCartItem,
  } = useSession();
  const [modify, setModify] = useState<modifyState>({
    state: false,
    id: 0,
  });
  const successModify = () => setModify({ state: false, id: 0 });

  const onModifyState = (id: number) => setModify({ state: true, id });

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
      {modify.state ? (
        <ModifyCartItemForm id={modify.id} successModify={successModify} />
      ) : (
        <SaveCartItemForm />
      )}
    </>
  );
};
export default My;
