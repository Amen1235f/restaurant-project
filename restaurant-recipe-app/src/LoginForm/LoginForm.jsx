// src/components/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // Import the CSS file for styling

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/users/login', formData);
        setUser(response.data.user); // Set user information
        localStorage.setItem('token', response.data.token); // Store the token
        alert('Login successful');
    } catch (error) {
        console.error(error);
        alert('Error logging in');
    }
};


return (
  <div className="login-container">
    <h1 className="login-header">Login</h1>
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className="login-input"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
        className="login-input"
      />
      <button type="submit" className="login-button">Login</button>
    </form>
  </div>
);
};


export default LoginForm;
