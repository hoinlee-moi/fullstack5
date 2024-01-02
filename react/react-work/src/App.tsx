import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Cart from './components/pages/Cart';
import Navbar from './components/organisms/Navbar';
import Shop from './components/pages/Shop';
import './App.css';
import { SessionContextProvieder } from './hooks/session-context';

function App() {
  return (
    <>
      <Navbar />
      <SessionContextProvieder>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </SessionContextProvieder>
    </>
  );
}

export default App;
