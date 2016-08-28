import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import goods from './goods';

const rootReducer = combineReducers({
  goods,
  routing: routerReducer,
});

export default rootReducer;