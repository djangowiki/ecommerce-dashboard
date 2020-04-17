import { LOGIN_USER } from '../types';
import request from '../../../config/request';

export const saveToken = (token) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: token,
  });
};

export const loginUser = (email, password) => (dispatch) => {
  console.log('young');
  return request
    .post('seller/login', { email, password })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err.message);
    });
};
