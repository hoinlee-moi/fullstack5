// src/components/My.tsx
import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeCartItem: (id: number) => void;
};

const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeCartItem,
}: Props) => {
  return (
    <>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            {name}({price})
            <button onClick={() => removeCartItem(id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default My;
