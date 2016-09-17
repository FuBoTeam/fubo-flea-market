import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import goods from './goods';

const rootReducer = combineReducers({
  goods,
  auth: authStateReducer,
  routing: routerReducer,
});

export default rootReducer;
