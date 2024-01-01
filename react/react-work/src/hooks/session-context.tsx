import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { getAutoLoginStorage } from '../storage/storageFn';

type SessionContext = {
  session: Session;
  login: ({ id, name }: { id: number; name: string }) => void;
  logout: VoidFn;
  saveOrEditCart: ({}: CartItem) => void;
  deleteCart: NumberVoidFn;
};

const SessionContext = createContext<SessionContext>({
  session: { user: { id: 0, name: '' }, cart: [] },
  login: () => {},
  logout: () => {},
  saveOrEditCart: () => {},
  deleteCart: () => {},
});
enum ACTION_TYPE {
  SET_SESSION = 'SET_SESSION',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SAVE_EDIT_CART = 'SAVE_EDIT',
  DELETE_CART = 'DELETE_CART',
}

type Action =
  | { type: ACTION_TYPE.SET_SESSION; payload: Session }
  | { type: ACTION_TYPE.LOGIN; payload: User }
  | { type: ACTION_TYPE.LOGOUT; payload: null }
  | { type: ACTION_TYPE.SAVE_EDIT_CART; payload: CartItem[] }
  | { type: ACTION_TYPE.DELETE_CART; payload: CartItem[] };

const reducer = (session: Session, { type, payload }: Action) => {
  let newSession: Session;
  switch (type) {
    case 'SET_SESSION':
      newSession = payload;
      break;
    case 'LOGIN':
    case 'LOGOUT':
      newSession = { ...session, user: payload };
      break;
    case 'SAVE_EDIT':
    case 'DELETE_CART':
      newSession = { ...session, cart: payload };
      break;
    default:
      newSession = session;
  }

  return newSession;
};

const SessionContextProvieder = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, {
    user: { id: 0, name: '' },
    cart: [],
  });

  useEffect(() => {
    const autoLoginUser = getAutoLoginStorage();
    if (autoLoginUser)
      dispatch({
        type: ACTION_TYPE.SET_SESSION,
        payload: JSON.parse(autoLoginUser),
      });
  }, []);

  const login = ({ id, name }: { id: number; name: string }) => {};
  const logout = () => {};

  const saveOrEditCart = ({ id, name, price, description }: CartItem) => {};
  const deleteCart = (id: number) => {};
  return (
    <SessionContext.Provider
      value={{ session, login, logout, saveOrEditCart, deleteCart }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionContextProvieder, useSession };
