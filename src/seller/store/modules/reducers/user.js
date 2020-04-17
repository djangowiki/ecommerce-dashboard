// Modules.
import { LOGIN_USER } from '../types';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem(('token', action.payload));
      return {
        ...state,
      };
    default:
      return {
        state,
      };
  }
};

export default user;
