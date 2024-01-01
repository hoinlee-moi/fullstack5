import ItemTable from '../organisms/ItemsTable';

const Shop = () => {
  return (
    <div className='w-full h-full flex items-center '>
      <section className='w-2/4 h-full p-5'>
        <ItemTable />
      </section>
      <section className='w-2/4 p-5'>상품 설명</section>
    </div>
  );
};

export default Shop;