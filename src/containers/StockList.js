// import { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import getFilteredStocks from '../redux/getters/getFilteredStocks';
import './StockList.scss';

const StockList = ({ stockList }) => (
  <div>
    <hr />
    <div>
      Fetched
      {` ${stockList.length} `}
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
        </tr>
      </thead>
      <tbody>
        {stockList.map(stock => (
          <Stock
            key={stock.id}
            stock={stock}
          />
        ))}
      </tbody>
    </table>
  </div>
);

StockList.propTypes = {
  stockList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  stockList: getFilteredStocks(state),
});

export default connect(mapStateToProps)(StockList);
