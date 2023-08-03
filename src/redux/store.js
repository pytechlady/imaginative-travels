import { createStore, combineReducers, applyMiddleware, compose } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import teams from './team/teamReducer'
import destinations from './team/destinationReducer'
import blogs from './team/blogReducer'
import testimonys from "./team/testimonyReducer";
import posts from "./team/postReducer";


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    teams,
    destinations,
    blogs,
    testimonys,
    posts,
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store