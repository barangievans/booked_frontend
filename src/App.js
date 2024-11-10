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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<Carts />} /> {/* Route for Carts */}
        <Route path="/carts/lending" element={<LendingCart />} /> {/* Route for Lending Cart */}
        <Route path="/carts/purchase" element={<PurchaseCart />} /> {/* Route for Purchase Cart */}
        <Route path="/carts/borrowing" element={<BorrowingCart />} /> {/* Route for Borrowing Cart */}
        <Route path="/shop" element={<Shop />} /> {/* Route for Shop */}
      </Routes>
    </Router>
  );
}

export default App;
