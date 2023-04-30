import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import calculateReducer from './calculate/reducer';

export default combineReducers({
  auth: authReducer,
  calculate: calculateReducer,
});
