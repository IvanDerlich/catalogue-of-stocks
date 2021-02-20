import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import { retrieveFilteredStocks } from '../actions/index';

function StockList({ store }) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  /*
    The return value of the function bellow these comments is use to
    unsusbscribe to the store. The return value is a function
    used for cleanup.
  */
  useEffect(() => store.subscribe(() => { forceUpdate(); }), []);

  const stockList = retrieveFilteredStocks(store);
  const { length } = stockList;

  return (
    <div>
      <hr />
      <div>
        Fetched
        {` ${length} `}
        stocks
      </div>
      {stockList.map((stock, index) => (
        <Stock
          key={stock.id}
          number={index + 1}
          stock={stock}
        />
      ))}
    </div>
  );
}

StockList.propTypes = {
  store: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
};

export default StockList;
