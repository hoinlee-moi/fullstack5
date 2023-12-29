import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex place-content-evenly items-center h-14 [&>a]:font-bold'>
      <Link to={'/'}>HOME</Link>
      <Link to={'/shop'}>SHOP</Link>
      <Link to={'/cart'}>CART</Link>
      <Link to={'/login'}>LOGIN</Link>
      <Link to={'/profile'}>PROFILE</Link>
    </nav>
  );
};

export default Navbar;
