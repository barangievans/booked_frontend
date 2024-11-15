import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';  // Corrected path
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Library from './pages/Library';  // Ensure this import exists
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
      <div className="main-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library" element={<Library />} />  {/* Ensure this route is present */}

          {/* Admin Routes */}
          <Route path="/admin/dashboard" 
            element={isAuthenticated && isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />

          {/* User Routes */}
          <Route path="/user/dashboard" 
            element={isAuthenticated && !isAdmin ? <UserDashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
