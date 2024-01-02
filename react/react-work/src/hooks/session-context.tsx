/* eslint-disable react-refresh/only-export-components */
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  getAutoLoginStorage,
  getLogoutCartStorage,
  getUserStorage,
  setAutoLoginStorage,
  setLogoutCartStorage,
  setUserStorage,
} from '../storage/storageFn';

type SessionContext = {
  session: Session;
  login: ({ id, name, auto }: AutoLoginFn) => void;
  logout: VoidFn;
  saveOrEditCart: ({ id, name, price, description }: CartItem) => void;
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
  | { type: ACTION_TYPE.LOGIN; payload: Session }
  | { type: ACTION_TYPE.LOGOUT; payload: Session }
  | { type: ACTION_TYPE.SAVE_EDIT_CART; payload: CartItem[] }
  | { type: ACTION_TYPE.DELETE_CART; payload: CartItem[] };

const reducer = (session: Session, { type, payload }: Action) => {
  let newSession: Session;
  switch (type) {
    case 'SET_SESSION':
    case 'LOGIN':
    case 'LOGOUT':
      newSession = payload;
      break;
    case 'SAVE_EDIT':
    case 'DELETE_CART':
      newSession = { ...session, cart: payload };
      break;
    default:
      newSession = session;
  }
  if (session.user) setUserStorage(session.user.id, session);
  else setLogoutCartStorage(session.cart);
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
        payload: autoLoginUser,
      });
  }, []);

  const login = ({ id, name, auto }: AutoLoginFn) => {
    const loginUser = getUserStorage(id) ?? {
      user: { id, name },
      cart: [],
    };
    dispatch({ type: ACTION_TYPE.LOGIN, payload: loginUser });

    if (auto) setAutoLoginStorage(loginUser);
  };

  const logout = () => {
    const logoutCart = getLogoutCartStorage();
    setAutoLoginStorage(null);
    dispatch({
      type: ACTION_TYPE.LOGOUT,
      payload: { user: null, cart: logoutCart },
    });
  };

  const saveOrEditCart = ({ id = 0, name, price, description }: CartItem) => {
    const { cart } = session;
    if (id) {
      const editItem = cart.find((item) => item.id === id);
      if (editItem) {
        editItem.name = name;
        editItem.price = price;
        editItem.description = description;
      }
    } else {
      const newItem = {
        id: Math.max(+cart.map((item) => item.id).join('')) + 1,
        name,
        price,
        description,
      };
      session.cart.push(newItem);
    }
    dispatch({ type: ACTION_TYPE.SAVE_EDIT_CART, payload: cart });
  };
  const deleteCart = (id: number) => {
    const newCart = session.cart.filter((item) => item.id !== id);
    dispatch({ type: ACTION_TYPE.DELETE_CART, payload: newCart });
  };
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
