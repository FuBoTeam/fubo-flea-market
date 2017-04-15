import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import graphqlMiddleware from 'redux-graphql-middleware';
import thunk from 'redux-thunk';
import { fetch } from 'redux-auth';

import rootReducer from '../reducers';

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
  applyMiddleware(
    routerMiddleware(browserHistory),
    graphqlMiddleware(graphOptions),
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reducers = require('../reducers');

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      return store.replaceReducer(reducers);
    });
  }

  return store;
}
