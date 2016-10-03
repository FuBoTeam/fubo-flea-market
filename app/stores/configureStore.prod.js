import {
  createStore,
  applyMiddleware,
  // compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import graphqlMiddleware from 'redux-graphql-middleware';
import thunk from 'redux-thunk';
import { fetch } from 'redux-auth';
// import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
// import rootSaga from '../sagas'

// const saga = createSagaMiddleware()

const graphOptions = {
  fetch,
  server: 'http://flea.fubotech.com.tw/graphql',
  action: 'GRAPH',
  ready: 'GRAPH_READY',
  done: 'GRAPH_DONE',
  error: 'GRAPH_ERROR',
  transform: (data) => { return data; },
  errorTransform: (error) => { return error; },
};

// const enhancer = applyMiddleware(thunk, saga)
const enhancer = applyMiddleware(
  routerMiddleware(browserHistory),
  graphqlMiddleware(graphOptions),
  thunk);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // saga.run(rootSaga)

  return store;
}