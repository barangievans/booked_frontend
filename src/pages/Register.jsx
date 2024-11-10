import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import '../styles/Register.css';  // Corrected path to Register.css

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();  // useNavigate hook for navigation

  // Check password strength
  const checkPasswordStrength = (password) => {
    const regexWeak = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // Weak password check
    const regexMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Medium password check
    const regexStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/; // Strong password check

    if (regexStrong.test(password)) {
      setPasswordStrength('Strong');
    } else if (regexMedium.test(password)) {
      setPasswordStrength('Medium');
    } else if (regexWeak.test(password)) {
      setPasswordStrength('Weak');
    } else {
      setPasswordStrength('');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (name === 'password') {
      checkPasswordStrength(value);  // Check password strength on change
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate registration (API call would go here)
    console.log('User registered:', formData);
    
    // Redirect to the login page after successful registration
    navigate('/login');  // Use navigate to redirect
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
          />
          {passwordStrength && (
            <p className={`password-strength ${passwordStrength.toLowerCase()}`}>
              Password strength: {passwordStrength}
            </p>
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="input-field"
          />
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
