import { LOGIN_USER, LOGOUT_USER } from './constants';
import { LoginType } from '../../pages/login/login.type';

export const loginAction = (payload: LoginType) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const logoutAction = () => {
  console.log(true);
  return {
    type: LOGOUT_USER,
  };
};
