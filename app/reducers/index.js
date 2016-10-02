import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';

const rootReducer = combineReducers({
  auth: authStateReducer,
  routing: routerReducer,
});

export default rootReducer;
