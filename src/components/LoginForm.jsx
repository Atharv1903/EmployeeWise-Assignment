import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== 'eve.holt@reqres.in' || password !== 'cityslicka') {
      setError('Only the test credentials are allowed.');
      return;
    }

    try {
      const res = await axios.post('https://reqres.in/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('token_expiry', new Date().getTime() + 60 * 60 * 1000); // 1 hour expiry
      toast.success('Login successful!');
      navigate('/users');
    } catch (err) {
      setError('Invalid credentials. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;