import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Cart from './components/pages/Cart';
import Navbar from './components/organisms/Navbar';
import Shop from './components/pages/Shoping';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
