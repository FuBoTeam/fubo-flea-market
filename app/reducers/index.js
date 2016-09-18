import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import goods from './goods';
import user from './user';

const rootReducer = combineReducers({
  goods,
  auth: authStateReducer,
  user,
  routing: routerReducer,
});

export default rootReducer;
