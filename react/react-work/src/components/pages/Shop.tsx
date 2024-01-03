import SearchForm from '../molecules/SearchForm';
import ListAndDetail from '../templates/ListAndDetail';

const Shop = () => {
  return (
    <div className='flex flex-col items-center min-h-[calc(100vh-3.5rem)]'>
      <SearchForm />
      <ListAndDetail />
    </div>
  );
};

export default Shop;
