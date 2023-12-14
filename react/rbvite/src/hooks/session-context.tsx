import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
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

type ReducerType = 'LOGIN' | 'LOGOUT' | 'SAVE' | 'UPDATE' | 'DELETE';
type ReducerAction = Action<ReducerType, Session | Cart | number>;
const isCart = (obj: unknown): obj is Cart =>
  typeof obj === 'object' && obj !== null && 'price' in obj;
const isSession = (obj: unknown): obj is Session =>
  typeof obj === 'object' && obj !== null && 'loginUser' in obj;

const reducer = (session: Session, { type, payload }: ReducerAction) => {
  switch (type) {
    case 'LOGIN':
      if (
        typeof payload === 'object' &&
        isSession(payload) &&
        payload.loginUser
      ) {
        localStorage.setItem(payload.loginUser.name, JSON.stringify(payload));
        return { ...payload };
      }
      break;
    case 'LOGOUT':
      if (
        typeof payload === 'object' &&
        isSession(payload) &&
        payload.loginUser
      )
        localStorage.setItem(
          payload.loginUser.name,
          JSON.stringify({ ...session, loginUser: null })
        );
      return { ...session, loginUser: null };
    case 'SAVE':
      if (typeof payload === 'object' && 'price' in payload) {
        const newCart = [
          ...session.cart,
          { id: payload.id, name: payload.name, price: payload.price },
        ];
        localStorage.setItem('cart', JSON.stringify(newCart));
        return {
          ...session,
          cart: newCart,
        };
      }
      break;
    case 'UPDATE':
      if (typeof payload === 'object' && 'price' in payload) {
        const item = session.cart.find((item) => item.id === payload.id);
        if (item) {
          item.name = payload.name;
          item.price = payload.price;
        }
        localStorage.setItem('cart', JSON.stringify(session.cart));
      }
      break;
    case 'DELETE':
      if (typeof payload === 'number') {
        const filterCart = session.cart.filter((item) => item.id !== payload);
        localStorage.setItem('user', JSON.stringify(filterCart));
        return {
          ...session,
          cart: filterCart,
        };
      }
      break;
    default:
      return session;
  }
  return session;
};

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, {
    loginUser: null,
    cart: [],
  });

  const initData = () => {
    localStorage.getItem('user');
  };
  const data = useFetch<Session>('/data/sample-logined.json');

  useEffect(() => {
    if (data) dispatch({ type: 'LOGIN', payload: data });
  }, [data]);

  const login = ({ id, name }: LoginUser) =>
    dispatch({
      type: 'LOGIN',
      payload: { ...session, loginUser: { id, name } },
    });

  const logout = () =>
    dispatch({ type: 'LOGOUT', payload: { ...session, loginUser: null } });

  const saveCartItem = ({ id, name, price }: Cart) => {
    if (id) {
      dispatch({ type: 'UPDATE', payload: { id, name, price } });
    } else {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      dispatch({ type: 'SAVE', payload: { id, name, price } });
    }
  };

  const deleteCartItem = (id: number) => {
    dispatch({ type: 'DELETE', payload: id });
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
