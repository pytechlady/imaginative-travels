import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import teams from './team/teamReducer'
import destinations from './team/destinationReducer'
import blogs from './team/blogReducer'
import testimonys from "./team/testimonyReducer";


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    teams,
    destinations,
    blogs,
    testimonys
  });

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store