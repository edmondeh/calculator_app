import React from 'react';
import { images } from '../../constants';
import './navbar.scss';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <div className="app_navbar">
      <div className="app_navbar__text">
        <h1>Hello, {user?.first_name}</h1>
        <div className="app_navbar__textImage">
          <img src={images.hand} alt="hand" />
        </div>
      </div>
      <div className="app_navbar__photo">
        <img src={images.user} alt="user" />
      </div>
    </div>
  );
};

export default Navbar;
