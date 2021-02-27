const changeFilter = (dispatch, filter, value) => {
  switch (filter) {
    case 'industry':
      return dispatch({
        type: 'CHANGE_INDUSTRY_FILTER',
        industryFilter: value,
      });
    case 'sector':
      return dispatch({
        type: 'CHANGE_SECTOR_FILTER',
        sectorFilter: value,
      });
    case 'country':
      return dispatch({
        type: 'CHANGE_COUNTRY_FILTER',
        countryFilter: value,
      });
    default:
      return false;
  }
};

export default changeFilter;
