import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { persistState } from 'redux-devtools';
import graphqlMiddleware from 'redux-graphql-middleware';
import thunk from 'redux-thunk';
import { fetch } from 'redux-auth';
// import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
// import rootSaga from '../sagas'
import DevTools from '../containers/DevTools';

// const saga = createSagaMiddleware()

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

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

const enhancer = compose(
  // applyMiddleware(thunk, saga),
  applyMiddleware(
    routerMiddleware(browserHistory),
    graphqlMiddleware(graphOptions),
    thunk
  ),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  persistState(getDebugSessionKey())
);

const reducers = require('../reducers');

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  // saga.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      return store.replaceReducer(reducers);
    });
  }

  return store;
}