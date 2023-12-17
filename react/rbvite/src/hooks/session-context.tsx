import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

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

const LOGOUT_CART = 'logoutCart';

enum ActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SAVE_ITEM = 'SAVE',
  UPDATE_ITEM = 'UPDATE',
  DELETE_ITEM = 'DELETE',
}
type ActionPayloadType =
  | Action<ActionType.LOGIN, Session>
  | Action<ActionType.LOGOUT, Session>
  | Action<ActionType.SAVE_ITEM, Cart[]>
  | Action<ActionType.DELETE_ITEM, Cart[]>;

const setStorage = (session: Session) => {
  if (session.loginUser === null) {
    localStorage.setItem(LOGOUT_CART, JSON.stringify(session.cart));
    return;
  }
  localStorage.setItem(session.loginUser.name, JSON.stringify(session));
  return;
};

const getStorage = (login?: LoginUser) => {
  if (!login) {
    const resStr = localStorage.getItem(LOGOUT_CART);
    return resStr ? JSON.parse(resStr) : [];
  }
  const resStr = localStorage.getItem(login.name);
  return resStr ? JSON.parse(resStr) : null;
};

const reducer = (
  session: Session,
  { type, payload }: ActionPayloadType
): Session => {
  switch (type) {
    case ActionType.LOGIN:
    case ActionType.LOGOUT:
      return payload ? payload : session;
    case ActionType.SAVE_ITEM:
    case ActionType.DELETE_ITEM:
      return { ...session, cart: payload ? payload : session.cart };
  }
};

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, {
    loginUser: null,
    cart: getStorage(),
  });

  const login = ({ id, name }: LoginUser) => {
    const localSession: Session = getStorage({ id, name });
    const newSession = localSession ?? { ...session, loginUser: { id, name } };
    localSession ?? setStorage(newSession);
    dispatch({
      type: ActionType.LOGIN,
      payload: newSession,
    });
  };

  const logout = () =>
    dispatch({
      type: ActionType.LOGOUT,
      payload: {
        loginUser: null,
        cart: getStorage(),
      },
    });

  const saveCartItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    if (id) {
      const item = cart.find((item) => item.id === id);
      if (item) {
        item.name = name;
        item.price = price;
      }
    } else {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push({ id, name, price });
    }
    setStorage({ ...session, cart: cart });
    dispatch({ type: ActionType.SAVE_ITEM, payload: cart });
  };

  const deleteCartItem = (id: number) => {
    const filterCart = session.cart.filter((item) => item.id !== id);
    setStorage({ ...session, cart: filterCart });
    dispatch({ type: ActionType.DELETE_ITEM, payload: filterCart });
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
