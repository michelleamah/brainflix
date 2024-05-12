import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/Mohan-muruge.jpg'; 
import logo from '../../BrainFlix-logo.svg'; 
import upload from '../../assets/images/Icons/upload.svg';
import './Header.scss'; 

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image" />
      </div>
      <div className="header__flex-container">
        <div className="header__search">
            <input type="text" placeholder="Search" className="header__search-input" />
        </div>
        <div className="header__avatar">
            <img src={avatar} alt="Avatar" className="header__avatar-image" />
        </div>
      </div>
      <div className="header__upload">
        <Link to="/upload"> 
          <img src={upload} alt="Upload" className="header__upload-icon" />
          UPLOAD
        </Link>
      </div>
    </header>
  );
}

export default Header;