import { CALCULATE_NUMBER_ERROR, CALCULATE_NUMBER_SUCCESS } from './constants';

const calculateReducer = (state = [], action: any) => {
  const response = action;

  switch (action.type) {
    case CALCULATE_NUMBER_SUCCESS:
      return {
        ...state,
        response: response.response,
        error: null,
      };
    case CALCULATE_NUMBER_ERROR:
      return { ...state, error: { message: response?.error?.response?.data?.message } };
    default:
      return state;
  }
};

export default calculateReducer;
