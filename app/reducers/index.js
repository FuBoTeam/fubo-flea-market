import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import goods from './goods';

const fleaMarketApp = combineReducers({
  goods,
  routing: routerReducer,
});

export default fleaMarketApp;