import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleCreateAccountClick = () => {
    window.location.href = 'https://app.rockae.com/Register';
  };

  const handleSignInClick = () => {
    window.location.href = 'https://app.rockae.com/Login';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://raw.githubusercontent.com/MyRockae/.github/main/thumbnails/WebsiteLogo.svg" alt="Rockae Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </div>
      <div className="navbar-auth">
        <button className="btn-signin" onClick={handleSignInClick}>Sign in</button>
        <button className="btn-create-account" onClick={handleCreateAccountClick}>Create an Account</button>
      </div>
    </nav>
  );
};

export default Navbar;
