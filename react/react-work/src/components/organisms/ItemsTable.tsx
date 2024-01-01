import { DUMMYITMES } from '../../DUMMY/dummyItem';
import TableItem from '../molecules/TableItem';

const ItemsTable = () => {
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
        {DUMMYITMES.map((item) => (
          <TableItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
