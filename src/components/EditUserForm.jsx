import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditUserForm({ updateCachedUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ first_name: '', last_name: '', email: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setUserData({
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
          email: res.data.data.email
        });
      } catch (err) {
        setError('Failed to load user data');
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://reqres.in/api/users/${id}`, userData);
      toast.success('User updated successfully!');
      // Update cache if available
      if (updateCachedUsers) {
        const cached = JSON.parse(localStorage.getItem('users_cache')) || [];
        const updated = cached.map(u => u.id.toString() === id ? { ...u, ...userData } : u);
        updateCachedUsers(updated);
      }
      navigate('/users');
    } catch (err) {
      toast.error('Failed to update user.');
    }
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div>
          <label>First Name:</label>
          <input type="text" name="first_name" value={userData.first_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last_name" value={userData.last_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUserForm;
