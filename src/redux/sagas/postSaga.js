// postSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import * as PostAPI from "../requests/postRequest";
import {
  posts,
  postProfileFailed,
  postProfileSuccess,
} from "../team/postReducer";

function* postSaga(action) {
  try {
    const { payload } = action;
    const postResponse = yield call(PostAPI.posts, payload.id); // Pass the blogId to the API request
    yield put(postProfileSuccess(postResponse));
  } catch (error) {
    yield put(postProfileFailed(error));
  }
}

export function* watchpostProfileSaga() {
  yield takeLatest("POST", postSaga);
}
