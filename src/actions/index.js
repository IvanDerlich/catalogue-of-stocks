import initialize from './initialize'

export const CHANGE_INDUSTRY_FILTER = (store, industryFilter) => {
  store.dispatch({
    type: 'CHANGE_INDUSTRY_FILTER',
    industryFilter,
  })
}

export const CHANGE_COUNTRY_FILTER = (store, countryFilter) => {
  store.dispatch({
    type: 'CHANGE_COUNTRY_FILTER',           
    countryFilter,
  })
}

export const CHANGE_SECTOR_FILTER = (store, sectorFilter) => {
  store.dispatch({
    type: 'CHANGE_SECTOR_FILTER',
    sectorFilter,
  })
}

export const RETRIEVE_SINGLE_STOCK = (store, symbol) => {  
  return store
    .getState()
    .stockList
    .find( stock => stock.symbol === symbol)
}

export const INITIALIZE = (mode) => {
  return initialize(mode)
}

export const RETRIEVE_FILTERED_STOCKS = (store, symbol) => { 
  return []
}