import { Link, useLocation } from 'react-router-dom';
import Button from '../atoms/Button';
import TableData from '../atoms/TableData';
import { useSession } from '../../hooks/session-context';

type Props = {
  item: CartItem;
};

const TableItem = ({ item: { id, name, price, description } }: Props) => {
  const { saveOrEditCart, deleteCart } = useSession();
  const { pathname } = useLocation();
  const deleteHandle = () => deleteCart(id);

  const cartAddHandle = () => {
    alert(`${name}을 카트에 추가하였습니다`);
    saveOrEditCart({ id: 0, name, price, description });
  };

  return (
    <tr className='text-sm sm:text-base text-gray-600 text-center'>
      <TableData content={<Link to={`/shop?id=${id}`}>{name}</Link>} />

      <TableData content={'' + price} />
      <TableData
        className='text-base font-light hidden sm:table-cell'
        content={description}
      />
      <TableData
        content={
          <Button
            detail={pathname === '/shop' ? '추가' : '삭제'}
            className='text-red-500 px-0 py-0  hover:text-neutral-700'
            onClick={pathname === '/shop' ? cartAddHandle : deleteHandle}
          />
        }
      />
    </tr>
  );
};

export default TableItem;
