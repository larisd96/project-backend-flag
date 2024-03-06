import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopList from './pages/ShopList'; 
import Dashboard from './pages/Dashboard';
import UserRegistration from './pages/UserRegistration';
import Login from './pages/Login';
import Navbar from './components/NavBar';
import Logout from './pages/Logout';
import ShopListItems from './pages/ShopList/ShopListItems';

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('shoppingLists')) || [];
    const initializedLists = storedLists.map(list => ({ ...list, checked: false }));
    setLists(initializedLists);
  }, []);

  return (
    <main className='flex flex-col p-3'>
      <header>
        <Navbar />
      </header>
      <section className='container-shop-list'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/shop-list' element={<ShopList />} />
          <Route path='/user-registration' element={<UserRegistration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          {lists.length > 0 && (
            <Route path='/shop-list-items/:listName' element={<ShopListItems lists={lists} />} />
          )}
        </Routes>
      </section>
    </main>
  );
}

export default App;
