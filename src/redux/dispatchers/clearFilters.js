export const CLEAR_FILTERS = dispatch => {
  dispatch({
    type: 'CHANGE_INDUSTRY_FILTER',
    industryFilter: 'ANY',
  });
  dispatch({
    type: 'CHANGE_SECTOR_FILTER',
    sectorFilter: 'ANY',
  });
  dispatch({
    type: 'CHANGE_COUNTRY_FILTER',
    countryFilter: 'ANY',
  });
};

export default CLEAR_FILTERS;
