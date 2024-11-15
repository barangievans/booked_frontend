import React, { useState } from 'react';
import '../styles/Login.css'; // Import Login.css

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you'd call your API for authentication instead of hardcoding.
    if (email === 'admin@example.com' && password === 'admin123') {
      loginUser(true);
      // Redirect or perform other actions for admin user
    } else if (email === 'user@example.com' && password === 'user123') {
      loginUser(false);
      // Redirect or perform other actions for normal user
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </form>
    </div>
  );
};

export default Login;
