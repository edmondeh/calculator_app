import { all, fork } from 'redux-saga/effects';
import loginSaga from '../pages/login/saga';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
