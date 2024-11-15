// In App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/admin/Navbar.jsx';
import Home from './pages/Home';  // Ensure this is correctly imported
import Login from './pages/Login';  // Ensure this is correctly imported
import Register from './pages/Register';  // Ensure this is correctly imported
import AdminDashboard from './pages/AdminDashboard';  // Ensure this is correctly imported
import ManageOrders from './pages/ManageOrders';  // Ensure this is correctly imported
import ManageLendingRequests from './pages/ManageLendingRequests';  // Ensure this is correctly imported
import Shop from './pages/Shop';  // Ensure this is correctly imported
import Cart from './pages/Cart';  // Ensure this is correctly imported
import LendingCart from './pages/LendingCart';  // Ensure this is correctly imported
import PurchaseCart from './pages/PurchaseCart';  // Ensure this is correctly imported
import SearchResults from './pages/SearchResults';  // Ensure this is correctly imported
import UserHistory from './pages/UserHistory';  // Ensure this is correctly imported
import './styles/App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const loginUser = (isAdmin) => {
    setIsAuthenticated(true);
    setIsAdmin(isAdmin);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={isAuthenticated && isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin/orders" element={isAuthenticated && isAdmin ? <ManageOrders /> : <Navigate to="/login" />} />
        <Route path="/admin/lending" element={isAuthenticated && isAdmin ? <ManageLendingRequests /> : <Navigate to="/login" />} />
        
        {/* User Routes */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/carts/purchase" element={isAuthenticated ? <PurchaseCart /> : <Navigate to="/login" />} />
        <Route path="/carts/lending" element={isAuthenticated ? <LendingCart /> : <Navigate to="/login" />} />
        <Route path="/search" element={isAuthenticated ? <SearchResults /> : <Navigate to="/login" />} />
        <Route path="/history" element={isAuthenticated ? <UserHistory /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
