import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CALCULATE_NUMBER,
  CALCULATE_NUMBER_ERROR,
  CALCULATE_NUMBER_SUCCESS,
} from './constants';
import { calculateService } from '../../services/calculate-service';

export function* calculate(action: any) {
  try {
    const response: ReturnType<typeof calculateService> = yield call(
      calculateService,
      action.payload
    );
    yield put({ type: CALCULATE_NUMBER_SUCCESS, response });
  } catch (error) {
    yield put({ type: CALCULATE_NUMBER_ERROR, error });
  }
}

export default function* calculateSaga() {
  yield takeLatest(CALCULATE_NUMBER, calculate);
}
