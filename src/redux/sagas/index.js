import { all, fork } from "redux-saga/effects";
import { watchteamProfileSaga } from "./teamSaga";


export default function* rootSaga() {
  yield all([fork(watchteamProfileSaga)]);
}