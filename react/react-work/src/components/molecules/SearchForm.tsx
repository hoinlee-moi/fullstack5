import { FormEvent, useEffect, useRef } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import AutoSearch from './AutoSearch';
// import { useSession } from '../../hooks/session-context';

const SearchForm = () => {
  // const {
  //   session: { cart },
  // } = useSession();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchPrams, setSearchPrams] = useSearchParams();
  const searchStr = searchPrams.get('search');

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const autoSearch = () => {
    setSearchPrams(`search=${searchInputRef.current?.value}`);
  };
  useEffect(() => {
    if (searchStr && searchInputRef.current)
      searchInputRef.current.value = searchStr;
  }, [searchStr]);
  return (
    <form onSubmit={search} className='flex items-center relative'>
      <div className='w-120'>
        <Input
          type='search'
          classNames='p-1 text-base w-full rounded-none'
          placeholder='SEARCH PRODUCT...'
          ref={searchInputRef}
          onChange={autoSearch}
        />

        <AutoSearch />
      </div>
      <Button
        type='submit'
        detail={<FaSearch />}
        className='absolute top-0 left-full text-xl font-bold bg-transparent hover:text-black hover:bg-transparent'
      />
    </form>
  );
};

export default SearchForm;
