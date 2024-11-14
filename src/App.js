<<<<<<< HEAD
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Carts from './pages/Carts'; // Import the Carts page
import LendingCart from './pages/LendingCart'; // Import Lending Cart
import PurchaseCart from './pages/PurchaseCart'; // Import Purchase Cart
import BorrowingCart from './pages/BorrowingCart'; // Import Borrowing Cart
import Shop from './components/Shop'; // Import the Shop component
import './styles/App.css';
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'; // Assuming this file exists
import ShopPage from './pages/ShopPage'; // Assuming this file exists
import CartPage from './pages/CartPage'; // Main Cart Page
import LendingCartPage from './pages/LendingCartPage'; // Lending Cart Page
import BorrowingCartPage from './pages/BorrowingCartPage'; // Borrowing Cart Page
import PurchaseCartPage from './pages/PurchaseCartPage'; // Purchase Cart Page
import CheckoutPage from './pages/CheckoutPage'; // Checkout Page
import LoginPage from './pages/LoginPage'; // Login Page
import RegisterPage from './pages/RegisterPage'; // Register Page
>>>>>>> temp-branch

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<Carts />} /> {/* Route for Carts */}
        <Route path="/carts/lending" element={<LendingCart />} /> {/* Route for Lending Cart */}
        <Route path="/carts/purchase" element={<PurchaseCart />} /> {/* Route for Purchase Cart */}
        <Route path="/carts/borrowing" element={<BorrowingCart />} /> {/* Route for Borrowing Cart */}
        <Route path="/shop" element={<Shop />} /> {/* Route for Shop */}
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Main Cart Page */}
        <Route path="/cart/lending" element={<LendingCartPage />} />
        <Route path="/cart/borrowing" element={<BorrowingCartPage />} />
        <Route path="/cart/purchase" element={<PurchaseCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
>>>>>>> temp-branch
      </Routes>
    </Router>
  );
}

export default App;
