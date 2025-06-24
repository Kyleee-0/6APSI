import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css'; 

function LoginPage() {
   /* FOR FUTURE PURPOSES
  const navigate = useNavigate();

  /*
  const handlelanding = () => {
    navigate('/landing');
  };
   */

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Username" className="input-field" /><br />
        <input type="password" placeholder="Password" className="input-field" /><br />
        <button className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;