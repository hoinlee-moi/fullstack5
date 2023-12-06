// src/components/My.tsx
import { FormEvent, useRef } from 'react';
import Login from './Login';
import Profile from './Profile';
import { useSession } from '../hooks/session-context';

const My = () => {
  const {
    session: { loginUser, cart },
    saveCartItem,
    deleteCartItem,
  } = useSession();
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const addCartItemSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;
    if (!name) {
      alert('상품명을 정확히 입력해주세요');
      return itemNameRef.current?.focus();
    }
    if (!price || price === '0') {
      alert('상품 가격을 정확히 입력해주세요');
      return itemPriceRef.current?.focus();
    }
    saveCartItem({ name, price: Number(price) });
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
  };

  return (
    <>
      {loginUser ? <Profile /> : <Login />}
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
            <button onClick={() => deleteCartItem(id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default My;
