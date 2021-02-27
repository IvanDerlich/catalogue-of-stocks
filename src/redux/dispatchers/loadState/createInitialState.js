import getUniqueValuesFromList from './getUniqueValues';

const createInitialState = stockListInput => {
  const msg = 'NOT SPECIFIED';
  const stockList = stockListInput.map((stockInput, index) => {
    const stock = stockInput;
    if (stock.sector === '') {
      stock.sector = msg;
    }
    if (stock.industry === '') {
      stock.industry = msg;
    }
    if (stock.country === '') {
      stock.country = msg;
    }
    stock.id = index;
    return stock;
  });
  return {
    industryList: getUniqueValuesFromList(stockList, 'industry'),
    countryList: getUniqueValuesFromList(stockList, 'country'),
    sectorList: getUniqueValuesFromList(stockList, 'sector'),
    stockList,
  };
};

export default createInitialState;
