import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import EditUserForm from './components/EditUserForm';
import { toast } from 'react-toastify';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [usersCache, setUsersCache] = useState(() => {
    const saved = localStorage.getItem('users_cache');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const expiry = localStorage.getItem('token_expiry');
      if (token && expiry && new Date().getTime() < parseInt(expiry)) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiry');
        setIsAuthenticated(false);
        if (location.pathname !== '/login') {
          navigate('/login');
          toast.info('Session expired. Please log in again.');
        }
      }
    };
    checkAuth();
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiry');
    setIsAuthenticated(false);
    navigate('/login');
    toast.success('Logged out successfully');
  };

  const updateUsersCache = (newData) => {
    setUsersCache(newData);
    localStorage.setItem('users_cache', JSON.stringify(newData));
  };

  if (isAuthenticated === null) return null;

  return (
    <div>
      {isAuthenticated && (
        <div className="logout-bar">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/users"
          element={
            isAuthenticated ? (
              <UsersPage
                key={location.key}
                cachedUsers={usersCache}
                updateCachedUsers={updateUsersCache}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit/:id"
          element={
            isAuthenticated ? (
              <EditUserForm updateCachedUsers={updateUsersCache} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
