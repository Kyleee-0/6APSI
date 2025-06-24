import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css'; 

function LandingPage() {
  const navigate = useNavigate();

  const handlelanding = () => {
    navigate('/login');
  };
  
  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1>6APSI</h1>
        <h1>Welcome, User!</h1>
        <button className="landing-btn" onClick={handlelanding}>
          Click here to login!
        </button>
      </div>
    </div>
  );
}

export default LandingPage;