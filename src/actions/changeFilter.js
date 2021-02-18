const CHANGE_FILTER = (store, filter, value) => {
  switch (filter) {
    case 'industry':
      return store.dispatch({
        type: 'CHANGE_INDUSTRY_FILTER',
        industryFilter: value,
      })
    case 'sector':
      return store.dispatch({
        type: 'CHANGE_SECTOR_FILTER',
        sectorFilter: value,
      })
    case 'country':
      return store.dispatch({
        type: 'CHANGE_COUNTRY_FILTER',
        countryFilter: value,
      })
    default:
      return false
  }
}

export default CHANGE_FILTER