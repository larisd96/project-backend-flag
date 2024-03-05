import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopList from './pages/ShopList'; 
import Dashboard from './pages/Dashboard';
import UserRegistration from './pages/UserRegistration';
import Login from './pages/Login';
import Navbar from './components/NavBar';

function App() {
  return (
    <main className='flex flex-col p-3'>
      <header>
        <Navbar />
      </header>
      <section className='container-shop-list'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/shop-list' element={<ShopList />} />
          <Route path='/registration' element={<UserRegistration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
