import types from '../actionTypes';

const stockList = (
  state = [],
  action,
) => {
  switch (action.type) {
    case types.LOAD_STOCK_LIST:
      return action.stockList;
    default:
      return state;
  }
};

export default stockList;
