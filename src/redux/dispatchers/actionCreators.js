import types from '../reducers/actionTypes';

export const loadStockList = stockList => ({
  type: types.LOAD_STOCK_LIST,
  stockList,
});

export const loadSectorList = sectorList => ({
  type: types.LOAD_SECTOR_LIST,
  sectorList,
});

export const loadIndustryList = industryList => ({
  type: types.LOAD_INDUSTRY_LIST,
  industryList,
});

export const loadCountryList = countryList => ({
  type: types.LOAD_COUNTRY_LIST,
  countryList,
});

export const show = () => ({
  type: types.SHOW,
});

export const hide = () => ({
  type: types.HIDE,
});

export const offlineFetching = () => ({
  type: types.OFFLINE,
});

export const apiFetching = () => ({
  type: types.API,
});
