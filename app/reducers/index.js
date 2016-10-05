import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import graph from './graph';

const rootReducer = combineReducers({
  auth: authStateReducer,
  routing: routerReducer,
  graph,
});

export default rootReducer;
