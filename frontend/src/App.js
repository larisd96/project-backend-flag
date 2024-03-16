import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopList from "./pages/ShopList";
import ShopListDetail from "./pages/ShopList/ShopListDetail";
import Dashboard from "./pages/Dashboard";
import UserRegistration from "./pages/UserRegistration";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";
import Logout from "./pages/Logout";
import ProtectedRoute from "./routes/ProtectedRoute";
import ShopListCreate from "./pages/ShopList/ShopListCreate";

function App() {
  return (
    <main className="flex flex-col p-3">
      <header>
        <Navbar />
      </header>
      <section className="container-shop-list">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shop-list" element={<ShopList />} />
            <Route path="/shop-list/:id" element={<ShopListDetail />} />
            <Route path="/shop-list/create" element={<ShopListCreate />} />
            <Route path="/shop-list/:id/edit" element={<ShopListCreate />} />
          </Route>
          <Route path="/user-registration" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
