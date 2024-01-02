const AUTOLOGIN = 'autoLogin';
const LOGOUTCART = 'logoutCart';

export const getAutoLoginStorage = (): User | null => {
  const autoLogin = localStorage.getItem(AUTOLOGIN) ?? 'null';
  return JSON.parse(autoLogin);
};
export const setAutoLoginStorage = (user: User | null) =>
  localStorage.setItem(AUTOLOGIN, JSON.stringify(user));

export const getUserStorage = (id: number): Session | undefined => {
  const user = localStorage.getItem('' + id);
  if (user) return JSON.parse(user);
};
export const setUserStorage = (id: number | null, session: Session) =>
  localStorage.setItem('' + id, JSON.stringify(session));

export const getLogoutCartStorage = (): CartItem[] | [] => {
  const cart = localStorage.getItem(LOGOUTCART);
  if (cart) return JSON.parse(cart);
  return [];
};
export const setLogoutCartStorage = (cart: CartItem[]) =>
  localStorage.setItem(LOGOUTCART, JSON.stringify(cart));
