import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import goods from './goods';
import user from './user';

const rootReducer = combineReducers({
  goods,
<<<<<<< HEAD
  auth: authStateReducer,
=======
  user,
>>>>>>> 7343fa4... Implement goods information and editing components.
  routing: routerReducer,
});

export default rootReducer;
