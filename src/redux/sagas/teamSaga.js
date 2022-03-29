import { call, put, takeLatest } from "redux-saga/effects";

import * as TeamAPI from "../requests/teamRequest";
import { teams, teamProfileFailed, teamProfileSuccess } from "../team/teamReducer";

function* teamProfileSaga(action) {
  try {
    const { payload } = action;
    const teamResponse = yield call(TeamAPI.teams, payload);
    yield put(teamProfileSuccess(teamResponse));
  } catch (error) {
    yield put(teamProfileFailed(error));
  }
}
export function* watchteamProfileSaga() {
  yield takeLatest(teams.type, teamProfileSaga);
}