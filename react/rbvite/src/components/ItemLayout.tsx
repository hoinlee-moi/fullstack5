import { Link, Outlet } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import './ItemLayout.css';
import clsx from 'clsx';
import { ChangeEvent, useRef, useState } from 'react';
import { debounce } from '../util/debounce';
import { initSearch } from '../util/initSearch';
import SaveCartItemForm from './SaveCartItemFrom';

export const ItemLayout = () => {
  const {
    session: { cart },
    deleteCartItem,
  } = useSession();

  const [modify, setModify] = useState<Cart | null>(null);

  const successModify = () => setModify(null);

  const onModifyState = (id: number) =>
    setModify(cart.find((item) => item.id === id) || null);

  const [search, setSearch] = useState<Cart[]>();
  const searchCart = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const searchItem = initSearch(cart, value);
    setSearch(searchItem);
  }, 1000);

  return (
    <>
      <input type='search' className={clsx('search')} onChange={searchCart} />
      <ul>
        {(search ? search : cart).map(({ id, name, price }) => (
          <li key={id}>
            <Link to={`/items/${id}`} state={{ name, price }}>
              {name}({price})
            </Link>
            <button onClick={() => onModifyState(id)}>수정</button>
            <button onClick={() => deleteCartItem(id)}>삭제</button>
          </li>
        ))}
      </ul>
      <SaveCartItemForm modifyItem={modify} completeModify={successModify} />
      <Outlet />
    </>
  );
};
