import React from 'react';
import logo from '../images/logo.jpg';

const Header = () => {
  return (
    <div className='container-fluid header'>
      <div className='sub-header'>
        <div className='logoContainer'>
          <img alt='logo' src={logo} className='hauzit-logo' />
          <h1 className='hauzit-Text'>HAUZIT</h1>
        </div>
        <ul className='list-Container'>
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Mortage</li>
          <li>Professionals</li>
        </ul>
      </div>
      <ul className='list-Container list'>
        <li>List Rentals</li>
        <li>Work with us</li>
        <li>Register/Sign in</li>
      </ul>
    </div>
  );
};

export default Header;
