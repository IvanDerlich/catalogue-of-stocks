// eslint-disable-next-line import/prefer-default-export
export const getSingleStock = (state, symbol) => state
  .stockList
  .find(stock => stock.symbol === symbol);
