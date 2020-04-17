// Modules.
import React from 'react';
import { Link } from 'react-router-dom';

// Image.
import adminImage from '../../../assets/gamer.jpg';

const Sidebar = () => {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 sidebar fixed-top'>
      <Link
        to='/'
        className='navbar-brand text-white d-block mx-auto mb-4 text-center py-3 bottom-border'
      >
        eCommerce Dashboard
      </Link>
      <div className='bottom-border pb-3'>
        <img
          src={adminImage}
          alt='admin'
          style={{ width: '50px' }}
          className='rounded-circle mr-3'
        />
        <Link to='/' className='text-white'>
          Ikenn Gabriel Ifenna
        </Link>
      </div>
      <ul className='navbar-nav flex-column mt-4'>
        <li className='nav-item'>
          <Link
            to='/'
            className='nav-link text-white p-3 mb-2 sidebar-link current'
          >
            <i className='fas fa-tachometer-alt text-light fa-lg mr-3'></i>
            Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-user text-light fa-lg mr-3'></i>
            Seller Profile
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-store-alt text-light fa-lg mr-3'></i>
            Seller Shop
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/products'
            className='nav-link text-white p-3 mb-2 sidebar-link'
          >
            <i className='fas fa-list-alt text-light fa-lg mr-3'></i>
            Seller Products
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-plus-circle text-light fa-lg mr-3'></i>
            Add Product
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-chart-bar text-light fa-lg mr-3'></i>
            Sales
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-shopping-cart text-light fa-lg mr-3'></i>
            Orders
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-money-bill-alt text-light fa-lg mr-3'></i>
            Payments
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-envelope text-light fa-lg mr-3'></i>
            Messages
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-wrench text-light fa-lg mr-3'></i>
            Settings
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link text-white p-3 mb-2 sidebar-link'>
            <i className='fas fa-file-alt text-light fa-lg mr-3'></i>
            Seller Guide
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
