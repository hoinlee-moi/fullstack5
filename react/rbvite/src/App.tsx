import { Route, Routes } from 'react-router-dom';
import { SessionProvider } from './hooks/session-context';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import My from './components/My';
import Hello from './components/Hello';
import Login from './components/Login';
import { Error } from './components/Error';
import { Item } from './components/Item';
import { ItemLayout } from './components/ItemLayout';

function App() {
  return (
    <SessionProvider>
      <Nav />
      <Routes>
        <Route path='/*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my' element={<My />} />
        <Route path='/items' element={<ItemLayout />}>
          {/* <Route index element={<Items />} /> */}
          <Route index element={<Item />} />
        </Route>
        {/* <Route path='/items' element={<Items />} />
        <Route path='/item/:id' element={<Item />} /> */}
        <Route path='/hello' element={<Hello />} />
      </Routes>
    </SessionProvider>
  );
}

export default App;
