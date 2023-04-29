import { put, call, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from './constants';
import { loginUserService } from '../../services/auth-service';

export function* login(payload: any) {
  try {
    const response: ReturnType<typeof loginUserService> = yield call(
      loginUserService,
      payload
    );
    yield put({ type: LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOGIN_USER_ERROR, error });
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_USER, login);
}
