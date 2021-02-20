/* eslint-disable no-param-reassign */
import getUniqueValuesFromList from './getUniqueValuesFromList';

const createInitialState = stockListInput => {
  const msg = 'NOT SPECIFIED';
  const stockList = stockListInput.map((item, index) => {
    if (item.sector === '') {
      item.sector = msg;
    }
    if (item.industry === '') {
      item.industry = msg;
    }
    if (item.country === '') {
      item.country = msg;
    }
    item.id = index;
    return item;
  });
  return {
    industryList: getUniqueValuesFromList(stockList, 'industry'),
    countryList: getUniqueValuesFromList(stockList, 'country'),
    sectorList: getUniqueValuesFromList(stockList, 'sector'),
    stockList,
  };
};

export default createInitialState;
