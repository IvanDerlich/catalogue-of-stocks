/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';

import countryFilter from './filters/country';
import industryFilter from './filters/industry';
import sectorFilter from './filters/sector';
import industryList from './lists/industry';
import countryList from './lists/country';
import sectorList from './lists/sector';
import stockList from './lists/stocks';
import visible from './visible';
import fetchingMode from './fetchingMode';

const rootReducer = combineReducers({
  industryFilter,
  countryFilter,
  sectorFilter,
  industryList,
  countryList,
  sectorList,
  stockList,
  visible,
  fetchingMode,
});

export default rootReducer;
