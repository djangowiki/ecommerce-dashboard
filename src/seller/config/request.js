import axios from 'axios';

require('dotenv').config();

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': window.localStorage.getItem('token'),
  },
  // credentials: 'omit'
});

request.interceptors.request.use(
  (config) => {
    config.headers['x-auth-token'] = localStorage.getItem('token');
    return config;
  },
  (error) => Promise.reject(error)
);

export default request;
