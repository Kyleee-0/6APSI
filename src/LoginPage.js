import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/landing');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div style={{ 
        padding: '20px', 
        border: '5px solid #ccc', 
        borderRadius: '5px', 
        textAlign: 'center' 
      }}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" style={{ display: 'block', margin: '10px auto' }} /><br />
        <input type="password" placeholder="Password" style={{ display: 'block', margin: '10px auto' }} /><br />
        <button style={{ marginTop: '10px' }} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;