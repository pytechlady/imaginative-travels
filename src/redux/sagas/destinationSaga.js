import { call, put, takeLatest } from "redux-saga/effects";

import * as DestinationAPI from "../requests/destinationRequest";
import { destinations, destinationProfileFailed, destinationProfileSuccess } from "../team/destinationReducer";

function* destinationSaga(action) {
  try {
    const { payload } = action;
    const destinationResponse = yield call(DestinationAPI.destinations, payload);
    yield put(destinationProfileSuccess(destinationResponse));
  } catch (error) {
    yield put(destinationProfileFailed(error));
  }
}
export function* watchdestinationSaga() {
  yield takeLatest(destinations.type, destinationSaga);
}