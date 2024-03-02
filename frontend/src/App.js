// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopList from './pages/ShopList'; // Importando corretamente o componente ShopList
import Dashboard from './pages/Dashboard';
import Navbar from './components/NavBar';

function App() {
  return (
    <main className='container-app'>
      <header>
        <Navbar />
      </header>
      <section className='container-shop-list'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/shop-list' element={<ShopList />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
