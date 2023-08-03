import { all, fork } from "redux-saga/effects";
import { watchblogProfileSaga } from "./blogSaga";
import { watchdestinationSaga } from "./destinationSaga";
import { watchteamProfileSaga } from "./teamSaga";
import { watchtestimonyProfileSaga } from './testimonySaga';
import { watchpostProfileSaga } from './postSaga';


export default function* rootSaga() {
  yield all([fork(watchteamProfileSaga), fork(watchdestinationSaga), fork(watchblogProfileSaga), fork(watchpostProfileSaga), fork(watchtestimonyProfileSaga)]);
}