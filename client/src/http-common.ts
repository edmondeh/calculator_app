import axios from 'axios';

const http = axios.create({
  baseURL:
    process.env.REACT_APP_BACKEND_API +
    '/' +
    process.env.REACT_APP_BACKEND_API_VERSIONING,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

// http.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       // Store.dispatch('auth/logout');
//       // return Router.push('/login');
//     }
//   }
//
//   return Promise.reject(error);
// });

export default http;
