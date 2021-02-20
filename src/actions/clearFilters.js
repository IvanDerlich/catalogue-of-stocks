export const CLEAR_FILTERS = store => {
  store.dispatch({
    type: 'CHANGE_INDUSTRY_FILTER',
    industryFilter: 'ANY',
  });
  store.dispatch({
    type: 'CHANGE_SECTOR_FILTER',
    sectorFilter: 'ANY',
  });
  store.dispatch({
    type: 'CHANGE_COUNTRY_FILTER',
    countryFilter: 'ANY',
  });
};

export default CLEAR_FILTERS;
