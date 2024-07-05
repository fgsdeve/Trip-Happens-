import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      // Handle successful login (redirect, show success message, etc.)
    } catch (err) {
      console.error(err);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      placeholder="Email" required 
      />
      <input type="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      placeholder="Password" required 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
