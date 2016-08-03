import {
  createStore,
  applyMiddleware,
  // compose,
} from 'redux';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'

import fleaMarketApp from '../reducers';
// import rootSaga from '../sagas'

// const saga = createSagaMiddleware()

// const enhancer = applyMiddleware(thunk, saga)
const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState) {
  const store = createStore(fleaMarketApp, initialState, enhancer);

  // saga.run(rootSaga)

  return store;
}