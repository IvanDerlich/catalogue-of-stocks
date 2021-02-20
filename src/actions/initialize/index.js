/* eslint-disable no-async-promise-executor */
/* eslint-disable prefer-promise-reject-errors */
import { createStore } from 'redux';
import mainReducer from '../../reducers/index';
import offlineStockList from '../stockList';
import getStockList from '../../services/getStockList';
import createInitialState from './createInitialState';

const customResolve = (resolve, stockList) => {
  const initialState = createInitialState(stockList);
  const store = createStore(mainReducer, initialState);
  resolve(store);
};

const INITIALIZE = mode => new Promise(async (resolve, reject) => {
  const time = 100;
  if (mode === 'offline') {
    setTimeout(() => {
      customResolve(resolve, offlineStockList);
    }, time);
  } else if (mode === 'API') {
    const APIstockList = await getStockList()
      .then(stockList => stockList);
    customResolve(resolve, APIstockList);
  } else {
    reject('Please specify initializing mode: API or offline');
  }
});

export default INITIALIZE;
