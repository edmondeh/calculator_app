import http from '../http-common';

export const loginUserService = (request: any) => {
  return http
    .post('auth/login', request.payload)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      if (data?.access_token && data?.refresh_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
      }
      return {};
    });
};
