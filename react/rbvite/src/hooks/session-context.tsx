import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useFetch } from './fetch-hook';

type SessionContextProps = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  saveCartItem: ({ id, name, price }: Cart) => void;
  deleteCartItem: (id: number) => void;
};

const SessionContext = createContext<SessionContextProps>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  saveCartItem: () => {},
  deleteCartItem: () => {},
});

const reducer = (
  session: Session,
  { type, payload }: Action<LoginUser | Cart>
) => {
  switch (type) {
    case 'LOGIN':
      if (payload && !('price' in payload))
        return {
          ...session,
          loginUser: { id: payload?.id, name: payload?.name },
        };
      break;
    case 'LOGOUT':
      return { ...session, loginUser: null };
    case 'SAVE':
      if (payload && 'price' in payload) {
        session.cart.push({
          id: payload.id,
          name: payload.name,
          price: payload.price,
        });
        return session;
      }
      break;
    case 'UPDATE':
      if (payload && 'price' in payload) {
        const item = session.cart.find((item) => item.id === payload.id);
        if (item) {
          item.name = payload.name;
          item.price = payload.price;
        }
      }
      break;
    case 'DELETE':
      if (payload) {
        return {
          ...session,
          cart: session.cart.filter((item) => item.id !== payload.id),
        };
      }
      break;
    default:
      return session;
  }
  return session;
};

const SessionProvider = ({ children }: PropsWithChildren) => {
  const defalutSession: Session = {
    loginUser: null,
    cart: [
      { id: 100, name: '라면1', price: 3000 },
      { id: 101, name: '컵라면2', price: 2000 },
      { id: 102, name: '파3', price: 5000 },
    ],
  };
  const [session2, dispatch] = useReducer(reducer, defalutSession);
  // const [counter, dispatch] = useReducer(reducer, 0);
  const [session, setSession] = useState<Session>({
    loginUser: null,
    cart: [],
  });
  const data = useFetch<Session>('/data/sample-logined.json');

  useEffect(() => {
    // if (data) setSession(data);
  }, [data]);

  const login = ({ id, name }: LoginUser) =>
    setSession({ ...session, loginUser: { id, name } });
  // dispatch<LoginUser>({ type: 'LOGIN', payload: { id, name } });

  // const logout = () => setSession({ ...session, loginUser: null });

  const saveCartItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    id = id || Math.max(...session.cart.map((item) => item.id), 0) + 1;
    const item = id ? session.cart.find((item) => item.id === id) : null;
    if (item) {
      item.name = name;
      item.price = price;
    } else {
      cart.push({ id, name, price });
    }
    setSession({ ...session, cart: cart });
  };

  const deleteCartItem = (id: number) => {
    const newCartList = session.cart.filter((item) => item.id !== id);
    setSession({ ...session, cart: newCartList });
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        saveCartItem,
        deleteCartItem,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
const useSession = () => useContext(SessionContext);
// eslint-disable-next-line react-refresh/only-export-components
export { SessionProvider, useSession };
