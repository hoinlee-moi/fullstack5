import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSession } from '../../hooks/session-context';
import { initSearch } from '../../utils/initSearch';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { DUMMYITMES } from '../../DUMMY/dummyItem';

const AutoSearch = () => {
  const {
    session: { cart },
  } = useSession();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const searchStr = searchParams.get('search');
  const [searchItem, setSearchItem] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = searchStr
      ? initSearch(pathname === '/shop' ? DUMMYITMES : cart, searchStr)
      : [];
    setSearchItem(items);
  }, [searchStr]);
  return (
    <ul
      className={clsx(
        'absolute top-full  bg-slate-200 w-full h-0  overflow-hidden',
        { 'h-auto p-1 pt-2 border-t border-black border-solid': searchStr }
      )}
    >
      {searchItem.length ? (
        searchItem.map((item) => (
          <li key={item.id} className='flex items-center'>
            <CiSearch />
            <Link
              to={`${pathname}?search=${item.name}&id=${item.id}`}
              className='ml-2'
            >
              {item.name}
            </Link>
          </li>
        ))
      ) : (
        <p>not matched itme...</p>
      )}
    </ul>
  );
};

export default AutoSearch;
