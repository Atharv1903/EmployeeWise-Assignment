import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserCard({ user, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://reqres.in/api/users/${user.id}`);
      onDelete(user.id);
    } catch {
      alert('Failed to delete user');
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${user.id}`);
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div>
        <h4>{user.first_name} {user.last_name}</h4>
        <p>{user.email}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
