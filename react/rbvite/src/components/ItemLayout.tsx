import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import './ItemLayout.css';
import clsx from 'clsx';
import { ChangeEvent, useEffect, useState } from 'react';
import { debounce } from '../util/debounce';
import { initSearch } from '../util/initSearch';

export const ItemLayout = () => {
  const {
    session: { cart },
    deleteCartItem,
  } = useSession();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParam] = useSearchParams();

  const searchCart = () => initSearch(cart, searchParams.get('search') || '');
  const searchHandler = debounce(
    (e: ChangeEvent<HTMLInputElement>) =>
      setSearchParam({ search: e.target.value }),
    500
  );
  const [currItem, setCurrItem] = useState<Cart | null>();
  const detailItemNav = (item: Cart) => {
    setCurrItem(item);
    navigate(`./detail`);
  };
  useEffect(() => {
    if (pathname === '/items') setCurrItem(null);
  }, [pathname]);
  return (
    <>
      Search :{' '}
      <input
        type='search'
        className={clsx('search')}
        defaultValue={''}
        onChange={searchHandler}
      />
      <ul>
        {searchCart().map((item) => (
          <li key={item.id}>
            <button
              onClick={() => detailItemNav(item)}
              className={clsx('item')}
            >
              {item.name}({item.price})
            </button>
            <button onClick={() => setCurrItem(item)}>수정</button>
            <button onClick={() => deleteCartItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <Outlet context={{ currItem, deleteCartItem }} />
      {/* <SaveCartItemForm modifyItem={modify} completeModify={successModify} /> */}
    </>
  );
};
