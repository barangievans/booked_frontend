import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';  // Ensure this is correct
import Home from './pages/Home';  
import Login from './pages/Login';  
import Register from './pages/Register';  
import AdminDashboard from './pages/AdminDashboard';  
import ManageOrders from './pages/ManageOrders';  
import ManageLendingRequests from './pages/ManageLendingRequests';  
import Shop from './pages/Shop';  
import Cart from './pages/Cart';  
import LendingCart from './pages/LendingCart';  
import PurchaseCart from './pages/PurchaseCart';  
import SearchResults from './pages/SearchResults';  
import UserHistory from './pages/UserHistory';  
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
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes (Require Authentication and Admin role) */}
        <Route path="/admin/dashboard" 
          element={isAuthenticated && isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin/orders" 
          element={isAuthenticated && isAdmin ? <ManageOrders /> : <Navigate to="/login" />} />
        <Route path="/admin/lending" 
          element={isAuthenticated && isAdmin ? <ManageLendingRequests /> : <Navigate to="/login" />} />

        {/* User Routes (Require Authentication) */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/carts/purchase" 
          element={isAuthenticated ? <PurchaseCart /> : <Navigate to="/login" />} />
        <Route path="/carts/lending" 
          element={isAuthenticated ? <LendingCart /> : <Navigate to="/login" />} />
        <Route path="/search" 
          element={isAuthenticated ? <SearchResults /> : <Navigate to="/login" />} />
        <Route path="/history" 
          element={isAuthenticated ? <UserHistory /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
