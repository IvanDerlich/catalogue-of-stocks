const getFilteredStocks = state => {
  const {
    stockList,
    industryFilter,
    sectorFilter,
    countryFilter,
  } = state;
  const filteredStocks = stockList
    .filter(item => (!!((sectorFilter === 'ANY'
        || item.sector === sectorFilter
    ) && (industryFilter === 'ANY'
        || item.industry === industryFilter
    ) && (countryFilter === 'ANY'
        || item.country === countryFilter
    ))));
  return filteredStocks;
};

export default getFilteredStocks;
