// src/App.tsx
import { useRef, useState } from 'react';
import Hello from './components/Hello';
import My from './components/My';
import './App.css';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

export type CartItem = {
  name: string;
  price: number;
};

export type HandleProp = {
  focusFn: () => void;
};

const SampleSession = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);
  const loginChildRef = useRef<HandleProp>(null);

  const plusCount = () => setCount((prevCount) => prevCount + 1);

  const login = ({ id, name }: LoginUser) => {
    if (!name) {
      loginChildRef.current?.focusFn();
      return alert('input user name, Please');
    }
    setSession({
      ...session,
      loginUser: { id, name },
    });
  };

  const logout = () => setSession({ ...session, loginUser: null });

  const addCartItem = ({ name, price }: CartItem) => {
    if (!name || !price) return alert('input cart item, Please');
    const id = session.cart[session.cart.length - 1].id + 1;
    setSession({
      ...session,
      cart: [...session.cart, { id: id, name, price }],
    });
  };

  const removeCartItem = (itemId: number) => {
    const newCart = session.cart.filter((item) => item.id !== itemId);
    setSession({ ...session, cart: newCart });
  };

  return (
    <>
      <h2>count: {count}</h2>
      <My
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
        addCartItem={addCartItem}
        ref={loginChildRef}
      />
      <Hello name='홍길동' age={30} plusCount={plusCount}>
        <h3>반갑습니다~</h3>
      </Hello>
    </>
  );
}

export default App;
