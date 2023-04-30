import http from '../http-common';
import { LoginType } from '../pages/login/login.type';

export const loginUserService = (payload: LoginType) => {
  return http.post('auth/login', payload).then((response) => {
    if (
      response.status !== 200 ||
      !response.data?.token?.access_token ||
      !response.data?.token?.refresh_token ||
      !response.data?.user
    ) {
      throw new Error('Unauthenticated');
    }

    localStorage.setItem('access_token', response.data.token.access_token);
    localStorage.setItem('refresh_token', response.data.token.refresh_token);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return { isLoggedIn: true, user: response.data.user };
  });
};

export const logoutService = () => {
  // return http.post('auth/login', payload).then((response) => {
  //   if (
  //     response.status !== 200 ||
  //     !response.data?.token?.access_token ||
  //     !response.data?.token?.refresh_token ||
  //     !response.data?.user
  //   ) {
  //     throw new Error('Unauthenticated');
  //   }

  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');

  return { isLoggedIn: false };
  // });
};
