import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import graph from './graph';
import user from './user';
import allGoods from './allGoods';
import my from './my';

const rootReducer = combineReducers({
  auth: authStateReducer,
  routing: routerReducer,
  graph,
  user,
  allGoods,
  my,
});

export default rootReducer;
