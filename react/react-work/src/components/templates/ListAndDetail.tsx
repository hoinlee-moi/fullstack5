import ItemDetail from '../organisms/ItemDetail';
import ItemsTable from '../organisms/ItemsTable';

const ListAndDetail = () => {
  return (
    <div className='w-full h-full flex '>
      <section className='w-2/4 h-full p-5'>
        <ItemsTable />
      </section>
      <section className='w-2/4 p-5'>
        <ItemDetail />
      </section>
    </div>
  );
};

export default ListAndDetail;
