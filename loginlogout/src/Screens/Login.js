import React, { useState } from 'react';
import '../App.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check username and password
    if (username === 'username' && password === 'password') {
      onLogin(true); // Successful login
    } else {
      onLogin(false); // Unsuccessful login
    }
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Please log in with your username and password below.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password: 
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
