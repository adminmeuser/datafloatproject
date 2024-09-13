import React, { useState, useEffect } from 'react';
import { IndexedDB } from 'react-indexed-db-hook';
const UserList = () => {
  const { getAll, update, deleteRecord } = IndexedDB('users');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users from IndexedDB on component mount
    getAll().then(usersFromDB => {
      setUsers(usersFromDB);
    });
  }, []);

  const toggleBlock = (user) => {
    const updatedUser = { ...user, status: user.status === 'active' ? 'blocked' : 'active' };
    update(updatedUser).then(() => {
      setUsers(users.map(u => (u.id === user.id ? updatedUser : u)));
    });
  };

  const removeUser = (id) => {
    deleteRecord(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.status}
            <button onClick={() => toggleBlock(user)}>
              {user.status === 'active' ? 'Block' : 'Unblock'}
            </button>
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
