import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import { retrieveFilteredStocks } from '../actions/index';
import './StockList.scss';

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
      <hr />
      <table id="stocks-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Sector</th>
            <th>Industry</th>
            <th>Exchange</th>
            <th>Country</th>
            <th>Price</th>
            <th>Id</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((stock, index) => (
            <Stock
              key={stock.id}
              number={index + 1}
              stock={stock}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

StockList.propTypes = {
  store: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
};

export default StockList;
