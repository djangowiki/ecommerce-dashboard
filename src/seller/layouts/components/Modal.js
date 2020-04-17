// Modules.
import React from 'react';

const Modal = () => {
  return (
    <div className='modal fade' id='sign-out'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Are you sure you want to logout?</h4>
            <button type='button' className='close' data-dismiss='modal'>
              &times;
            </button>
          </div>
          <div className='modal-body'>
            <p>Click logout to leave</p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-success'
              data-dismiss='modal'
            >
              Stay Here
            </button>
            <button
              type='button'
              className='btn btn-danger'
              data-dismiss='modal'
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
