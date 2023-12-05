// src/components/My.tsx
import { forwardRef, FormEvent, useRef } from 'react';
import { CartItem, LoginUser, Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  removeCartItem: (id: number) => void;
  addCartItem: ({ name, price }: CartItem) => void;
};

const My = forwardRef(
  (
    {
      session: { loginUser, cart },
      login,
      logout,
      removeCartItem,
      addCartItem,
    }: Props,
    ref
  ) => {
    const itemNameRef = useRef<HTMLInputElement>(null);
    const itemPriceRef = useRef<HTMLInputElement>(null);
    const addCartItemSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const name = itemNameRef.current?.value || '';
      const price = itemPriceRef.current?.value || '';
      addCartItem({ name, price: Number(price) });
    };

    return (
      <>
        {loginUser ? (
          <Profile loginUser={loginUser} logout={logout} />
        ) : (
          <Login login={login} ref={ref} />
        )}
        <form onSubmit={addCartItemSubmit}>
          <div>
            추가할 상품 이름 : <input type='text' ref={itemNameRef} />
          </div>
          <div>
            추가할 상품 가격 : <input type='number' ref={itemPriceRef} />
          </div>
          <button type='submit'>추가</button>
        </form>
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
  }
);
export default My;
