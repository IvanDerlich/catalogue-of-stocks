export const CHANGE_INDUSTRY_FILTER = (industry, dispatch) => {
  dispatch({
    type: 'CHANGE_INDUSTRY_FILTER',
    industry
  })
}

export const CHANGE_EXCHANGE_FILTER = (exchange, dispatch) => {
  dispatch({
    type: 'CHANGE_EXCHANGE_FILTER',
    exchange
  })
}

export const CHANGE_SECTOR_FILTER = (sector, dispatch) => {
  dispatch({
    type: 'CHANGE_SECTOR_FILTER',
    sector
  })
}