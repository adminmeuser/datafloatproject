import logo from './logo.svg';
import { dbConfig } from './db';
import './App.css';
import React from 'react';
import { IndexedDBProvider } from 'react-indexed-db-hook';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import UserList from './UserList';

function App() {
  return (
    <IndexedDBProvider config={dbConfig}>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
        </a>
      </header>
    </div>
    </IndexedDBProvider>
  );
}

export default App;
