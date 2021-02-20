import { useState, useCallback } from 'react';
import Stock from '../components/Stock';
import { retrieveFilteredStocks } from '../actions/index';

function StockList({ store }) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  store.subscribe(() => { forceUpdate(); });
  const stockList = retrieveFilteredStocks(store);
  const { length } = stockList;

  return (
    <div>
      <hr />
      <div>
        Fetched
        {length}
        {' '}
        stocks
      </div>
      {stockList.map((stock, index) => (
        <Stock
          key={index}
          number={index + 1}
          stock={stock}
        />
      ))}
    </div>
  );
}

export default StockList;
