import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import graph from './graph';
import user from './user';

const rootReducer = combineReducers({
  auth: authStateReducer,
  routing: routerReducer,
  graph,
  user,
});

export default rootReducer;
