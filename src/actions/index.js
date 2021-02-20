import INITIALIZE from './initialize/index';
import CHANGE_FILTER from './changeFilter';
import RETRIEVE_FILTERED_STOCKS from './retrieveFilteredStocks';
import { CLEAR_FILTERS } from './clearFilters';

export const initialize = mode => INITIALIZE(mode);

export const changeFilter = (store, filter, value) => CHANGE_FILTER(store, filter, value);

export const retrieveFilteredStocks = store => RETRIEVE_FILTERED_STOCKS(store);

export const clearFilters = store => CLEAR_FILTERS(store);

export const retrieveSingleStock = (store, symbol) => store
  .getState()
  .stockList
  .find(stock => stock.symbol === symbol);
