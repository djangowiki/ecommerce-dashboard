// Modules.
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/modules/actions/user';

const Login = ({ login }) => {
  // State.
  const initialState = {
    email: '',
    password: ''
  };
  const [user, loginUser] = useState(initialState);
  const { email, password } = user;

  // onChange Handler.
  const onChange = e => {
    loginUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // onSubmit Handler.
  const onSubmit = e => {
    e.preventDefault();
    // console.log(user);
    login(email, password);
  };
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-3 col-sm-6 p-2'>
          <div className='card card-common'>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <div className='text-secondary text-center'>
                  <h5>User Login</h5>
                </div>
              </div>
            </div>
            <div className='card-footer text-secondary'>
              <form onSubmit={onSubmit}>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  placeholder='Enter your Email Address'
                  className='form-control'
                />
                <br />
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  placeholder='Enter your password'
                  className='form-control'
                />
                <br />
                <input
                  type='submit'
                  value='Login'
                  className='btn btn-primary btn-sm'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginUser(email, password))
});
export default connect(null, mapDispatchToProps)(Login);
