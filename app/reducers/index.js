import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import graph from './graph';
import user from './user';
import allGoods from './allGoods';
import good from './good';
import my from './my';

const rootReducer = combineReducers({
  auth: authStateReducer,
  routing: routerReducer,
  graph,
  user,
  allGoods,
  good,
  my,
});

export default rootReducer;
