import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'; // Assuming this file exists
import ShopPage from './pages/ShopPage'; // Assuming this file exists
import CartPage from './pages/CartPage'; // Main Cart Page
import LendingCartPage from './pages/LendingCartPage'; // Lending Cart Page
import BorrowingCartPage from './pages/BorrowingCartPage';  // Ensure this is correct
import PurchaseCartPage from './pages/PurchaseCartPage'; // Purchase Cart Page
import CheckoutPage from './pages/CheckoutPage'; // Checkout Page
import LoginPage from './pages/LoginPage'; // Login Page
import RegisterPage from './pages/RegisterPage'; // Register Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Main Cart Page */}
        <Route path="/cart/lending" element={<LendingCartPage />} />
        <Route path="/cart/borrowing" element={<BorrowingCartPage />} />
        <Route path="/cart/purchase" element={<PurchaseCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
