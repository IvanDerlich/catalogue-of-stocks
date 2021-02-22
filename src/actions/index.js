import INITIALIZE from './initialize/index';
import CHANGE_FILTER from './changeFilter';
import RETRIEVE_FILTERED_STOCKS from './retrieveFilteredStocks';
import { CLEAR_FILTERS } from './clearFilters';

export const initialize = mode => INITIALIZE(mode);

export const changeFilter = (dispatch, filter, value) => CHANGE_FILTER(dispatch, filter, value);

export const clearFilters = store => CLEAR_FILTERS(store);

export const retrieveFilteredStocks = state => RETRIEVE_FILTERED_STOCKS(state);

export const retrieveSingleStock = (state, symbol) => state
  .stockList
  .find(stock => stock.symbol === symbol);
