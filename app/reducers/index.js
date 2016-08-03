import { combineReducers } from 'redux';

import goods from './goods';

const fleaMarketApp = combineReducers({
  goods,
});

export default fleaMarketApp;