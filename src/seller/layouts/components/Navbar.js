// Modules.
import React, { Fragment } from 'react';

// Custom Modules.
import { Modal, Sidebar, Menu } from '../../layouts';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-md navbar-light'>
        <button
          className='navbar-toggler ml-auto mb-2 bg-light'
          type='button'
          data-toggle='collapse'
          data-target='#adminNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='adminNavbar'>
          <div className='container-fluid'>
            <div className='row'>
              {/* Sidebar */}
              <Sidebar />
              {/* Top Navigation */}
              <div className='col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar'>
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Modal />
    </Fragment>
  );
};
export default Navbar;
