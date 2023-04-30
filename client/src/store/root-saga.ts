import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/saga';
import calculateSaga from './calculate/saga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(calculateSaga)]);
}
