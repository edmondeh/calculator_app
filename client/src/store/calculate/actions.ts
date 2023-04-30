import { CALCULATE_NUMBER } from './constants';

export const calculateAction = (payload: string) => {
  return {
    type: CALCULATE_NUMBER,
    payload,
  };
};
