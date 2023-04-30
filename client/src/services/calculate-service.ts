import http from '../http-common';
import authHeaders from './auth-headers';

export const calculateService = (payload: string) => {
  return http
    .post('/calculate', JSON.stringify({ numbers: payload }), { headers: authHeaders() })
    .then((response) => {
      return response?.data ?? response;
    });
};
