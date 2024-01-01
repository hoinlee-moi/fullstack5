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
        <tr className='text-sm sm:text-base text-gray-600 text-center'>
          <td className='font-primary font-medium px-4 sm:px-6 py-4 flex items-center'>
            상품이름
          </td>
          <td className='font-primary font-medium px-4 sm:px-6 py-4'>가격</td>
          <td className='font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell'>
            설명
          </td>
          <td className='font-primary font-medium px-4 sm:px-6 py-4'>삭제</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ItemsTable;
