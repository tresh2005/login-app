import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = async () => {
    const res = await axios.post('/api/auth/login', { f_userName: username, f_Pwd: pwd });
    if (res.data.success) {
      localStorage.setItem('username', username);
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
