import { combineReducers } from 'redux';

import countryFilter from './filters/country'
import industryFilter from './filters/industry'
import sectorFilter from './filters/sector'


const mainReducer = combineReducers({   
  industryList: (state = [], action) => state,
  countryList: (state = [], action) => state,
  sectorList: (state = [], action) => state,  
  countryFilter,
  industryFilter,  
  sectorFilter,
  stockList: (state = [], action) => state,
});

export default mainReducer;
