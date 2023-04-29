import { LOGIN_USER } from './constants';
import { LoginType } from './login.type';

export const loginUserAction = (payload: LoginType) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};
