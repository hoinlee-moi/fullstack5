import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import TableData from '../atoms/TableData';

type Props = {
  item: CartItem;
};

const TableItem = ({ item: { id, name, price, description } }: Props) => {
  return (
    <tr className='text-sm sm:text-base text-gray-600 text-center' key={id}>
      <Link to={`/shop?id=${id}`}>
        <TableData content={name} />
      </Link>

      <TableData content={'' + price} />
      <TableData
        className='text-base font-light hidden sm:table-cell'
        content={description}
      />

      <Button detail='삭제' className='text-red-500 hover:text-neutral-700' />
    </tr>
  );
};

export default TableItem;
