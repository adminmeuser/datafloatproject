import React, { useState } from 'react';
import { IndexedDB } from 'react-indexed-db-hook';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { getByIndex } = IndexedDB('users');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      getByIndex('username', username).then(user => {
        if (user && user.password === password) {
          alert('Login successful!');
          navigate('/users');  // Redirect to UserList on successful login
        } else {
          alert('Invalid credentials');
        }
      }).catch(err => alert('Error: ' + err.message));
    } else {
      alert('Please enter both username and password');
    }
  }; 

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
