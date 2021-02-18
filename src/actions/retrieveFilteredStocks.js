const RETRIEVE_FILTERED_STOCKS = (store) => { 
  const {
    stockList,
    industryFilter,
    sectorFilter,
    countryFilter
  } = store.getState()
  const filteredStocks = stockList
  .filter(item => {    
    return ( sectorFilter === 'ANY'
        || item.sector === sectorFilter        
      ) && ( industryFilter === 'ANY'
        || item.industry === industryFilter        
      ) && ( countryFilter === 'ANY'
        || item.country === countryFilter
    )
    ? true   
    : false
  })
  return filteredStocks
}

export default RETRIEVE_FILTERED_STOCKS