// import {
//   changeFilter,
//   retrieveFilteredStocks,
//   clearFilters,
// } from '../actions/index';

// const filterAndRetrieve = (store, category, value, expectedLength) => {
//   changeFilter(store, category, value);
//   expect(store.getState()[`${category}Filter`]).toEqual(value);
//   const stocks = retrieveFilteredStocks(store);
//   expect(stocks.length).toBe(expectedLength);
//   clearFilters(store);
// };
// export default filterAndRetrieve;
