import TableData from '../atoms/TableData';

const TableItem = () => {
  return (
    <tr className='text-sm sm:text-base text-gray-600 text-center'>
      <TableData
        className={
          'font-primary font-medium px-4 sm:px-6 py-4 flex items-center'
        }
        detail='상품이름'
      />

      <TableData
        className='font-primary font-medium px-4 sm:px-6 py-4'
        detail='가격'
      />
      <TableData
        className='font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell'
        detail='설명'
      />

      <TableData
        className='font-primary font-medium px-4 sm:px-6 py-4'
        detail='삭제'
      />
    </tr>
  );
};

export default TableItem;
