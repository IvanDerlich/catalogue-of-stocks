import INITIALIZE from './initialize'

export const initialize = mode => INITIALIZE(mode)

export const changeFilter = (store, filter, value) => {
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

export const retrieveSingleStock = (store, symbol) => {  
  return store
    .getState()
    .stockList
    .find( stock => stock.symbol === symbol)
}

export const retrieveFilteredStocks = (store) => { 
  const {
    stockList,
    industryFilter,
    sectorFilter,
    countryFilter
  } = store.getState()
  return stockList
  .filter(item => {
    if(item.sector !== sectorFilter){
      return false
    }
    if(item.industry !== industryFilter){
      return false
    }
    if(item.countryFilter !== countryFilter){
      return false
    }
    return true
  })
}