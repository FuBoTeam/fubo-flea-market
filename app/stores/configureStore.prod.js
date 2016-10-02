import {
  createStore,
  applyMiddleware,
  // compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
// import rootSaga from '../sagas'

// const saga = createSagaMiddleware()

// const enhancer = applyMiddleware(thunk, saga)
const enhancer = applyMiddleware(routerMiddleware(browserHistory), thunk);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // saga.run(rootSaga)

  return store;
}