// Modules.
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Fragment>
      <div className='row align-items-center'>
        <div className='col-md-5'>
          <h4 className='text-light mb-0 text-uppercase'>Dashboard</h4>
        </div>
        <div className='col-md-4'>
          <form>
            <div className='input-group'>
              <input
                type='text'
                className='form-control search-input'
                placeholder='Search...'
              />
              <button type='button' className='btn btn-light search-button'>
                <i className='fas fa-search text-danger'></i>
              </button>
            </div>
          </form>
        </div>
        <div className='col-md-3'>
          <ul className='navbar-nav'>
            <li className='nav-item icon-parent'>
              <Link className='nav-link icon-bullet'>
                <i className='fas fa-bell fa-lg text-muted'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>
                <i className='fas fa-store-alt fa-lg text-muted'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'>
                <i className='fas fa-shopping-cart fa-lg text-muted'></i>
              </Link>
            </li>
            <li className='nav-item ml-md-auto'>
              <Link
                className='nav-link'
                data-toggle='modal'
                data-target='#sign-out'
              >
                <i className='fas fa-sign-out-alt fa-lg text-danger'></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Menu;
