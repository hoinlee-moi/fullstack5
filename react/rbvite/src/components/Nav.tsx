import './Nav.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
export const Nav = () => {
  return (
    <nav className={clsx('navbar')}>
      <ul className={clsx('navMenuUl')}>
        <li>
          <NavLink to='/' replace>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/my'>My</NavLink>
        </li>
        <li>
          <NavLink to='/items'>Items</NavLink>
        </li>
        <li>
          <NavLink to='/hello'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
