import { call, put, takeLatest } from "redux-saga/effects";

import * as BlogAPI from "../requests/blogRequest";
import { blogs, blogProfileFailed, blogProfileSuccess } from "../team/blogReducer";

function* blogSaga(action) {
  try {
    const { payload } = action;
    const blogResponse = yield call(BlogAPI.blogs, payload);
    yield put(blogProfileSuccess(blogResponse));
  } catch (error) {
    yield put(blogProfileFailed(error));
  }
}
export function* watchblogProfileSaga() {
  yield takeLatest(blogs.type, blogSaga);
}