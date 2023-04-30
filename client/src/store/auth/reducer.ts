import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER } from './constants';

const authReducer = (state = [], action: any) => {
  const response = action;

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: response?.user,
        isLoggedIn: response?.isLoggedIn,
        error: null,
      };
    case LOGIN_USER_ERROR:
      return { ...state, error: { message: response?.error?.response?.data?.message } };
    case LOGOUT_USER:
      return { ...response };
    default:
      return state;
  }
};

export default authReducer;
