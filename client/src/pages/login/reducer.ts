import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from './constants';

const loginReducer = (state = [], action: any) => {
  const response = action;

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, response };
    case LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};

export default loginReducer;
