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
  | Action<ActionType.LOGOUT, null>
  | Action<ActionType.SAVE_ITEM, Cart>
  | Action<ActionType.UPDATE_ITEM, Cart>
  | Action<ActionType.DELETE_ITEM, number>;

const reducer = (
  session: Session,
  { type, payload }: ActionPayloadType
): Session => {
  switch (type) {
    case ActionType.LOGIN:
      if (payload && payload.loginUser) {
        const { name } = payload.loginUser;
        const user = localStorage.getItem(name);
        user ?? localStorage.setItem(name, JSON.stringify(payload));
        return { ...payload, cart: user ? JSON.parse(user).cart : [] };
      }
      break;
    case ActionType.LOGOUT:
      return {
        loginUser: null,
        cart: JSON.parse(localStorage.getItem(LOGOUT_CART) ?? '[]'),
      };
    case ActionType.SAVE_ITEM:
      if (payload) {
        const { id, name, price } = payload;
        const newCart = [...session.cart, { id, name, price }];
        session.loginUser
          ? localStorage.setItem(
              session.loginUser.name,
              JSON.stringify({ ...session, cart: newCart })
            )
          : localStorage.setItem(LOGOUT_CART, JSON.stringify(newCart));

        return {
          ...session,
          cart: newCart,
        };
      }
      break;
    case ActionType.UPDATE_ITEM:
      if (payload) {
        const item = session.cart.find((item) => item.id === payload.id);
        if (item) {
          item.name = payload.name;
          item.price = payload.price;
        }
        if (session.loginUser) {
          localStorage.setItem(session.loginUser.name, JSON.stringify(session));
        } else {
          localStorage.setItem(LOGOUT_CART, JSON.stringify(session.cart));
        }
        return session;
      }
      break;
    case ActionType.DELETE_ITEM:
      if (payload) {
        const filterCart = session.cart.filter((item) => item.id !== payload);
        if (session.loginUser) {
          localStorage.setItem(
            session.loginUser.name,
            JSON.stringify({ ...session, cart: filterCart })
          );
        } else {
          localStorage.setItem(LOGOUT_CART, JSON.stringify(filterCart));
        }
        return {
          ...session,
          cart: filterCart,
        };
      }
      break;
  }
  return session;
};

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, {
    loginUser: null,
    cart: JSON.parse(localStorage.getItem(LOGOUT_CART) ?? '[]'),
  });

  const login = ({ id, name }: LoginUser) =>
    dispatch({
      type: ActionType.LOGIN,
      payload: { ...session, loginUser: { id, name } },
    });

  const logout = () =>
    dispatch({
      type: ActionType.LOGOUT,
      payload: null,
    });

  const saveCartItem = ({ id, name, price }: Cart) => {
    if (id) {
      dispatch({ type: ActionType.UPDATE_ITEM, payload: { id, name, price } });
    } else {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      dispatch({ type: ActionType.SAVE_ITEM, payload: { id, name, price } });
    }
  };

  const deleteCartItem = (id: number) => {
    dispatch({ type: ActionType.DELETE_ITEM, payload: id });
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
