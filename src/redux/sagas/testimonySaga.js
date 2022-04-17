import { call, put, takeLatest } from "redux-saga/effects";

import * as TestimonyAPI from "../requests/testimonyRequest";
import { testimonys, testimonyProfileFailed, testimonyProfileSuccess } from "../team/testimonyReducer";

function* testimonySaga(action) {
  try {
    const { payload } = action;
    const testimonyResponse = yield call(TestimonyAPI.testimony, payload);
    yield put(testimonyProfileSuccess(testimonyResponse));
  } catch (error) {
    yield put(testimonyProfileFailed(error));
  }
}
export function* watchtestimonyProfileSaga() {
  yield takeLatest(testimonys.type, testimonySaga);
}