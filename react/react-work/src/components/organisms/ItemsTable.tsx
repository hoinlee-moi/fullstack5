import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DUMMYITMES } from '../../DUMMY/dummyItem';
import { useSession } from '../../hooks/session-context';
import TableItem from './../molecules/TableItem';

const ItemsTable = () => {
  const {
    session: { cart },
  } = useSession();
  const [list, setList] = useState<CartItem[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/cart') {
      setList(cart);
    } else {
      //SOHP리스트로 바꿀예정
      setList(DUMMYITMES);
    }
  }, [pathname, cart]);
  return (
    <table className='mx-auto'>
      <thead>
        <tr className='uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light'>
          <th className='font-primary font-normal px-6 py-4'>Product</th>
          <th className='font-primary font-normal px-6 py-4'>price</th>
          <th className='font-primary font-normal px-6 py-4 hidden sm:table-cell'>
            description
          </th>
          <th className='font-primary font-normal px-6 py-4'>Remove</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-palette-lighter'>
        {list.map((item) => (
          <TableItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
