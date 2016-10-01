import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import user from './user';

const rootReducer = combineReducers({
  auth: authStateReducer,
  user,
  routing: routerReducer,
});

export default rootReducer;
