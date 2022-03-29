import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import teams from './team/teamReducer'


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    teams
  });

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store