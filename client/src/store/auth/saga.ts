import { put, call, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from './constants';
import { loginUserService, logoutService } from '../../services/auth-service';

export function* loginSaga(action: any) {
  try {
    const response: ReturnType<typeof loginUserService> = yield call(
      loginUserService,
      action.payload
    );
    yield put({ type: LOGIN_USER_SUCCESS, ...response });
  } catch (error) {
    yield put({ type: LOGIN_USER_ERROR, error });
  }
}

export function* logoutSaga() {
  try {
    const response: ReturnType<typeof logoutService> = yield call(logoutService);
    yield put({ type: LOGOUT_USER, response });
  } catch (error) {
    yield put({ type: LOGOUT_USER, error });
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_USER, loginSaga);
  yield takeLatest(LOGOUT_USER, logoutSaga);
}
