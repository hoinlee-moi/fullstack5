import { Outlet, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import './ItemLayout.css';
import clsx from 'clsx';
import { ChangeEvent, useEffect, useState } from 'react';
import { debounce } from '../util/debounce';
import { initSearch } from '../util/initSearch';
import SaveCartItemForm from './SaveCartItemFrom';

export const ItemLayout = () => {
  const {
    session: { cart },
    deleteCartItem,
  } = useSession();
  const [searchParams, setSearchParam] = useSearchParams();
  const searchStr = searchParams.get('search');

  const [items, setItems] = useState<Cart[]>([]);
  const [currItem, setCurrItem] = useState<Cart | null>();

  const searchCart = (serach: string) => setItems(initSearch(cart, serach));

  const searchHandler = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchParam({ search: e.target.value });
    searchCart(e.target.value);
  }, 500);
  const detailItemNav = (item: Cart) => setCurrItem(item);

  useEffect(() => {
    if (searchStr) {
      searchCart(searchStr);
    } else {
      setItems(cart);
      setCurrItem(items[0]);
    }
  }, [cart, items]);

  return (
    <>
      Search :{' '}
      <input
        type='search'
        className={clsx('search')}
        defaultValue={''}
        onChange={searchHandler}
      />
      <div className={clsx('list')}>
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => detailItemNav(item)}
                  className={clsx('item')}
                >
                  {item.name}({item.price})
                </button>
                <button onClick={() => deleteCartItem(item.id)}>삭제</button>
              </li>
            ))}
          </ul>
          <SaveCartItemForm modifyItem={null} />
        </div>
        <Outlet context={{ currItem, deleteCartItem }} />
      </div>
      {/* <SaveCartItemForm modifyItem={modify} completeModify={successModify} /> */}
    </>
  );
};
