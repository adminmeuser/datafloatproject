import React, { useState } from 'react';
import { IndexedDB } from 'react-indexed-db-hook';
const Register = () => {
  const { add } = IndexedDB('users');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (username && password) {
      // Add user to IndexedDB
      add({ username, password, status: 'active' })
        .then(() => alert('User registered successfully!'))
        .catch(err => alert('Registration failed: ' + err.message));
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
